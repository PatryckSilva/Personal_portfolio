"use client";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { links } from "@/utils/constants";
import { MessageIcon } from "../SVGS/nav-icons";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { ModeToggle } from "../Theme/ModeToggle";
import { useCopyAction } from "@/hooks/use-copy-action";

export function ContextMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const { handleCopy, isCopied } = useCopyAction();

  const pages = [
    // {
    //   name: "Home",
    //   link: "/",
    //   icon: <HomeIcon fontSize={18} />,
    // },
    // {
    //   name: "Projetos",
    //   link: "/projects",
    //   icon: <ProjectsIcon fontSize={18} />,
    // },
    // {
    //   name: "About",
    //   link: "/about",
    //   icon: <PersonIcons fontSize={18} />,
    // },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageIcon fontSize={18} />,
    },
  ];

  const socialMedias = [
    {
      name: "LinkedIn",
      link: links.linkedin,
      icon: <LinkedInLogoIcon fontSize={20} />,
    },
    {
      name: "GitHub",
      link: links.github,
      icon: <GitHubLogoIcon fontSize={20} />,
    },
  ];

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={`${GeistMono.className} ${GeistSans.className}`}
      >
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64 !border-2 !border-border bg-background/50 backdrop-blur-md">
        {/* TODO: adicionar function de copiar link */}
        <ContextMenuItem
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          inset
        >
          Trocar Tema
          <ContextMenuShortcut className="text-foreground">
            <ModeToggle className="h-fit w-fit" />
          </ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem onClick={() => handleCopy(links.portfolioWeb)} inset>
          {isCopied ? "Copiado!" : "Copiar Link"}
          <ContextMenuShortcut className={`text-foreground`}>
            <Share1Icon fontSize={30} />
          </ContextMenuShortcut>
        </ContextMenuItem>

        <Link
          href={links.portfolioWeb}
          target="_blank"
          className={`cursor-pointer`}
        >
          <ContextMenuItem inset>
            Ver Repositório
            <ContextMenuShortcut className="text-foreground">
              <CodeIcon fontSize={40} />
            </ContextMenuShortcut>
          </ContextMenuItem>
        </Link>

        <ContextMenuLabel>Navegação</ContextMenuLabel>

        {pages.map(({ icon, link, name }) => (
          <Link key={name} href={link}>
            <ContextMenuItem inset>
              {name}
              <ContextMenuShortcut className={`text-foreground`}>
                {icon}
              </ContextMenuShortcut>
            </ContextMenuItem>
          </Link>
        ))}

        <ContextMenuLabel>Seguir</ContextMenuLabel>

        {socialMedias.map(({ icon, link, name }) => (
          <Link key={name} target="_blank" href={link}>
            <ContextMenuItem inset>
              {name}
              <ContextMenuShortcut className={`text-foreground`}>
                {icon}
              </ContextMenuShortcut>
            </ContextMenuItem>
          </Link>
        ))}

        <ContextMenuLabel>Inspect</ContextMenuLabel>

        <ContextMenuItem
          onClick={() =>
            toast({
              title: "Aperte F12 ou Ctrl+Shift+I",
              description: "para abrir o DevTools",
            })
          }
          inset
        >
          DevTools
          <ContextMenuShortcut className={`text-foreground`}>
            F12
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
