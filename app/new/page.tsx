import { AppEditor } from "@/components/editor";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Create New Project - DeepSite",
  description:
    "Start building your next website with AI. Create a new project on DeepSite and experience the power of AI-driven web development.",
  path: "/new",
});

export default function NewProjectPage() {
  return <AppEditor isNew />;
}
