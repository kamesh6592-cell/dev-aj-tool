"use client";

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import classNames from "classnames";

import { Button } from "@/components/ui/button";
import { Maximize, Minimize } from "lucide-react";

interface LivePreviewProps {
  currentPageData: { path: string; html: string } | undefined;
  isAiWorking: boolean;
  defaultHTML: string;
  className?: string;
}

export interface LivePreviewRef {
  reset: () => void;
}

export const LivePreview = forwardRef<LivePreviewRef, LivePreviewProps>(
  ({ currentPageData, isAiWorking, defaultHTML, className }, ref) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [displayedHtml, setDisplayedHtml] = useState<string>("");
    const latestHtmlRef = useRef<string>("");
    const displayedHtmlRef = useRef<string>("");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const reset = () => {
      setIsMaximized(false);
      setDisplayedHtml("");
      latestHtmlRef.current = "";
      displayedHtmlRef.current = "";
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    useImperativeHandle(ref, () => ({
      reset,
    }));

    useEffect(() => {
      displayedHtmlRef.current = displayedHtml;
    }, [displayedHtml]);

    useEffect(() => {
      if (currentPageData?.html && currentPageData.html !== defaultHTML) {
        latestHtmlRef.current = currentPageData.html;
      }
    }, [currentPageData?.html, defaultHTML]);

    useEffect(() => {
      if (!currentPageData?.html || currentPageData.html === defaultHTML) {
        return;
      }

      if (!displayedHtml || !isAiWorking) {
        setDisplayedHtml(currentPageData.html);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      if (isAiWorking && !intervalRef.current) {
        intervalRef.current = setInterval(() => {
          if (
            latestHtmlRef.current &&
            latestHtmlRef.current !== displayedHtmlRef.current
          ) {
            setDisplayedHtml(latestHtmlRef.current);
          }
        }, 3000);
      }
    }, [currentPageData?.html, defaultHTML, isAiWorking, displayedHtml]);

    useEffect(() => {
      if (!isAiWorking && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        if (latestHtmlRef.current) {
          setDisplayedHtml(latestHtmlRef.current);
        }
      }
    }, [isAiWorking]);

    useEffect(() => {
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, []);

    if (!displayedHtml) {
      return null;
    }

    return (
      <div
        className={classNames(
          "absolute z-40 bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-lg transition-all duration-500 ease-out transform scale-100 opacity-100 animate-in slide-in-from-bottom-4 zoom-in-95 rounded-xl",
          {
            "shadow-green-500/20 shadow-2xl border-green-200": isAiWorking,
          },
          className
        )}
      >
        <div
          className={classNames(
            "flex flex-col animate-in fade-in duration-300",
            isMaximized ? "w-[90dvw] lg:w-[60dvw] h-[80dvh]" : "w-80 h-96"
          )}
        >
          <div className="flex items-center justify-between p-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50"></div>
              <span className="text-xs font-medium text-neutral-800">
                Live Preview
              </span>
              {isAiWorking && (
                <span className="text-xs text-green-600 font-medium animate-pulse">
                  • Updating
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="iconXs"
                className="!rounded-md !border-neutral-200 hover:bg-neutral-50"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                {isMaximized ? (
                  <Minimize className="text-neutral-400 size-3" />
                ) : (
                  <Maximize className="text-neutral-400 size-3" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex-1 bg-black overflow-hidden relative rounded-b-xl">
            <iframe
              className="w-full h-full border-0"
              srcDoc={displayedHtml}
              sandbox="allow-scripts allow-same-origin"
              title="Live Preview"
            />
          </div>
        </div>
      </div>
    );
  }
);

LivePreview.displayName = "LivePreview";
