import { AppEditor } from "@/components/editor";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ namespace: string; repoId: string }>;
}): Promise<Metadata> {
  const { namespace, repoId } = await params;

  return generateSEO({
    title: `${namespace}/${repoId} - DeepSite Editor`,
    description: `Edit and build ${namespace}/${repoId} with AI-powered tools on DeepSite. Create stunning websites with no code required.`,
    path: `/${namespace}/${repoId}`,
    // Prevent indexing of individual project editor pages if they contain sensitive content
    noIndex: false, // Set to true if you want to keep project pages private
  });
}

export default async function ProjectNamespacePage({
  params,
}: {
  params: Promise<{ namespace: string; repoId: string }>;
}) {
  const { namespace, repoId } = await params;
  return <AppEditor namespace={namespace} repoId={repoId} />;
}
