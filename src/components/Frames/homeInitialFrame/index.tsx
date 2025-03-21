import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { MyStacks } from "@/components/ui/profile-stacks-circle";
import { SocialMediasButtons } from "@/components/ui/social-media-buttons";
import { TextHighlighter } from "@/components/ui/text-highlighter";
import { TypeWritingEffect } from "@/components/ui/type-writing-effect";
import { cn } from "@/lib/utils";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export default function HomeInitialFrame() {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];

  return (
    <BackgroundBeamsWithCollision>
      <section className="relative xs:-mt-20 flex size-full flex-col items-center justify-center">
        <section
          className={`flex w-full flex-col-reverse items-center justify-center gap-20 md:flex-row lg:justify-evenly lg:gap-0`}
        >
          <aside className={`md:hidden flex flex-col items-center gap-3.5`}>
            <SocialMediasButtons />
             <a
        href={"/pdfs/patryck_silva_cv_fullstack_pt.pdf"}
        download={"Patryck_Silva_CV"}
      >
        <Button variant={"outline"}>Baixar CV</Button>
      </a>
          </aside>

          <aside>
            <MyStacks />
          </aside>
          <article className={`flex flex-col items-center gap-10`}>
            <h1 className="flex w-[320px] flex-col items-center text-center text-3xl font-bold leading-relaxed text-foreground lg:w-max lg:text-4xl lg:leading-snug xl:text-5xl">
              Sou Patryck Silva!
              <TextHighlighter
                className={cn(
                  "mt-2 rounded-sm text-2xl text-foreground xl:text-3xl",
                )}
              >
                Desenvolvedor <TypeWritingEffect texts={texts} />
              </TextHighlighter>
            </h1>

            <aside className={`hidden md:flex flex-col items-center gap-3.5`}>
              <SocialMediasButtons /> <a
        href={"/pdfs/patryck_silva_cv_fullstack_pt.pdf"}
        download={"Patryck_Silva_CV"}
      >
        <Button variant={"outline"}>Baixar CV</Button>
      </a>
            </aside>
          </article>
        </section>

        <span
          className={`text_gradients absolute bottom-5 -right-3 scale-75 xs:scale-100 xs:left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-3 font-mono font-semibold uppercase text-foreground`}
        >
          scroll <DoubleArrowDownIcon className="animate-bounce" />
        </span>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
