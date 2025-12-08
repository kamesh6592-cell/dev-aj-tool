"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DiscordIcon } from "@/components/icons/discord";
import Logo from "@/public/logo.png";

const DISCORD_PROMO_KEY = "discord-promo-dismissed";
const DISCORD_URL = "https://discord.gg/KpanwM3vXa";

const Sparkle = ({
  size = "w-3 h-3",
  delay = "0s",
  top = "20%",
  left = "20%",
}: {
  size?: string;
  delay?: string;
  top?: string;
  left?: string;
}) => (
  <div
    className={`absolute ${size}`}
    style={{ top, left, animationDelay: delay }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full animate-sparkle"
    >
      <path
        d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
        fill="url(#sparkle-gradient)"
      />
      <defs>
        <linearGradient id="sparkle-gradient" x1="2" y1="10" x2="22" y2="10">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const DiscordPromoModal = () => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useLocalStorage<boolean>(
    DISCORD_PROMO_KEY,
    false
  );

  useEffect(() => {
    const cookieDismissed = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${DISCORD_PROMO_KEY}=`))
      ?.split("=")[1];

    if (dismissed || cookieDismissed === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 5);
    document.cookie = `${DISCORD_PROMO_KEY}=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  };

  const handleJoinDiscord = () => {
    window.open(DISCORD_URL, "_blank");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-[480px] lg:!p-0 !rounded-3xl !bg-gradient-to-b !from-indigo-950/40 !via-neutral-900 !to-neutral-900 !border !border-neutral-800 overflow-hidden"
        showCloseButton={true}
      >
        <DialogTitle className="hidden" />

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent pointer-events-none" />

          <div className="absolute inset-x-0 top-0 h-48 overflow-hidden pointer-events-none">
            <Sparkle size="w-2 h-2" delay="0s" top="15%" left="15%" />
            <Sparkle size="w-3 h-3" delay="0.5s" top="25%" left="75%" />
            <Sparkle size="w-2 h-2" delay="1s" top="35%" left="20%" />
            <Sparkle size="w-4 h-4" delay="1.5s" top="10%" left="80%" />
            <Sparkle size="w-2 h-2" delay="2s" top="30%" left="85%" />
          </div>

          <div className="relative pt-12 pb-8">
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-full blur-md opacity-50" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <DiscordIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full p-0.5 shadow-xl border-2 border-neutral-900">
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                    <Image
                      src={Logo}
                      alt="DeepSite"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="px-8 pb-8 pt-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to level up your DeepSite experience?
              </h2>
              <p className="text-neutral-400 text-sm">
                Get help, share your projects and ask for suggestions!
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {[
                "Get exclusive preview to new features",
                "Share your projects and get feedback",
                "Priority support from the team",
                "Enjoy real-time updates",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-neutral-200"
                  style={{
                    animation: `fadeIn 0.4s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-6">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 w-full">
              <Button
                onClick={handleJoinDiscord}
                className="w-full !h-12 !text-base font-semibold !bg-gradient-to-r !from-indigo-500 !to-indigo-600 hover:!from-indigo-600 hover:!to-indigo-700 !text-white !border-0 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-indigo-500/25"
              >
                <DiscordIcon className="w-5 h-5 mr-2" />
                Join Discord Community
              </Button>

              <p className="text-center text-xs text-neutral-500">
                Free to join. Connect instantly.
              </p>
            </div>
          </main>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes sparkle {
            0%,
            100% {
              opacity: 0;
              transform: scale(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: scale(1) rotate(180deg);
            }
          }

          :global(.animate-sparkle) {
            animation: sparkle 2s ease-in-out infinite;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};
