"use client";

import { useState, useMemo } from "react";
import {
  FolderOpen,
  FileCode2,
  Folder,
  ChevronRight,
  ChevronDown,
  FileJson,
} from "lucide-react";
import classNames from "classnames";

import { Page } from "@/types";
import { useEditor } from "@/hooks/useEditor";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FileNode {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: FileNode[];
  page?: Page;
}

export function FileBrowser() {
  const {
    pages,
    currentPage,
    setCurrentPage,
    setPreviewPage,
    globalEditorLoading,
    project,
  } = useEditor();
  const [open, setOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["/"])
  );

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const fileTree = useMemo(() => {
    const root: FileNode = {
      name: "root",
      path: "/",
      type: "folder",
      children: [],
    };

    pages.forEach((page) => {
      const parts = page.path.split("/").filter(Boolean);
      let currentNode = root;

      parts.forEach((part, index) => {
        const isFile = index === parts.length - 1;
        const currentPath = "/" + parts.slice(0, index + 1).join("/");

        if (!currentNode.children) {
          currentNode.children = [];
        }

        let existingNode = currentNode.children.find((n) => n.name === part);

        if (!existingNode) {
          existingNode = {
            name: part,
            path: currentPath,
            type: isFile ? "file" : "folder",
            children: isFile ? undefined : [],
            page: isFile ? page : undefined,
          };
          currentNode.children.push(existingNode);
        }

        if (!isFile) {
          currentNode = existingNode;
        }
      });
    });

    // Sort: folders first, then files, both alphabetically
    const sortNodes = (nodes: FileNode[] = []): FileNode[] => {
      return nodes
        .sort((a, b) => {
          if (a.type !== b.type) {
            return a.type === "folder" ? -1 : 1;
          }
          return a.name.localeCompare(b.name);
        })
        .map((node) => ({
          ...node,
          children: node.children ? sortNodes(node.children) : undefined,
        }));
    };

    root.children = sortNodes(root.children);
    return root;
  }, [pages]);

  const getFileIcon = (path: string) => {
    const extension = path.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "html":
        return (
          <svg className="size-4 shrink-0" viewBox="0 0 32 32" fill="none">
            <path
              d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
              fill="#E44D26"
            />
            <path
              d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z"
              fill="#F16529"
            />
            <path
              d="M16 13.407h4.09l.282-3.165H16V7.151h7.75l-.074.829-.759 8.518H16v-3.091z"
              fill="#EBEBEB"
            />
            <path
              d="M16 21.434l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z"
              fill="#EBEBEB"
            />
            <path
              d="M19.90 16.18l-.372 4.148-3.543.956v3.216l6.336-1.755.047-.522.537-6.043H19.90z"
              fill="#FFF"
            />
            <path
              d="M16 7.151v3.091h-7.3l-.062-.695-.141-1.567-.074-.829H16zM16 13.407v3.091h-3.399l-.062-.695-.14-1.566-.074-.83H16z"
              fill="#FFF"
            />
          </svg>
        );
      case "css":
        return (
          <svg className="size-4 shrink-0" viewBox="0 0 32 32" fill="none">
            <path
              d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
              fill="#1572B6"
            />
            <path
              d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z"
              fill="#33A9DC"
            />
            <path
              d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"
              fill="#FFF"
            />
            <path
              d="M16.019 21.218l-.014.004-3.442-.929-.22-2.465H9.24l.433 4.852 6.331 1.758.015-.004v-3.216z"
              fill="#EBEBEB"
            />
            <path
              d="M19.827 16.151l-.372 4.148-3.436.929v3.216l6.336-1.755.047-.522.726-8.016h-7.636v3h4.335z"
              fill="#FFF"
            />
            <path
              d="M16.011 6.935v3.091h-7.3l-.062-.695-.141-1.567-.074-.829h7.577zM16 13.191v3.091h-3.399l-.062-.695-.14-1.566-.074-.83H16z"
              fill="#EBEBEB"
            />
          </svg>
        );
      case "js":
      case "jsx":
        return (
          <svg className="size-4 shrink-0" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="2" fill="#F7DF1E" />
            <path
              d="M20.63 22.3c.54.88 1.24 1.53 2.48 1.53.98 0 1.6-.48 1.6-1.16 0-.8-.64-1.1-1.72-1.57l-.59-.25c-1.7-.72-2.83-1.63-2.83-3.55 0-1.77 1.35-3.12 3.46-3.12 1.5 0 2.58.52 3.36 1.9l-1.84 1.18c-.4-.72-.84-1-1.51-1-.69 0-1.12.43-1.12 1 0 .7.43 1 1.43 1.43l.59.25c2 .86 3.13 1.73 3.13 3.7 0 2.12-1.66 3.3-3.9 3.3-2.18 0-3.6-1.04-4.3-2.4l1.96-1.12z"
              fill="#000"
            />
            <path
              d="M11.14 22.56c.35.62.67 1.15 1.44 1.15.74 0 1.2-.29 1.2-1.42V14.7h2.4v7.63c0 2.34-1.37 3.4-3.37 3.4-1.8 0-2.85-.94-3.38-2.06l1.71-1.1z"
              fill="#000"
            />
          </svg>
        );
      case "json":
        return <FileJson className="size-4 shrink-0 text-amber-400" />;
      default:
        return <FileCode2 className="size-4 shrink-0 text-neutral-400" />;
    }
  };

  const getFileExtension = (path: string) => {
    return path.split(".").pop()?.toLowerCase() || "";
  };

  const getLanguageTag = (path: string) => {
    const extension = path.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "html":
        return {
          name: "HTML",
          color: "bg-orange-500/20 border-orange-500/30 text-orange-400",
        };
      case "css":
        return {
          name: "CSS",
          color: "bg-blue-500/20 border-blue-500/30 text-blue-400",
        };
      case "js":
        return {
          name: "JS",
          color: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
        };
      case "json":
        return {
          name: "JSON",
          color: "bg-amber-500/20 border-amber-500/30 text-amber-400",
        };
      default:
        return {
          name: extension?.toUpperCase() || "FILE",
          color: "bg-neutral-500/20 border-neutral-500/30 text-neutral-400",
        };
    }
  };

  const currentPageData = pages.find((p) => p.path === currentPage);

  const renderFileTree = (nodes: FileNode[], depth = 0) => {
    return nodes.map((node) => {
      if (node.type === "folder") {
        const isExpanded = expandedFolders.has(node.path);
        return (
          <div key={node.path}>
            <div
              className="flex items-center gap-2 px-3 py-1 cursor-pointer text-[13px] group transition-colors hover:bg-neutral-800"
              style={{ paddingLeft: `${depth * 12 + 12}px` }}
              onClick={() => toggleFolder(node.path)}
            >
              {isExpanded ? (
                <ChevronDown className="size-3.5 text-neutral-400 shrink-0" />
              ) : (
                <ChevronRight className="size-3.5 text-neutral-400 shrink-0" />
              )}
              <Folder className="size-4 text-blue-400 shrink-0" />
              <span className="text-neutral-300 truncate flex-1 font-normal">
                {node.name}
              </span>
              <span className="text-[10px] text-neutral-500">
                {node.children?.length || 0}
              </span>
            </div>
            {isExpanded &&
              node.children &&
              renderFileTree(node.children, depth + 1)}
          </div>
        );
      } else {
        const isActive = currentPage === node.page?.path;
        return (
          <div
            key={node.path}
            className={classNames(
              "flex items-center gap-2.5 px-3 py-1 cursor-pointer text-[13px] group transition-colors relative",
              {
                "bg-neutral-700 text-white": isActive,
                "text-neutral-300 hover:bg-neutral-800": !isActive,
              }
            )}
            style={{ paddingLeft: `${depth * 12 + 12 + 16}px` }}
            onClick={() => {
              if (node.page) {
                setCurrentPage(node.page.path);
                if (
                  node.page.path.endsWith(".html") &&
                  !node.page.path.includes("components")
                ) {
                  setPreviewPage(node.page.path);
                }
                setOpen(false);
              }
            }}
          >
            <div className="w-4 flex justify-center shrink-0">
              {getFileIcon(node.name)}
            </div>

            <span className="truncate flex-1 font-normal">{node.name}</span>

            <span
              className={classNames(
                "text-[10px] px-1.5 py-0.5 rounded uppercase font-semibold transition-opacity shrink-0",
                isActive
                  ? `opacity-100 ${getLanguageTag(node.name).color}`
                  : "opacity-0 group-hover:opacity-100 bg-white/5 text-neutral-500"
              )}
            >
              {getFileExtension(node.name)}
            </span>

            {isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500" />
            )}
          </div>
        );
      }
    });
  };

  return (
    <div>
      {/* VS Code-style Tab Bar */}
      <div className="w-full flex items-center bg-neutral-900 min-h-[35px] border-b border-neutral-800">
        <div className="flex items-stretch overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-700">
          {currentPageData && (
            <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border-r border-neutral-800 text-sm min-w-0 relative group">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {getFileIcon(currentPageData.path)}
                <span className="text-neutral-300 truncate font-normal text-[13px]">
                  {currentPageData.path}
                </span>
                <span
                  className={classNames(
                    "text-[9px] px-1.5 py-0.5 rounded border backdrop-blur-sm font-semibold uppercase tracking-wide",
                    getLanguageTag(currentPageData.path).color
                  )}
                >
                  {getLanguageTag(currentPageData.path).name}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Open Explorer Button */}
        <TooltipProvider>
          <Tooltip>
            <Sheet open={open} onOpenChange={setOpen} modal={false}>
              <TooltipTrigger asChild>
                <SheetTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled={pages.length === 0 || globalEditorLoading}
                    className="ml-auto mr-2 text-neutral-300 hover:text-white hover:bg-neutral-800 h-7 text-[13px] font-normal gap-1.5"
                  >
                    <FolderOpen className="size-3.5" />
                    <span className="hidden sm:inline">Files</span>
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500 font-semibold">
                      {pages.length}
                    </span>
                  </Button>
                </SheetTrigger>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-neutral-800 border-neutral-700 text-neutral-300 text-xs"
              >
                <p>
                  Open File Explorer ({pages.length}{" "}
                  {pages.length === 1 ? "file" : "files"})
                </p>
              </TooltipContent>

              <SheetContent
                side="left"
                className="w-[320px] bg-neutral-900 border-neutral-800 p-0"
              >
                <SheetHeader className="px-5 py-2.5 border-b border-neutral-800 space-y-0">
                  <SheetTitle className="flex items-center gap-2">
                    <FolderOpen className="size-4 text-neutral-300" />
                    <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                      Explorer
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="px-3 py-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2 px-2 py-1">
                    <svg
                      className="size-4 text-neutral-300"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 1h11l2 2v10l-2 2h-11l-2-2V3l2-2zm0 1l-1 1v10l1 1h11l1-1V3l-1-1h-11z" />
                      <path d="M7.5 4.5v3h-3v1h3v3h1v-3h3v-1h-3v-3h-1z" />
                    </svg>
                    <span className="text-[13px] text-neutral-300 font-normal">
                      {project?.space_id || "No space selected"}
                    </span>
                    <span className="ml-auto text-[11px] text-neutral-500">
                      {pages.length || 0}
                    </span>
                  </div>
                </div>

                <div
                  className="py-1 overflow-y-auto"
                  style={{ height: "calc(100vh - 160px)" }}
                >
                  {fileTree.children && renderFileTree(fileTree.children)}
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t border-neutral-800 bg-neutral-900">
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <div className="size-2 rounded-full bg-orange-600" />
                      <span>
                        HTML:{" "}
                        {pages.filter((p) => p.path.endsWith(".html")).length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <div className="size-2 rounded-full bg-blue-600" />
                      <span>
                        CSS:{" "}
                        {pages.filter((p) => p.path.endsWith(".css")).length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <div className="size-2 rounded-full bg-yellow-400" />
                      <span>
                        JS: {pages.filter((p) => p.path.endsWith(".js")).length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <div className="size-2 rounded-full bg-yellow-600" />
                      <span>
                        JSON:{" "}
                        {pages.filter((p) => p.path.endsWith(".json")).length}
                      </span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
