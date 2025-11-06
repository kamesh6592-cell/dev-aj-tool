import classNames from "classnames";
import { useRef } from "react";

import { TAILWIND_COLORS } from "@/lib/prompt-builder";
import { useMount } from "react-use";

export const TailwindColors = ({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (value: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useMount(() => {
    if (ref.current) {
      if (value) {
        const color = ref.current.querySelector(`[data-color="${value}"]`);
        if (color) {
          color.scrollIntoView({ inline: "center" });
        }
      }
    }
  });
  return (
    <div
      ref={ref}
      className="flex items-center justify-start gap-3 overflow-x-auto px-5 transparent-scroll"
    >
      {TAILWIND_COLORS.map((color) => (
        <div
          key={color}
          className={classNames(
            "flex flex-col items-center justify-center p-3 size-16 min-w-16 gap-2 rounded-lg border border-neutral-800 bg-neutral-800/30 hover:brightness-120 cursor-pointer",
            {
              "!border-neutral-700 !bg-neutral-800/80 hover:!brightness-100":
                value === color,
            }
          )}
          data-color={color}
          onClick={() => onChange(color)}
        >
          <div
            className={`w-4 h-4 min-w-4 min-h-4 rounded-xl ${
              ["white", "black"].includes(color)
                ? `bg-${color}`
                : `bg-${color}-500`
            }`}
          />
          <p className="text-xs capitalize text-neutral-200 truncate">
            {color}
          </p>
        </div>
      ))}
    </div>
  );
};
