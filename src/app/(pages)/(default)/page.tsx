import { ContactFrame } from "@/components/Frames/ContactFrame";
import HomeInitialFrame from "@/components/Frames/homeInitialFrame";
import { MyExperience } from "@/components/Frames/myExperience";
import { ProjectsFrame } from "@/components/Frames/ProjectsFrame";
import { Services } from "@/components/Frames/services";
import { InfiniteCarousel } from "@/components/techs-carousel";
import { SocialMediasButtons } from "@/components/ui/social-media-buttons";
import { links } from "@/utils/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`size-full`}>
      <HomeInitialFrame />
      <InfiniteCarousel />
      <Services />
      <ProjectsFrame />
      <MyExperience />
      <ContactFrame />
      <footer
        className={`flex h-20 w-full items-center justify-evenly gap-5 border-t border-border bg-background`}
      >
        <span>
          © 2024{" "}
          <Link
            href={links.linkedin}
            target="_blank"
            className={`underline transition-all hover:text-foreground/70`}
          >
            Patryck Cauê Silva
          </Link>
        </span>{" "}
        <SocialMediasButtons />
      </footer>
    </main>
  );
}
