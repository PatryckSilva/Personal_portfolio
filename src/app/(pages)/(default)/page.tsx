import { MyStacks } from "@/components/ui/profile-stacks-circle";
import { SocialMediasButtons } from "@/components/ui/social-media-buttons";
import { TextHighlighter } from "@/components/ui/text-highlighter";
import { TypeWritingEffect } from "@/components/ui/type-writing-effect";
import { cn } from "@/lib/utils";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];

  return (
    <section className="flex size-full flex-col justify-center gap-40">
      <section className={`flex items-center justify-evenly`}>
        <aside className={`md:hidden`}>
          <SocialMediasButtons />
        </aside>

        <aside>
          <MyStacks />
        </aside>

        <article className={`flex flex-col items-center gap-10`}>
          <h1 className="flex w-[354px] max-w-4xl flex-col items-center text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-3xl lg:w-max lg:text-4xl lg:leading-snug xl:text-5xl">
            Sou Patryck Silva!
            <TextHighlighter
              className={cn(
                "mt-2 rounded-sm text-xl text-black dark:text-white sm:text-2xl xl:text-3xl",
              )}
            >
              Desenvolvedor <TypeWritingEffect texts={texts} />
            </TextHighlighter>
          </h1>

          <aside className={`hidden md:flex`}>
            <SocialMediasButtons />
          </aside>
        </article>
      </section>

      <span className={`flex flex-col items-center gap-3 uppercase`}>
        scroll <DoubleArrowDownIcon className="animate-bounce" />
      </span>
    </section>
  );
}
