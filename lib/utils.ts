import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "gray",
];

export const MAX_FREE_PROJECTS = 3;