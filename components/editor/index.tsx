"use client";
import { useMemo, useRef, useState, useEffect } from "react";
import { useCopyToClipboard, useLocalStorage, useMount } from "react-use";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";
import classNames from "classnames";
import { editor } from "monaco-editor";
import Editor from "@monaco-editor/react";

import { useEditor } from "@/hooks/useEditor";
import { Header } from "@/components/editor/header";
import { useAi } from "@/hooks/useAi";

import { FileBrowser } from "./file-browser";
import { AskAi } from "./ask-ai";
import { Preview } from "./preview";
import { SaveChangesPopup } from "./save-changes-popup";
import { DiscordPromoModal } from "@/components/discord-promo-modal";
import Loading from "../loading";
import { Page } from "@/types";

export const AppEditor = ({
  namespace,
  repoId,
  isNew = false,
}: {
  namespace?: string;
  repoId?: string;
  isNew?: boolean;
}) => {
  const {
    project,
    setPages,
    files,
    currentPageData,
    currentTab,
    currentCommit,
    hasUnsavedChanges,
    saveChanges,
    globalEditorLoading,
    pages,
  } = useEditor(namespace, repoId);
  const { isAiWorking } = useAi();
  const [, copyToClipboard] = useCopyToClipboard();
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [pagesStorage, , removePagesStorage] = useLocalStorage<Page[]>("pages");

  const monacoRef = useRef<any>(null);
  const editor = useRef<HTMLDivElement>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  useMount(() => {
    if (isNew && pagesStorage) {
      setPages(pagesStorage);
      removePagesStorage();
    }
  });

  useEffect(() => {
    if (hasUnsavedChanges && !isAiWorking && project?.space_id) {
      setShowSavePopup(true);
    } else {
      setShowSavePopup(false);
    }
  }, [hasUnsavedChanges, isAiWorking]);

  // Determine the language based on file extension
  const editorLanguage = useMemo(() => {
    const path = currentPageData.path;
    if (path.endsWith(".css")) return "css";
    if (path.endsWith(".js")) return "javascript";
    if (path.endsWith(".json")) return "json";
    return "html";
  }, [currentPageData.path]);

  // Determine the copy message based on file type
  const copyMessage = useMemo(() => {
    if (editorLanguage === "css") return "CSS copied to clipboard!";
    if (editorLanguage === "javascript")
      return "JavaScript copied to clipboard!";
    if (editorLanguage === "json") return "JSON copied to clipboard!";
    return "HTML copied to clipboard!";
  }, [editorLanguage]);

  return (
    <section className="h-screen w-full bg-neutral-950 flex flex-col">
      <Header isNew={isNew} />
      <main className="bg-neutral-950 flex-1 max-lg:flex-col flex w-full relative">
        <div
          ref={editor}
          className={classNames(
            "bg-neutral-900 relative flex h-full max-h-[calc(100dvh-47px)] w-full flex-col lg:max-w-[600px] transition-all duration-200",
            {
              "max-lg:hidden lg:!w-[0px] overflow-hidden":
                currentTab !== "chat",
            }
          )}
        >
          <FileBrowser />
          <CopyIcon
            className="size-4 absolute top-14 right-5 text-neutral-500 hover:text-neutral-300 z-2 cursor-pointer"
            onClick={() => {
              copyToClipboard(currentPageData.html);
              toast.success(copyMessage);
            }}
          />
          <Editor
            language={editorLanguage}
            theme="vs-dark"
            loading={<Loading overlay={false} />}
            className="h-full absolute left-0 top-0 lg:min-w-[600px]"
            options={{
              colorDecorators: true,
              fontLigatures: true,
              theme: "vs-dark",
              minimap: { enabled: false },
              scrollbar: {
                horizontal: "hidden",
              },
              wordWrap: "on",
              readOnly: !!isAiWorking || !!currentCommit || globalEditorLoading,
              readOnlyMessage: {
                value: globalEditorLoading
                  ? "Wait for TOMO loading your project..."
                  : currentCommit
                  ? "You can't edit the code, as this is an old version of the project."
                  : "Wait for TOMO to finish working...",
                isTrusted: true,
              },
              cursorBlinking: "smooth",
            }}
            value={currentPageData.html}
            onChange={(value) => {
              const newValue = value ?? "";
              setPages((prev) =>
                prev.map((page) =>
                  page.path === currentPageData.path
                    ? { ...page, html: newValue }
                    : page
                )
              );
            }}
            onMount={(editor, monaco) => {
              editorRef.current = editor;
              monacoRef.current = monaco;
            }}
          />
          <AskAi
            project={project}
            files={files}
            isNew={isNew}
            onScrollToBottom={() => {
              editorRef.current?.revealLine(
                editorRef.current?.getModel()?.getLineCount() ?? 0
              );
            }}
          />
        </div>
        <Preview isNew={isNew} namespace={namespace} repoId={repoId} />
      </main>

      <SaveChangesPopup
        isOpen={showSavePopup}
        onClose={() => setShowSavePopup(false)}
        onSave={saveChanges}
        hasUnsavedChanges={hasUnsavedChanges}
        pages={pages}
        project={project}
      />

      <DiscordPromoModal />
    </section>
  );
};
