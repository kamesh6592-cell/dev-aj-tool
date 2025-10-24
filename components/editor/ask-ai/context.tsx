import { useState, useMemo } from "react";
import { FileCode, FileText, Braces, AtSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEditor } from "@/hooks/useEditor";
import { useAi } from "@/hooks/useAi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import classNames from "classnames";

export const Context = () => {
  const { pages, currentPage, globalEditorLoading } = useEditor();
  const { contextFile, setContextFile, globalAiLoading } = useAi();
  const [open, setOpen] = useState(false);

  const selectedFile = contextFile || null;

  const getFileIcon = (filePath: string, size = "size-3.5") => {
    if (filePath.endsWith(".css")) {
      return <Braces className={size} />;
    } else if (filePath.endsWith(".js")) {
      return <FileCode className={size} />;
    } else if (filePath.endsWith(".json")) {
      return <Braces className={size} />;
    } else {
      return <FileText className={size} />;
    }
  };

  const buttonContent = useMemo(() => {
    if (selectedFile) {
      return (
        <>
          <span className="truncate max-w-[120px]">{selectedFile}</span>
        </>
      );
    }
    return <>Add Context</>;
  }, [selectedFile]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="xs"
          variant={open ? "default" : "outline"}
          className={classNames("!rounded-md", {
            "!bg-blue-500/10 !border-blue-500/30 !text-blue-400":
              selectedFile && selectedFile.endsWith(".css"),
            "!bg-orange-500/10 !border-orange-500/30 !text-orange-400":
              selectedFile && selectedFile.endsWith(".html"),
            "!bg-amber-500/10 !border-amber-500/30 !text-amber-400":
              selectedFile && selectedFile.endsWith(".js"),
            "!bg-yellow-500/10 !border-yellow-500/30 !text-yellow-400":
              selectedFile && selectedFile.endsWith(".json"),
          })}
          disabled={
            globalAiLoading || globalEditorLoading || pages.length === 0
          }
        >
          <AtSign className="size-3.5" />

          {buttonContent}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-64 !bg-neutral-900 !border-neutral-800 !p-0 !rounded-2xl overflow-hidden"
      >
        <header className="flex items-center justify-center text-xs px-2 py-2.5 border-b gap-2 bg-neutral-950 border-neutral-800 font-semibold text-neutral-200">
          Select a file to send as context
        </header>
        <main className="space-y-1 p-2">
          <div className="max-h-[200px] overflow-y-auto space-y-0.5">
            {pages.length === 0 ? (
              <div className="px-2 py-2 text-xs text-neutral-500">
                No files available
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setContextFile(null);
                    setOpen(false);
                  }}
                  className={`cursor-pointer w-full px-2 py-1.5 text-xs text-left rounded-md hover:bg-neutral-800 transition-colors ${
                    !selectedFile
                      ? "bg-neutral-800 text-neutral-200 font-medium"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  All files (default)
                </button>
                {pages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => {
                      setContextFile(page.path);
                      setOpen(false);
                    }}
                    className={`cursor-pointer w-full px-2 py-1.5 text-xs text-left rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-1.5 ${
                      selectedFile === page.path
                        ? "bg-neutral-800 text-neutral-200 font-medium"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <span className="shrink-0">
                      {getFileIcon(page.path, "size-3")}
                    </span>
                    <span className="truncate flex-1">{page.path}</span>
                    {page.path === currentPage && (
                      <span className="text-[10px] text-neutral-500 shrink-0">
                        (current)
                      </span>
                    )}
                  </button>
                ))}
              </>
            )}
          </div>
        </main>
      </PopoverContent>
    </Popover>
  );
};
