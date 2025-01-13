import { links } from "@/utils/constants";
import Link from "next/link";
import { SocialMediasButtons } from "../ui/social-media-buttons";
import { ModeToggle } from "../Theme/ModeToggle";

export const Footer = () => {
  return (
    <footer
      className={`flex h-20 w-full items-center justify-evenly gap-5 border-t border-border bg-background`}
    >
      <aside>
        <span>
          © 2024{" "}
          <Link
            href={links.linkedin}
            target="_blank"
            className={`underline transition-all hover:text-foreground/70`}
          >
            Patryck Cauê Silva
          </Link>
        </span>
      </aside>

      <aside className={`flex items-center gap-2`}>
        <SocialMediasButtons /> <ModeToggle />
      </aside>
    </footer>
  );
};
