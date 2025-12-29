"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

export function Gimmick() {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLImageElement | null>(null);
  const visible = useIsVisible(ref);
  const [showShaders, setShowShaders] = useState(false);

  useEffect(() => {
    // apply some delay, otherwise on slower devices, it errors with uniform images not being fully loaded.
    setTimeout(() => {
      setShowShaders(true);
    }, 400);
  }, []);

  return (
    <>
      {showShaders && (
        <GrainGradient
          className="absolute inset-0 animate-fd-fade-in duration-800"
          colors={
            resolvedTheme === "dark"
              ? ["#ff8800", "#ff6b6b", "#ff99aa"]
              : ["#f25208", "#e63946", "#ff88aa"]
          }
          colorBack={resolvedTheme === "dark" ? "#121212" : "#fff"}
          softness={0.5}
          intensity={0.5}
          noise={0.5}
          shape="sphere"
          speed={2}
          scale={0.4}
          rotation={1}
          offsetX={0}
          offsetY={0}
        />
      )}
    </>
  );
}

// TODO: シングルトンパターンを使ってレイアウトシフト対策をしているらしい、useRefとの違いを探究すること
let observer: IntersectionObserver;
const observerTargets = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

// TODO: 動いてなさそう
function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        observerTargets.get(entry.target)?.(entry);
      }
    });

    const element = ref.current;
    if (!element) return;
    observerTargets.set(element, (entry) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerTargets.delete(element);
    };
  }, [ref]);

  return visible;
}
