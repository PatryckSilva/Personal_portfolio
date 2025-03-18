import {
  DarkGithubLogo,
  DarkGmailLogo,
  DarkLinkedinLogo,
} from "@/components/SVGS/logos";
import { cn } from "@/lib/utils";
import { links } from "@/utils/constants";
import Link from "next/link";

export const SocialMediasButtons = () => {
  const socialMedias = [
    {
      name: "LinkedIn",
      link: links.linkedin,
      icon: DarkLinkedinLogo,
    },
    {
      name: "GitHub",
      link: links.github,
      icon: DarkGithubLogo,
    },
    {
      name: "Gmail",
      link: "/#contact",
      icon: DarkGmailLogo,
    },
  ];

  return (
      <aside className={`flex items-end gap-3`}>
        {socialMedias.map((item, index) => (
          <Link
            key={item.name}
            href={item.link}
            target={index === 2 ? "_self" : "_blank"}
            className={cn(
              `h-max w-8 text-foreground/70 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-foreground`,
            )}
          >
            <item.icon />
          </Link>
        ))}
      </aside>
  );
};
