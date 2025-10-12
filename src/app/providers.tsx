"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import PostHogPageView from "../components/PostHogPageView";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <PostHogPageView />
    </>
  );
}
