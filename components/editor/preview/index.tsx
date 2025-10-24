"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { useUpdateEffect } from "react-use";
import classNames from "classnames";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magic-ui/grid-pattern";
import { useEditor } from "@/hooks/useEditor";
import { useAi } from "@/hooks/useAi";
import { htmlTagToText } from "@/lib/html-tag-to-text";
import { AnimatedBlobs } from "@/components/animated-blobs";
import { AiLoading } from "../ask-ai/loading";
import { defaultHTML } from "@/lib/consts";
import { HistoryNotification } from "../history-notification";
import { api } from "@/lib/api";
import { toast } from "sonner";

export const Preview = ({ isNew }: { isNew: boolean }) => {
  const {
    project,
    device,
    isLoadingProject,
    currentTab,
    currentCommit,
    setCurrentCommit,
    currentPageData,
    pages,
    setPages,
    setCurrentPage,
    previewPage,
    setPreviewPage,
  } = useEditor();
  const {
    isEditableModeEnabled,
    setSelectedElement,
    isAiWorking,
    globalAiLoading,
  } = useAi();

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [hoveredElement, setHoveredElement] = useState<{
    tagName: string;
    rect: { top: number; left: number; width: number; height: number };
  } | null>(null);
  const [isPromotingVersion, setIsPromotingVersion] = useState(false);
  const [stableHtml, setStableHtml] = useState<string>("");
  const [throttledHtml, setThrottledHtml] = useState<string>("");
  const lastUpdateTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!previewPage && pages.length > 0) {
      const indexPage = pages.find(
        (p) => p.path === "index.html" || p.path === "index" || p.path === "/"
      );
      const firstHtmlPage = pages.find((p) => p.path.endsWith(".html"));
      setPreviewPage(indexPage?.path || firstHtmlPage?.path || "index.html");
    }
  }, [pages, previewPage]);

  const previewPageData = useMemo(() => {
    const found = pages.find((p) => {
      const normalizedPagePath = p.path.replace(/^\.?\//, "");
      const normalizedPreviewPage = previewPage.replace(/^\.?\//, "");
      return normalizedPagePath === normalizedPreviewPage;
    });
    return found || currentPageData;
  }, [pages, previewPage, currentPageData]);

  const injectAssetsIntoHtml = useCallback(
    (html: string): string => {
      if (!html) return html;

      // Find all CSS and JS files (including those in subdirectories)
      const cssFiles = pages.filter(
        (p) => p.path.endsWith(".css") && p.path !== previewPageData?.path
      );
      const jsFiles = pages.filter(
        (p) => p.path.endsWith(".js") && p.path !== previewPageData?.path
      );

      let modifiedHtml = html;

      // Inject all CSS files
      if (cssFiles.length > 0) {
        const allCssContent = cssFiles
          .map(
            (file) =>
              `<style data-injected-from="${file.path}">\n${file.html}\n</style>`
          )
          .join("\n");

        if (modifiedHtml.includes("</head>")) {
          modifiedHtml = modifiedHtml.replace(
            "</head>",
            `${allCssContent}\n</head>`
          );
        } else if (modifiedHtml.includes("<head>")) {
          modifiedHtml = modifiedHtml.replace(
            "<head>",
            `<head>\n${allCssContent}`
          );
        } else {
          // If no head tag, prepend to document
          modifiedHtml = allCssContent + "\n" + modifiedHtml;
        }

        // Remove all link tags that reference CSS files we're injecting
        cssFiles.forEach((file) => {
          const escapedPath = file.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          modifiedHtml = modifiedHtml.replace(
            new RegExp(
              `<link\\s+[^>]*href=["'][\\.\/]*${escapedPath}["'][^>]*>`,
              "gi"
            ),
            ""
          );
        });
      }

      // Inject all JS files
      if (jsFiles.length > 0) {
        const allJsContent = jsFiles
          .map(
            (file) =>
              `<script data-injected-from="${file.path}">\n${file.html}\n</script>`
          )
          .join("\n");

        if (modifiedHtml.includes("</body>")) {
          modifiedHtml = modifiedHtml.replace(
            "</body>",
            `${allJsContent}\n</body>`
          );
        } else if (modifiedHtml.includes("<body>")) {
          modifiedHtml = modifiedHtml + allJsContent;
        } else {
          // If no body tag, append to document
          modifiedHtml = modifiedHtml + "\n" + allJsContent;
        }

        // Remove all script tags that reference JS files we're injecting
        jsFiles.forEach((file) => {
          const escapedPath = file.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          modifiedHtml = modifiedHtml.replace(
            new RegExp(
              `<script\\s+[^>]*src=["'][\\.\/]*${escapedPath}["'][^>]*><\\/script>`,
              "gi"
            ),
            ""
          );
        });
      }

      return modifiedHtml;
    },
    [pages, previewPageData?.path]
  );

  useEffect(() => {
    if (isNew && previewPageData?.html) {
      const now = Date.now();
      const timeSinceLastUpdate = now - lastUpdateTimeRef.current;

      if (lastUpdateTimeRef.current === 0 || timeSinceLastUpdate >= 3000) {
        const processedHtml = injectAssetsIntoHtml(previewPageData.html);
        setThrottledHtml(processedHtml);
        lastUpdateTimeRef.current = now;
      } else {
        const timeUntilNextUpdate = 3000 - timeSinceLastUpdate;
        const timer = setTimeout(() => {
          const processedHtml = injectAssetsIntoHtml(previewPageData.html);
          setThrottledHtml(processedHtml);
          lastUpdateTimeRef.current = Date.now();
        }, timeUntilNextUpdate);
        return () => clearTimeout(timer);
      }
    }
  }, [isNew, previewPageData?.html, injectAssetsIntoHtml]);

  useEffect(() => {
    if (!isAiWorking && !globalAiLoading && previewPageData?.html) {
      const processedHtml = injectAssetsIntoHtml(previewPageData.html);
      setStableHtml(processedHtml);
    }
  }, [
    isAiWorking,
    globalAiLoading,
    previewPageData?.html,
    injectAssetsIntoHtml,
    previewPage,
  ]);

  useEffect(() => {
    if (
      previewPageData?.html &&
      !stableHtml &&
      !isAiWorking &&
      !globalAiLoading
    ) {
      const processedHtml = injectAssetsIntoHtml(previewPageData.html);
      setStableHtml(processedHtml);
    }
  }, [
    previewPageData?.html,
    stableHtml,
    isAiWorking,
    globalAiLoading,
    injectAssetsIntoHtml,
  ]);

  const setupIframeListeners = () => {
    if (iframeRef?.current?.contentDocument) {
      const iframeDocument = iframeRef.current.contentDocument;

      // Use event delegation to catch clicks on anchors in both light and shadow DOM
      iframeDocument.addEventListener(
        "click",
        handleCustomNavigation as any,
        true
      );

      if (isEditableModeEnabled) {
        iframeDocument.addEventListener("mouseover", handleMouseOver);
        iframeDocument.addEventListener("mouseout", handleMouseOut);
        iframeDocument.addEventListener("click", handleClick);
      }
    }
  };

  useEffect(() => {
    const cleanupListeners = () => {
      if (iframeRef?.current?.contentDocument) {
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.removeEventListener(
          "click",
          handleCustomNavigation as any,
          true
        );
        iframeDocument.removeEventListener("mouseover", handleMouseOver);
        iframeDocument.removeEventListener("mouseout", handleMouseOut);
        iframeDocument.removeEventListener("click", handleClick);
      }
    };

    const timer = setTimeout(() => {
      if (iframeRef?.current?.contentDocument) {
        cleanupListeners();
        setupIframeListeners();
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      cleanupListeners();
    };
  }, [isEditableModeEnabled, stableHtml, throttledHtml, previewPage]);

  const promoteVersion = async () => {
    setIsPromotingVersion(true);
    await api
      .post(
        `/me/projects/${project?.space_id}/commits/${currentCommit}/promote`
      )
      .then((res) => {
        if (res.data.ok) {
          setCurrentCommit(null);
          setPages(res.data.pages);
          setCurrentPage(res.data.pages[0].path);
          setPreviewPage(res.data.pages[0].path);
          toast.success("Version promoted successfully");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
    setIsPromotingVersion(false);
  };

  const handleMouseOver = (event: MouseEvent) => {
    if (iframeRef?.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        const targetElement = event.target as HTMLElement;
        if (
          hoveredElement?.tagName !== targetElement.tagName ||
          hoveredElement?.rect.top !==
            targetElement.getBoundingClientRect().top ||
          hoveredElement?.rect.left !==
            targetElement.getBoundingClientRect().left ||
          hoveredElement?.rect.width !==
            targetElement.getBoundingClientRect().width ||
          hoveredElement?.rect.height !==
            targetElement.getBoundingClientRect().height
        ) {
          if (targetElement !== iframeDocument.body) {
            const rect = targetElement.getBoundingClientRect();
            setHoveredElement({
              tagName: targetElement.tagName,
              rect: {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
              },
            });
            targetElement.classList.add("hovered-element");
          } else {
            return setHoveredElement(null);
          }
        }
      }
    }
  };
  const handleMouseOut = () => {
    setHoveredElement(null);
  };
  const handleClick = (event: MouseEvent) => {
    if (iframeRef?.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        const path = event.composedPath();
        const targetElement = path[0] as HTMLElement;

        console.log(
          "[handleClick] Target element:",
          targetElement.tagName,
          targetElement
        );

        const findClosestAnchor = (
          element: HTMLElement
        ): HTMLAnchorElement | null => {
          let current: HTMLElement | null = element;
          while (current) {
            console.log("[handleClick] Checking element:", current.tagName);
            if (current.tagName?.toUpperCase() === "A") {
              return current as HTMLAnchorElement;
            }
            if (current === iframeDocument.body) {
              break;
            }
            const parent: Node | null = current.parentNode;
            // Use nodeType to check - works across iframe boundaries
            // nodeType 1 = Element, nodeType 11 = DocumentFragment (including ShadowRoot)
            if (parent && parent.nodeType === 11) {
              // ShadowRoot
              current = (parent as ShadowRoot).host as HTMLElement;
            } else if (parent && parent.nodeType === 1) {
              // Element node
              current = parent as HTMLElement;
            } else {
              break;
            }
          }
          return null;
        };

        const anchorElement = findClosestAnchor(targetElement);

        console.log("[handleClick] Found anchor:", anchorElement);

        if (anchorElement) {
          return;
        }

        if (targetElement !== iframeDocument.body) {
          setSelectedElement(targetElement);
        }
      }
    }
  };

  const handleCustomNavigation = (event: MouseEvent) => {
    if (iframeRef?.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        const path = event.composedPath();
        const actualTarget = path[0] as HTMLElement;

        console.log(
          "[handleCustomNavigation] Click detected in iframe:",
          actualTarget.tagName,
          actualTarget
        );

        const findClosestAnchor = (
          element: HTMLElement
        ): HTMLAnchorElement | null => {
          let current: HTMLElement | null = element;
          while (current) {
            console.log(
              "[handleCustomNavigation] Checking element:",
              current.tagName,
              current
            );
            if (current.tagName?.toUpperCase() === "A") {
              console.log("[handleCustomNavigation] Found anchor!", current);
              return current as HTMLAnchorElement;
            }
            if (current === iframeDocument.body) {
              console.log("[handleCustomNavigation] Reached body, stopping");
              break;
            }
            const parent: Node | null = current.parentNode;
            console.log(
              "[handleCustomNavigation] Parent node:",
              parent,
              "nodeType:",
              parent?.nodeType
            );
            // Use nodeType to check - works across iframe boundaries
            // nodeType 1 = Element, nodeType 11 = DocumentFragment (including ShadowRoot)
            if (parent && parent.nodeType === 11) {
              // ShadowRoot
              current = (parent as ShadowRoot).host as HTMLElement;
            } else if (parent && parent.nodeType === 1) {
              // Element node
              current = parent as HTMLElement;
            } else {
              console.log(
                "[handleCustomNavigation] Parent is not an element node, breaking"
              );
              break;
            }
          }
          return null;
        };

        const anchorElement = findClosestAnchor(actualTarget);
        console.log("[handleCustomNavigation] Anchor element:", anchorElement);
        if (anchorElement) {
          let href = anchorElement.getAttribute("href");
          if (href) {
            event.stopPropagation();
            event.preventDefault();

            if (href.startsWith("#")) {
              let targetElement = iframeDocument.querySelector(href);

              if (!targetElement) {
                const searchInShadows = (
                  root: Document | ShadowRoot
                ): Element | null => {
                  const elements = root.querySelectorAll("*");
                  for (const el of elements) {
                    if (el.shadowRoot) {
                      const found = el.shadowRoot.querySelector(href);
                      if (found) return found;
                      const nested = searchInShadows(el.shadowRoot);
                      if (nested) return nested;
                    }
                  }
                  return null;
                };
                targetElement = searchInShadows(iframeDocument);
              }

              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
              return;
            }

            let normalizedHref = href.replace(/^\.?\//, "");

            if (normalizedHref === "" || normalizedHref === "/") {
              normalizedHref = "index.html";
            }

            const hashIndex = normalizedHref.indexOf("#");
            if (hashIndex !== -1) {
              normalizedHref = normalizedHref.substring(0, hashIndex);
            }

            if (!normalizedHref.includes(".")) {
              normalizedHref = normalizedHref + ".html";
            }

            const isPageExist = pages.some((page) => {
              const pagePath = page.path.replace(/^\.?\//, "");
              return pagePath === normalizedHref;
            });

            if (isPageExist) {
              setPreviewPage(normalizedHref);
            }
          }
        }
      }
    }
  };

  return (
    <div
      className={classNames(
        "bg-neutral-900/30 w-full h-[calc(100dvh-57px)] flex flex-col items-center justify-center relative z-1 lg:border-l border-neutral-800",
        {
          "max-lg:h-0 overflow-hidden": currentTab === "chat",
          "max-lg:h-full": currentTab === "preview",
        }
      )}
    >
      <GridPattern
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-40"
        )}
      />
      {/* Preview page indicator */}
      {!isAiWorking && hoveredElement && isEditableModeEnabled && (
        <div
          className="cursor-pointer absolute bg-sky-500/10 border-[2px] border-dashed border-sky-500 rounded-r-lg rounded-b-lg p-3 z-10 pointer-events-none"
          style={{
            top: hoveredElement.rect.top,
            left: hoveredElement.rect.left,
            width: hoveredElement.rect.width,
            height: hoveredElement.rect.height,
          }}
        >
          <span className="bg-sky-500 rounded-t-md text-sm text-neutral-100 px-2 py-0.5 -translate-y-7 absolute top-0 left-0">
            {htmlTagToText(hoveredElement.tagName.toLowerCase())}
          </span>
        </div>
      )}
      {isLoadingProject ? (
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="py-10 w-full relative z-1 max-w-3xl mx-auto text-center">
            <AiLoading text="Fetching your project..." className="flex-col" />
            <AnimatedBlobs />
            <AnimatedBlobs />
          </div>
        </div>
      ) : (
        <>
          <iframe
            id="preview-iframe"
            ref={iframeRef}
            className={classNames(
              "w-full select-none transition-all duration-200 bg-black h-full",
              {
                "lg:max-w-md lg:mx-auto lg:!rounded-[42px] lg:border-[8px] lg:border-neutral-700 lg:shadow-2xl lg:h-[80dvh] lg:max-h-[996px]":
                  device === "mobile",
              }
            )}
            src={
              currentCommit
                ? `https://${project?.space_id?.replaceAll(
                    "/",
                    "-"
                  )}--rev-${currentCommit.slice(0, 7)}.static.hf.space`
                : undefined
            }
            srcDoc={
              !currentCommit
                ? isNew
                  ? throttledHtml || defaultHTML
                  : stableHtml
                : undefined
            }
            onLoad={
              !currentCommit
                ? () => {
                    if (iframeRef?.current?.contentWindow?.document?.body) {
                      iframeRef.current.contentWindow.document.body.scrollIntoView(
                        {
                          block: isAiWorking ? "end" : "start",
                          inline: "nearest",
                          behavior: isAiWorking ? "instant" : "smooth",
                        }
                      );
                    }
                    // Set up event listeners after iframe loads
                    setupIframeListeners();
                  }
                : undefined
            }
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-modals allow-forms"
            allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; clipboard-read; clipboard-write; display-capture; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; serial; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"
          />
          {!isNew && (
            <>
              <div
                className={classNames(
                  "w-full h-full flex items-center justify-center absolute left-0 top-0 bg-black/40 backdrop-blur-lg transition-all duration-200",
                  {
                    "opacity-0 pointer-events-none": !globalAiLoading,
                  }
                )}
              >
                <div className="py-10 w-full relative z-1 max-w-3xl mx-auto text-center">
                  <AiLoading
                    text={
                      isLoadingProject ? "Fetching your project..." : undefined
                    }
                    className="flex-col"
                  />
                  <AnimatedBlobs />
                  <AnimatedBlobs />
                </div>
              </div>
              <HistoryNotification
                isVisible={!!currentCommit}
                isPromotingVersion={isPromotingVersion}
                onPromoteVersion={promoteVersion}
                onGoBackToCurrent={() => setCurrentCommit(null)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
