import { SpaceEntry } from "@huggingface/hub";

export interface User {
  fullname: string;
  avatarUrl: string;
  name: string;
  email?: string;
  isLocalUse?: boolean;
  isPro: boolean;
  id: string;
  token?: string;
}

export interface HtmlHistory {
  pages: Page[];
  createdAt: Date;
  prompt: string;
}

export interface Project {
  title: string;
  html: string;
  prompts: string[];
  user_id: string;
  space_id: string;
  pages: Page[];
  files: string[];
  cardData?: any;
  name?: string;
  _id?: string;
  _updatedAt?: Date;
  _createdAt?: Date;
}

// expand SpaceEntry type
export interface ProjectType extends SpaceEntry {
  cardData?: any;
  author?: string;
}

export interface Page {
  path: string;
  html: string;
}

export interface Commit {
  title: string;
  oid: string;
  date: Date;
}

export interface EnhancedSettings {
  isActive: boolean;
  primaryColor: string | undefined;
  secondaryColor: string | undefined;
  theme: Theme;
}

export type Theme = "light" | "dark" | undefined;
