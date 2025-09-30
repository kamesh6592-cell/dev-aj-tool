import { useState } from "react";
import { useLocalStorage } from "react-use";
import { ArrowUp, Dice1, Dice6 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useLoginModal } from "@/components/contexts/login-context";
import { PromptBuilder } from "./prompt-builder";
import { EnhancedSettings } from "@/types";
import { Settings } from "./settings";
import classNames from "classnames";

const prompts = [
  "Create a landing page for a SaaS product, with a hero section, a features section, a pricing section, and a call to action section.",
  "Create a portfolio website for a designer, with a hero section, a projects section, a about section, and a contact section.",
  "Create a blog website for a writer, with a hero section, a blog section, a about section, and a contact section.",
  "Create a Tic Tac Toe game, with a game board, a history section, and a score section.",
  "Create a Weather App, with a search bar, a weather section, and a forecast section.",
  "Create a Calculator, with a calculator section, and a history section.",
  "Create a Todo List, with a todo list section, and a history section.",
  "Create a Calendar, with a calendar section, and a history section.",
  "Create a Music Player, with a music player section, and a history section.",
  "Create a Quiz App, with a quiz section, and a history section.",
  "Create a Pomodoro Timer, with a timer section, and a history section.",
  "Create a Notes App, with a notes section, and a history section.",
  "Create a Task Manager, with a task list section, and a history section.",
  "Create a Password Generator, with a password generator section, and a history section.",
  "Create a Currency Converter, with a currency converter section, and a history section.",
  "Create a Dictionary, with a dictionary section, and a history section.",
];

export const FakeAskAi = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [openProvider, setOpenProvider] = useState(false);
  const [enhancedSettings, setEnhancedSettings, removeEnhancedSettings] =
    useLocalStorage<EnhancedSettings>("deepsite-enhancedSettings", {
      isActive: true,
      primaryColor: undefined,
      secondaryColor: undefined,
      theme: undefined,
    });
  const [, setPromptStorage] = useLocalStorage("prompt", "");
  const [randomPromptLoading, setRandomPromptLoading] = useState(false);

  const callAi = async () => {
    setPromptStorage(prompt);
    router.push("/projects/new");
  };

  const randomPrompt = () => {
    setRandomPromptLoading(true);
    setTimeout(() => {
      setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
      setRandomPromptLoading(false);
    }, 400);
  };

  return (
    <div className="p-3 w-full max-w-xl mx-auto">
      <div className="relative bg-neutral-800 border border-neutral-700 rounded-2xl ring-[4px] focus-within:ring-neutral-500/30 focus-within:border-neutral-600 ring-transparent z-20 w-full group">
        <div className="w-full relative flex items-start justify-between pr-4 pt-4">
          <textarea
            className="w-full bg-transparent text-sm outline-none text-white placeholder:text-neutral-400 px-4 pb-4 resize-none"
            placeholder="Ask DeepSite anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                callAi();
              }
            }}
          />
          <Button
            size="iconXs"
            variant="outline"
            className="!rounded-md"
            onClick={() => randomPrompt()}
          >
            <Dice6
              className={classNames("size-4", {
                "animate-spin animation-duration-500": randomPromptLoading,
              })}
            />
          </Button>
        </div>
        <div className="flex items-center justify-between gap-2 px-4 pb-3 mt-2">
          <div className="flex-1 flex items-center justify-start gap-1.5 flex-wrap">
            <PromptBuilder
              enhancedSettings={enhancedSettings!}
              setEnhancedSettings={setEnhancedSettings}
            />
            <Settings
              open={openProvider}
              isFollowUp={false}
              error=""
              onClose={setOpenProvider}
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              size="iconXs"
              variant="outline"
              className="!rounded-md"
              onClick={() => callAi()}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
