"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMount, useUnmount } from "react-use";
import classNames from "classnames";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.png";
import { useUser } from "@/hooks/useUser";
import { UserMenu } from "@/components/user-menu";
import { ProTag } from "@/components/pro-modal";
import { DiscordIcon } from "@/components/icons/discord";

const navigationLinks = [
  {
    name: "Create Website",
    href: "/new",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Community",
    href: "#community",
  },
  {
    name: "Deploy",
    href: "#deploy",
  },
];

export default function Navigation() {
  const { openLoginWindow, user, loading } = useUser();
  const [hash, setHash] = useState("");

  const selectorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLLIElement[]>(
    new Array(navigationLinks.length).fill(null)
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useMount(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    const initialHash = window.location.hash;
    if (initialHash) {
      setHash(initialHash);
      calculateSelectorPosition(initialHash);
    }

    window.addEventListener("scroll", handleScroll);
  });

  useUnmount(() => {
    window.removeEventListener("scroll", () => {});
  });

  const handleClick = (href: string) => {
    setHash(href);
    calculateSelectorPosition(href);
  };

  const calculateSelectorPosition = (href: string) => {
    if (selectorRef.current && linksRef.current) {
      const index = navigationLinks.findIndex((l) => l.href === href);
      const targetLink = linksRef.current[index];
      if (targetLink) {
        const targetRect = targetLink.getBoundingClientRect();
        selectorRef.current.style.left = targetRect.left + "px";
        selectorRef.current.style.width = targetRect.width + "px";
      }
    }
  };

  return (
    <div
      className={classNames(
        "sticky top-0 z-10 transition-all duration-200 backdrop-blur-md",
        {
          "bg-black/30": isScrolled,
        }
      )}
    >
      <nav className="grid grid-cols-2 p-4 container mx-auto h-[80px]">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={Logo}
            className="w-9 mr-1"
            alt="TOMO Logo"
            width={64}
            height={64}
          />
          <p className="font-sans text-white text-xl font-bold max-lg:hidden">
            TOMO
          </p>
          {user?.isPro && <ProTag className="ml-1" />}
        </Link>
        <ul className="items-center justify-center gap-6 !hidden">
          {navigationLinks.map((link) => (
            <li
              key={link.name}
              ref={(el) => {
                const index = navigationLinks.findIndex(
                  (l) => l.href === link.href
                );
                if (el && linksRef.current[index] !== el) {
                  linksRef.current[index] = el;
                }
              }}
              className="inline-block font-sans text-sm"
            >
              <Link
                href={link.href}
                className={classNames(
                  "text-neutral-500 hover:text-primary transition-colors text-base",
                  {
                    "text-primary": hash === link.href,
                  }
                )}
                onClick={() => {
                  handleClick(link.href);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div
            ref={selectorRef}
            className={classNames(
              "h-1 absolute bottom-4 transition-all duration-200 flex items-center justify-center",
              {
                "opacity-0": !hash,
              }
            )}
          >
            <div className="size-1 bg-white rounded-full" />
          </div>
        </ul>
        <div className="flex items-center justify-end gap-3">
          <Link href="https://discord.gg/KpanwM3vXa" target="_blank">
            <Button
              variant="bordered"
              className="!border-indigo-500 !text-white !bg-indigo-500 transition-all duration-300"
            >
              <DiscordIcon className="size-4 mr-0.5" />
              <span className="max-lg:hidden">Discord Community</span>
              <span className="lg:hidden">Discord</span>
            </Button>
          </Link>
          {loading ? (
            <Button
              variant="ghostDarker"
              className="!pl-3 !pr-4 !py-2 !h-auto !rounded-lg animate-pulse"
              onClick={openLoginWindow}
            >
              <div className="size-8 mr-1 bg-neutral-800 rounded-full" />
              <div className="w-24 h-3 bg-neutral-800 rounded-full" />
            </Button>
          ) : user ? (
            <UserMenu className="!pl-3 !pr-4 !py-2 !h-auto !rounded-lg" />
          ) : (
            <>
              <Button className="!px-6 !py-3 !h-auto" onClick={openLoginWindow}>
                Start Vibe Coding
                <ArrowRight className="size-4" />
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
