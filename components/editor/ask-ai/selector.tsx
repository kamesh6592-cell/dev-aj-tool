import classNames from "classnames";
import { Crosshair } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAi } from "@/hooks/useAi";
import { useEditor } from "@/hooks/useEditor";

export const Selector = () => {
  const { globalEditorLoading } = useEditor();
  const { isEditableModeEnabled, setIsEditableModeEnabled, globalAiLoading } =
    useAi();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="xs"
          variant={isEditableModeEnabled ? "default" : "outline"}
          onClick={() => {
            setIsEditableModeEnabled?.(!isEditableModeEnabled);
          }}
          disabled={globalAiLoading || globalEditorLoading}
          className="!rounded-md"
        >
          <Crosshair className="size-3.5" />
          Edit
        </Button>
      </TooltipTrigger>
      <TooltipContent
        align="start"
        className="bg-neutral-950 text-xs text-neutral-200 py-1 px-2 rounded-md -translate-y-0.5"
      >
        Select an element on the page to ask TOMO edit it directly.
      </TooltipContent>
    </Tooltip>
  );
};
