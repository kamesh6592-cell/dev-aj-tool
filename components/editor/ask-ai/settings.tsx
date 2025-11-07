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
import {
  BrainIcon,
  CheckCheck,
  ChevronDown,
  Sparkles,
  Zap,
  DollarSign,
} from "lucide-react";
import { useAi } from "@/hooks/useAi";
import { getProviders } from "@/lib/get-providers";
import Loading from "@/components/loading";

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
  const [loadingProviders, setLoadingProviders] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const modelAvailableProviders = useMemo(() => {
  //   const availableProviders = MODELS.find(
  //     (m: { value: string }) => m.value === model
  //   )?.providers;
  //   if (!availableProviders) return Object.keys(PROVIDERS);
  //   return Object.keys(PROVIDERS).filter((id) =>
  //     availableProviders.includes(id)
  //   );
  // }, [model]);

  useUpdateEffect(() => {
    if (
      !["auto", "fastest", "cheapest"].includes(provider as string) &&
      !providers.includes(provider as string)
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

  const [providers, setProviders] = useState<any[]>([]);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadProviders = async () => {
      setLoadingProviders(true);
      if (!model) {
        setProviders([]);
        return;
      }
      try {
        const result = await getProviders(model);
        setProviders(result);
      } catch (error) {
        console.error("Failed to load providers:", error);
        setProviders([]);
      } finally {
        setLoadingProviders(false);
      }
    };

    loadProviders();
  }, [model]);

  const handleImageError = (providerId: string) => {
    setFailedImages((prev) => new Set([...prev, providerId]));
  };

  return (
    <Popover open={open} onOpenChange={onClose}>
      <PopoverTrigger asChild>
        <Button
          variant={open ? "default" : "outline"}
          className="!rounded-md"
          disabled={globalAiLoading || loadingProviders}
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
          {/* {isFollowUp && (
            <div className="bg-amber-500/10 border-amber-500/10 p-3 text-xs text-amber-500 border rounded-lg">
              Note: You can&apos;t use a Thinker model for follow-up requests.
              We automatically switch to the default model for you.
            </div>
          )} */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-neutral-300 text-sm mb-1">Provider Mode</p>
              <p className="text-neutral-400 text-xs mb-3 leading-relaxed">
                Choose how we select providers:{" "}
                <span className="px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-500">
                  Auto
                </span>{" "}
                (smart),{" "}
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-500">
                  Fastest
                </span>{" "}
                (speed), or{" "}
                <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-500">
                  Cheapest
                </span>{" "}
                (cost).
              </p>
              <div className="grid grid-cols-3 gap-1 bg-neutral-800 p-1 rounded-full">
                <button
                  className={classNames(
                    "flex flex-col items-center justify-center cursor-pointer py-1.5 rounded-full transition-all duration-200",
                    {
                      "bg-white text-neutral-800": provider === "auto",
                      "text-neutral-400 hover:text-neutral-200":
                        provider !== "auto",
                    }
                  )}
                  onClick={() => setProvider("auto")}
                >
                  <Sparkles
                    className={classNames("size-3.5 mb-0.5", {
                      "text-pink-400": provider !== "auto",
                    })}
                  />
                  <span className="text-[10px] font-medium">Auto</span>
                </button>
                <button
                  className={classNames(
                    "flex flex-col items-center justify-center cursor-pointer py-1.5 rounded-full transition-all duration-200",
                    {
                      "bg-white text-neutral-800": provider === "fastest",
                      "text-neutral-400 hover:text-neutral-200":
                        provider !== "fastest",
                    }
                  )}
                  onClick={() => setProvider("fastest")}
                >
                  <Zap
                    className={classNames("size-3.5 mb-0.5", {
                      "text-yellow-400": provider !== "fastest",
                    })}
                  />
                  <span className="text-[10px] font-medium">Fastest</span>
                </button>
                <button
                  className={classNames(
                    "flex flex-col items-center justify-center cursor-pointer py-1.5 rounded-full transition-all duration-200",
                    {
                      "bg-white text-neutral-800": provider === "cheapest",
                      "text-neutral-400 hover:text-neutral-200":
                        provider !== "cheapest",
                    }
                  )}
                  onClick={() => setProvider("cheapest")}
                >
                  <DollarSign
                    className={classNames("size-3.5 mb-0.5", {
                      "text-green-400": provider !== "cheapest",
                    })}
                  />
                  <span className="text-[10px] font-medium">Cheapest</span>
                </button>
              </div>
            </div>
            <label className="block">
              <p className="text-neutral-300 text-sm mb-2">
                Or choose a specific provider
              </p>
              <div className="grid grid-cols-2 gap-1.5 relative">
                {loadingProviders ? (
                  <Loading overlay={false} />
                ) : (
                  providers.map((id: string) => (
                    <Button
                      key={id}
                      variant={id === provider ? "default" : "secondary"}
                      size="sm"
                      onClick={() => {
                        setProvider(id);
                      }}
                    >
                      {failedImages.has(id) ? (
                        <BrainIcon className="size-4 mr-2" />
                      ) : (
                        <Image
                          src={`/deepsite/providers/${id}.svg`}
                          alt={id}
                          className="size-5 mr-2"
                          width={20}
                          height={20}
                          onError={() => handleImageError(id)}
                        />
                      )}
                      {PROVIDERS?.[id as keyof typeof PROVIDERS]?.name || id}
                      {id === provider && (
                        <CheckCheck className="ml-2 size-4 text-blue-500" />
                      )}
                    </Button>
                  ))
                )}
              </div>
            </label>
          </div>
        </main>
      </PopoverContent>
    </Popover>
  );
}
