"use client";
import classNames from "classnames";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PROVIDERS, MODELS } from "@/lib/providers";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState, useEffect } from "react";
import { useUpdateEffect } from "react-use";
import Image from "next/image";
import { Brain, CheckCheck, ChevronDown } from "lucide-react";
import { useAi } from "@/hooks/useAi";

export function Settings({
  open,
  onClose,
  error,
  isFollowUp = false,
}: {
  open: boolean;
  error?: string;
  isFollowUp?: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    model,
    provider,
    setProvider,
    setModel,
    selectedModel,
    globalAiLoading,
  } = useAi();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modelAvailableProviders = useMemo(() => {
    const availableProviders = MODELS.find(
      (m: { value: string }) => m.value === model
    )?.providers;
    if (!availableProviders) return Object.keys(PROVIDERS);
    return Object.keys(PROVIDERS).filter((id) =>
      availableProviders.includes(id)
    );
  }, [model]);

  useUpdateEffect(() => {
    if (
      provider !== "auto" &&
      !modelAvailableProviders.includes(provider as string)
    ) {
      setProvider("auto");
    }
  }, [model, provider]);

  const formattedModels = useMemo(() => {
    const lists: ((typeof MODELS)[0] | { isCategory: true; name: string })[] =
      [];
    const keys = new Set<string>();
    MODELS.forEach((model) => {
      if (!keys.has(model.companyName)) {
        lists.push({
          isCategory: true,
          name: model.companyName,
          logo: model.logo,
        });
        keys.add(model.companyName);
      }
      lists.push(model);
    });
    return lists;
  }, [MODELS]);

  return (
    <Popover open={open} onOpenChange={onClose}>
      <PopoverTrigger asChild>
        <Button
          variant={open ? "default" : "outline"}
          className="!rounded-md"
          disabled={globalAiLoading}
          size="xs"
        >
          {/* <Brain className="size-3.5" /> */}
          {selectedModel?.logo && (
            <Image
              src={selectedModel?.logo}
              alt={selectedModel.label}
              className={`size-3.5 ${open ? "" : "filter invert"}`}
              width={20}
              height={20}
            />
          )}
          <span className="truncate max-w-[120px]">
            {isMounted
              ? selectedModel?.label?.split(" ").join("-").toLowerCase()
              : "..."}
          </span>
          <ChevronDown className="size-3.5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="!rounded-2xl p-0 !w-96 overflow-hidden !bg-neutral-900"
        align="center"
      >
        <header className="flex items-center justify-center text-sm px-4 py-3 border-b gap-2 bg-neutral-950 border-neutral-800 font-semibold text-neutral-200">
          Customize Settings
        </header>
        <main className="px-4 pt-5 pb-6 space-y-5">
          {error !== "" && (
            <p className="text-red-500 text-sm font-medium mb-2 flex items-center justify-between bg-red-500/10 p-2 rounded-md">
              {error}
            </p>
          )}
          <label className="block">
            <p className="text-neutral-300 text-sm mb-2.5">Choose a model</p>
            <Select defaultValue={model} onValueChange={setModel}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {formattedModels.map((item: any) => {
                    if ("isCategory" in item) {
                      return (
                        <SelectLabel
                          key={item.name}
                          className="flex items-center gap-1"
                        >
                          {item.name}
                        </SelectLabel>
                      );
                    }
                    const {
                      value,
                      label,
                      isNew = false,
                      isThinker = false,
                    } = item;
                    return (
                      <SelectItem
                        key={value}
                        value={value}
                        className=""
                        disabled={isThinker && isFollowUp}
                      >
                        {label}
                        {isNew && (
                          <span className="text-xs bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-full px-1.5 py-0.5">
                            New
                          </span>
                        )}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          {isFollowUp && (
            <div className="bg-amber-500/10 border-amber-500/10 p-3 text-xs text-amber-500 border rounded-lg">
              Note: You can&apos;t use a Thinker model for follow-up requests.
              We automatically switch to the default model for you.
            </div>
          )}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-300 text-sm mb-1.5">
                  Use auto-provider
                </p>
                <p className="text-xs text-neutral-400/70">
                  We&apos;ll automatically select the best provider for you
                  based on your prompt.
                </p>
              </div>
              <div
                className={classNames(
                  "bg-neutral-700 rounded-full min-w-10 w-10 h-6 flex items-center justify-between p-1 cursor-pointer transition-all duration-200",
                  {
                    "!bg-sky-500": provider === "auto",
                  }
                )}
                onClick={() => {
                  const foundModel = MODELS.find(
                    (m: { value: string }) => m.value === model
                  );
                  if (provider === "auto" && foundModel?.autoProvider) {
                    setProvider(foundModel.autoProvider);
                  } else {
                    setProvider("auto");
                  }
                }}
              >
                <div
                  className={classNames(
                    "w-4 h-4 rounded-full shadow-md transition-all duration-200 bg-neutral-200",
                    {
                      "translate-x-4": provider === "auto",
                    }
                  )}
                />
              </div>
            </div>
            <label className="block">
              <p className="text-neutral-300 text-sm mb-2">
                Inference Provider
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {modelAvailableProviders.map((id: string) => (
                  <Button
                    key={id}
                    variant={id === provider ? "default" : "secondary"}
                    size="sm"
                    onClick={() => {
                      setProvider(id);
                    }}
                  >
                    <Image
                      src={`/providers/${id}.svg`}
                      alt={PROVIDERS[id as keyof typeof PROVIDERS].name}
                      className="size-5 mr-2"
                      width={20}
                      height={20}
                    />
                    {PROVIDERS[id as keyof typeof PROVIDERS].name}
                    {id === provider && (
                      <CheckCheck className="ml-2 size-4 text-blue-500" />
                    )}
                  </Button>
                ))}
              </div>
            </label>
          </div>
        </main>
      </PopoverContent>
    </Popover>
  );
}
