import { ContactFrame } from "@/components/Frames/ContactFrame";
import HomeInitialFrame from "@/components/Frames/homeInitialFrame";
import { MyExperience } from "@/components/Frames/myExperience";
import { ProjectsFrame } from "@/components/Frames/ProjectsFrame";
import { Services } from "@/components/Frames/services";
import { InfiniteCarousel } from "@/components/techs-carousel";

export default function Home() {
  return (
    <main className={`size-full`}>
      <HomeInitialFrame />
      <InfiniteCarousel />
      <Services />
      <ProjectsFrame />
      <MyExperience />
      <ContactFrame />
    </main>
  );
}
