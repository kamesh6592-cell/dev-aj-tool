import { useRef, useState } from "react";
import classNames from "classnames";
import { ArrowUp, ChevronDown, CircleStop } from "lucide-react";
import { useLocalStorage, useUpdateEffect, useMount } from "react-use";
import { toast } from "sonner";

import { useAi } from "@/hooks/useAi";
import { useEditor } from "@/hooks/useEditor";
import { EnhancedSettings, Project } from "@/types";
import { SelectedFiles } from "@/components/editor/ask-ai/selected-files";
import { SelectedHtmlElement } from "@/components/editor/ask-ai/selected-html-element";
import { AiLoading } from "@/components/editor/ask-ai/loading";
import { Button } from "@/components/ui/button";
import { Uploader } from "@/components/editor/ask-ai/uploader";
import { ReImagine } from "@/components/editor/ask-ai/re-imagine";
import { Selector } from "@/components/editor/ask-ai/selector";
import { PromptBuilder } from "@/components/editor/ask-ai/prompt-builder";
import { useUser } from "@/hooks/useUser";
import { useLoginModal } from "@/components/contexts/login-context";
import { Settings } from "./settings";
import { useProModal } from "@/components/contexts/pro-context";
import { MAX_FREE_PROJECTS } from "@/lib/utils";

export const AskAi = ({
  project,
  isNew,
  onScrollToBottom,
}: {
  project?: Project;
  files?: string[];
  isNew?: boolean;
  onScrollToBottom?: () => void;
}) => {
  const { user, projects } = useUser();
  const { isSameHtml, isUploading, pages, isLoadingProject } = useEditor();
  console.log("isSameHtml", isSameHtml);
  const {
    isAiWorking,
    isThinking,
    selectedFiles,
    setSelectedFiles,
    selectedElement,
    setSelectedElement,
    setIsThinking,
    callAiNewProject,
    callAiFollowUp,
    setModel,
    selectedModel,
    audio: hookAudio,
    cancelRequest,
  } = useAi(onScrollToBottom);
  const { openLoginModal } = useLoginModal();
  const { openProModal } = useProModal();
  const [openProvider, setOpenProvider] = useState(false);
  const [providerError, setProviderError] = useState("");
  const refThink = useRef<HTMLDivElement>(null);

  const [enhancedSettings, setEnhancedSettings, removeEnhancedSettings] =
    useLocalStorage<EnhancedSettings>("deepsite-enhancedSettings", {
      isActive: true,
      primaryColor: undefined,
      secondaryColor: undefined,
      theme: undefined,
    });
  const [promptStorage, , removePromptStorage] = useLocalStorage("prompt", "");

  const [isFollowUp, setIsFollowUp] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [think, setThink] = useState("");
  const [openThink, setOpenThink] = useState(false);

  const handleThink = (think: string) => {
    setThink(think);
    setIsThinking(true);
    setOpenThink(true);
  };

  useMount(() => {
    if (promptStorage && promptStorage.trim() !== "") {
      setPrompt(promptStorage);
      callAi();
    }
  });

  const callAi = async (redesignMarkdown?: string) => {
    if (!user) return openLoginModal();
    removePromptStorage();
    if (!user.isPro && projects.length >= MAX_FREE_PROJECTS)
      return openProModal([]);
    if (isAiWorking) return;
    if (!redesignMarkdown && !prompt.trim()) return;

    if (isFollowUp && !redesignMarkdown && !isSameHtml) {
      const result = await callAiFollowUp(prompt, enhancedSettings, isNew);

      if (result?.error) {
        handleError(result.error, result.message);
        return;
      }

      if (result?.success) {
        setPrompt("");
      }
    } else {
      const result = await callAiNewProject(
        prompt,
        enhancedSettings,
        redesignMarkdown,
        handleThink,
        () => {
          setIsThinking(false);
        }
      );

      if (result?.error) {
        handleError(result.error, result.message);
        return;
      }

      if (result?.success) {
        setPrompt("");
        // if (selectedModel?.isThinker) {
        //   setModel(MODELS[0].value);
        // }
      }
    }
  };

  const handleError = (error: string, message?: string) => {
    switch (error) {
      case "login_required":
        openLoginModal();
        break;
      case "provider_required":
        setOpenProvider(true);
        setProviderError(message || "");
        break;
      case "pro_required":
        openProModal([]);
        break;
      case "api_error":
        toast.error(message || "An error occurred");
        break;
      case "network_error":
        toast.error(message || "Network error occurred");
        break;
      default:
        toast.error("An unexpected error occurred");
    }
  };

  useUpdateEffect(() => {
    if (refThink.current) {
      refThink.current.scrollTop = refThink.current.scrollHeight;
    }
  }, [think]);

  return (
    <div className="p-3 w-full">
      <div className="relative bg-neutral-800 border border-neutral-700 rounded-2xl ring-[4px] focus-within:ring-neutral-500/30 focus-within:border-neutral-600 ring-transparent z-20 w-full group">
        {think && (
          <div className="w-full border-b border-neutral-700 relative overflow-hidden">
            <header
              className="flex items-center justify-between px-5 py-2.5 group hover:bg-neutral-600/20 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setOpenThink(!openThink);
              }}
            >
              <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">
                {isThinking ? "DeepSite is thinking..." : "DeepSite's plan"}
              </p>
              <ChevronDown
                className={classNames(
                  "size-4 text-neutral-400 group-hover:text-neutral-300 transition-all duration-200",
                  {
                    "rotate-180": openThink,
                  }
                )}
              />
            </header>
            <main
              ref={refThink}
              className={classNames(
                "overflow-y-auto transition-all duration-200 ease-in-out",
                {
                  "max-h-[0px]": !openThink,
                  "min-h-[250px] max-h-[250px] border-t border-neutral-700":
                    openThink,
                }
              )}
            >
              <p className="text-[13px] text-neutral-400 whitespace-pre-line px-5 pb-4 pt-3">
                {think}
              </p>
            </main>
          </div>
        )}
        <SelectedFiles
          files={selectedFiles}
          isAiWorking={isAiWorking}
          onDelete={(file) =>
            setSelectedFiles(selectedFiles.filter((f) => f !== file))
          }
        />
        {selectedElement && (
          <div className="px-4 pt-3">
            <SelectedHtmlElement
              element={selectedElement}
              isAiWorking={isAiWorking}
              onDelete={() => setSelectedElement(null)}
            />
          </div>
        )}
        <div className="w-full relative flex items-center justify-between">
          {(isAiWorking || isUploading || isThinking || isLoadingProject) && (
            <div className="absolute bg-neutral-800 top-0 left-4 w-[calc(100%-30px)] h-full z-1 flex items-start pt-3.5 justify-between max-lg:text-sm">
              <AiLoading
                text={
                  isLoadingProject
                    ? "Fetching your project..."
                    : isUploading
                    ? "Uploading images..."
                    : isAiWorking && !isSameHtml
                    ? "DeepSite is working..."
                    : "DeepSite is thinking..."
                }
              />
              {isAiWorking && (
                <Button
                  size="iconXs"
                  variant="outline"
                  className="!rounded-md mr-0.5"
                  onClick={cancelRequest}
                >
                  <CircleStop className="size-4" />
                </Button>
              )}
            </div>
          )}
          <textarea
            disabled={
              isAiWorking || isUploading || isThinking || isLoadingProject
            }
            className={classNames(
              "w-full bg-transparent text-sm outline-none text-white placeholder:text-neutral-400 p-4 resize-none",
              {
                "!pt-2.5":
                  selectedElement &&
                  !(isAiWorking || isUploading || isThinking),
              }
            )}
            placeholder={
              selectedElement
                ? `Ask DeepSite about ${selectedElement.tagName.toLowerCase()}...`
                : isFollowUp && (!isSameHtml || pages?.length > 1)
                ? "Ask DeepSite for edits"
                : "Ask DeepSite anything..."
            }
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                callAi();
              }
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-2 px-4 pb-3 mt-2">
          <div className="flex-1 flex items-center justify-start gap-1.5 flex-wrap">
            <PromptBuilder
              enhancedSettings={enhancedSettings!}
              setEnhancedSettings={setEnhancedSettings}
            />
            <Settings
              open={openProvider}
              error={providerError}
              isFollowUp={!isSameHtml && isFollowUp}
              onClose={setOpenProvider}
            />
            {!isNew && <Uploader project={project} />}
            {isNew && <ReImagine onRedesign={(md) => callAi(md)} />}
            {!isNew && <Selector />}
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              size="iconXs"
              variant="outline"
              className="!rounded-md"
              disabled={
                isAiWorking || isUploading || isThinking || !prompt.trim()
              }
              onClick={() => callAi()}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
      </div>
      <audio ref={hookAudio} id="audio" className="hidden">
        <source src="/success.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
