import classNames from "classnames";
import { ChevronRight, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { TailwindColors } from "./tailwind-colors";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Themes } from "./themes";
import { EnhancedSettings } from "@/types";

export const ContentModal = ({
  enhancedSettings,
  setEnhancedSettings,
}: {
  enhancedSettings: EnhancedSettings;
  setEnhancedSettings: (settings: EnhancedSettings) => void;
}) => {
  const [collapsed, setCollapsed] = useState(["colors", "theme"]);
  return (
    <main className="overflow-x-hidden max-h-[50dvh] overflow-y-auto transparent-scroll">
      <section className="w-full border-b border-neutral-800/80 px-6 py-3.5 sticky top-0 bg-neutral-900 z-10">
        <div className="flex items-center justify-between gap-3">
          <p className="text-base font-semibold text-neutral-200">
            Allow DeepSite to enhance your prompt
          </p>
          <Switch
            checked={enhancedSettings.isActive}
            onCheckedChange={() =>
              setEnhancedSettings({
                ...enhancedSettings,
                isActive: !enhancedSettings.isActive,
              })
            }
          />
        </div>
        <p className="text-sm text-neutral-500 mt-2">
          While using DeepSite enhanced prompt, you'll get better results. We'll
          add more details and features to your request.
        </p>
        <div className="text-sm text-sky-500 mt-3 bg-gradient-to-r from-sky-400/15 to-purple-400/15 rounded-md px-3 py-2 border border-white/10">
          <p className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">
            You can also use the custom properties below to set specific
            information.
          </p>
        </div>
      </section>
      <section className="py-3.5 border-b border-neutral-800/80">
        <div
          className={classNames(
            "flex items-center justify-start gap-3 px-4 cursor-pointer text-neutral-400 hover:text-neutral-200",
            {
              "!text-neutral-200": collapsed.includes("colors"),
            }
          )}
          onClick={() =>
            setCollapsed((prev) => {
              if (prev.includes("colors")) {
                return prev.filter((item) => item !== "colors");
              }
              return [...prev, "colors"];
            })
          }
        >
          <ChevronRight className="size-4" />
          <p className="text-base font-semibold">Colors</p>
        </div>
        {collapsed.includes("colors") && (
          <div className="mt-4 space-y-4">
            <article className="w-full">
              <div className="flex items-center justify-start gap-2 px-5">
                <p className="text-xs font-medium uppercase text-neutral-400">
                  Primary Color
                </p>
                <Button
                  variant="bordered"
                  size="xss"
                  className={`${
                    enhancedSettings.primaryColor ? "" : "opacity-0"
                  }`}
                  onClick={() =>
                    setEnhancedSettings({
                      ...enhancedSettings,
                      primaryColor: undefined,
                    })
                  }
                >
                  <RefreshCcw className="size-2.5" />
                  Reset
                </Button>
              </div>
              <div className="text-muted-foreground text-sm mt-4">
                <TailwindColors
                  value={enhancedSettings.primaryColor}
                  onChange={(value) =>
                    setEnhancedSettings({
                      ...enhancedSettings,
                      primaryColor: value,
                    })
                  }
                />
              </div>
            </article>
            <article className="w-full">
              <div className="flex items-center justify-start gap-2 px-5">
                <p className="text-xs font-medium uppercase text-neutral-400">
                  Secondary Color
                </p>
                <Button
                  variant="bordered"
                  size="xss"
                  className={`${
                    enhancedSettings.secondaryColor ? "" : "opacity-0"
                  }`}
                  onClick={() =>
                    setEnhancedSettings({
                      ...enhancedSettings,
                      secondaryColor: undefined,
                    })
                  }
                >
                  <RefreshCcw className="size-2.5" />
                  Reset
                </Button>
              </div>
              <div className="text-muted-foreground text-sm mt-4">
                <TailwindColors
                  value={enhancedSettings.secondaryColor}
                  onChange={(value) =>
                    setEnhancedSettings({
                      ...enhancedSettings,
                      secondaryColor: value,
                    })
                  }
                />
              </div>
            </article>
          </div>
        )}
      </section>
      <section className="py-3.5 border-b border-neutral-800/80">
        <div
          className={classNames(
            "flex items-center justify-start gap-3 px-4 cursor-pointer text-neutral-400 hover:text-neutral-200",
            {
              "!text-neutral-200": collapsed.includes("theme"),
            }
          )}
          onClick={() =>
            setCollapsed((prev) => {
              if (prev.includes("theme")) {
                return prev.filter((item) => item !== "theme");
              }
              return [...prev, "theme"];
            })
          }
        >
          <ChevronRight className="size-4" />
          <p className="text-base font-semibold">Theme</p>
        </div>
        {collapsed.includes("theme") && (
          <article className="w-full mt-4">
            <div className="flex items-center justify-start gap-2 px-5">
              <p className="text-xs font-medium uppercase text-neutral-400">
                Theme
              </p>
              <Button
                variant="bordered"
                size="xss"
                className={`${enhancedSettings.theme ? "" : "opacity-0"}`}
                onClick={() =>
                  setEnhancedSettings({
                    ...enhancedSettings,
                    theme: undefined,
                  })
                }
              >
                <RefreshCcw className="size-2.5" />
                Reset
              </Button>
            </div>
            <div className="text-muted-foreground text-sm mt-4">
              <Themes
                value={enhancedSettings.theme}
                onChange={(value) =>
                  setEnhancedSettings({
                    ...enhancedSettings,
                    theme: value,
                  })
                }
              />
            </div>
          </article>
        )}
      </section>
    </main>
  );
};
