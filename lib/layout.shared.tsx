import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { FumadocsIcon } from "@/app/(home)/layout.client";

export const linkItems: LinkItemType[] = [
  {
    text: "Blog",
    url: "/blog",
    active: "nested-url",
  },
  { text: "About", url: "/about", active: "url" },
  { text: "Projects", url: "projects", active: "url" },
];

export const logo = (
  <>
    {/* FIXME: このImageはなんで存在するの？ */}
    <Image
      alt="Fumadocs"
      src={Logo}
      sizes="100px"
      className="hidden w-22 in-[.uwu]:block"
      aria-label="Fumadocs"
    />

    {/* TODO: あとでおきかえ */}
    <FumadocsIcon className="size-5 in-[.uwu]:hidden" />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          <span>tsukaryu</span>
        </>
      ),
    },
  };
}
