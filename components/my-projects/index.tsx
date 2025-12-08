"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { useUser } from "@/hooks/useUser";
import { ProjectType } from "@/types";
import { ProjectCard } from "./project-card";
import { MAX_FREE_PROJECTS } from "@/lib/utils";
import { ProTag } from "@/components/pro-modal";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/components/contexts/pro-context";
import { api } from "@/lib/api";
import { NotLogged } from "../not-logged/not-logged";

export function MyProjects() {
  const { user, projects, setProjects } = useUser();
  const { openProModal } = useProModal();

  if (!user) {
    return <NotLogged />;
  }

  const onDelete = async (project: ProjectType) => {
    const response = await api.delete(`/me/projects/${project.name}`);
    if (response.data.ok) {
      toast.success("Project deleted successfully!");
      const newProjects = projects.filter((p) => p.id !== project.id);
      setProjects(newProjects);
    } else {
      toast.error(response.data.error);
    }
  };
  return (
    <>
      <section className="max-w-[86rem] py-12 px-4 mx-auto overflow-x-hidden">
        <header className="flex items-center justify-between max-lg:flex-col gap-4">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-white">
              <span className="capitalize">{user?.fullname}</span>&apos;s
              TOMO Projects
              {user?.isPro ? (
                ""
              ) : (
                <span className="text-neutral-400 text-2xl ml-2">
                  ({projects.length}/{MAX_FREE_PROJECTS})
                </span>
              )}
            </h1>
            <p className="text-muted-foreground text-lg mt-1 max-w-xl">
              {user?.isPro ? (
                "Create, manage, and explore your TOMO projects."
              ) : (
                <span>
                  Upgrade to{" "}
                  <ProTag className="mx-1" onClick={() => openProModal([])} />{" "}
                  to create unlimited projects with TOMO.
                </span>
              )}
            </p>
          </div>
          {projects?.length >= MAX_FREE_PROJECTS && !user?.isPro ? (
            <Button
              size="default"
              variant="default"
              onClick={() => openProModal([])}
            >
              Upgrade to PRO
            </Button>
          ) : (
            // <LoadProject onSuccess={() => {}} />
            <div></div>
          )}
        </header>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.length < MAX_FREE_PROJECTS || user?.isPro ? (
            <Link
              href="/new"
              className="bg-neutral-900 rounded-xl h-64 lg:h-44 flex items-center justify-center text-neutral-300 border border-neutral-800 hover:brightness-110 transition-all duration-200"
            >
              <Plus className="size-5 mr-1.5" />
              Create Project
            </Link>
          ) : (
            <div
              className="bg-neutral-900 rounded-xl h-64 lg:h-44 flex items-center justify-center text-neutral-300 border border-neutral-800 hover:brightness-110 transition-all duration-200 cursor-pointer"
              onClick={() => openProModal([])}
            >
              <Plus className="size-5 mr-1.5" />
              Create Project
            </div>
          )}
          {projects.map((project: ProjectType, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              onDelete={() => onDelete(project)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
