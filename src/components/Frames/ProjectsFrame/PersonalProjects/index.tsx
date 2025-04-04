"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { TProject } from "../data";
import { links } from "@/utils/constants";

const PersonalProjectsCard = ({
  projectName,
  projectDescription,
  srcImage,
  code,
  link,
  techs,
  isCollab = false,
}: TProject) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Card
      className={`group flex w-full flex-col-reverse items-center border lg:flex-row lg:even:flex-row-reverse`}
    >
      <CardHeader className={`flex max-w-[400px] gap-2 lg:max-w-[700px]`}>
        <CardTitle>
          <Link href={link} target="_blank" className={`hover:underline`}>
            {projectName}
          </Link>
        </CardTitle>

        <CardDescription className={`leading-relaxed`}>
          {projectDescription}
        </CardDescription>

        <div className={`flex w-full flex-wrap items-center gap-2`}>
          {techs.map((item, index) => (
            <Badge key={index} variant="default">
              {item}
            </Badge>
          ))}
        </div>
        {isCollab && (
          <span className={`py-4 text-sm text-muted-foreground`}>
            Associado à{" "}
            <Link
              href={links.apexWeb}
              className={`all underline transition hover:text-white`}
            >
              Apex NFT Brasil.
            </Link>
          </span>
        )}
      </CardHeader>

      <figure
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className={`relative aspect-square h-full min-h-[350px] w-full xs:min-h-[400px] md:min-h-[500px] lg:min-h-[440px]`}
      >
        {isHovered && (
          <div className={`relative size-full`}>
            <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 gap-3">
              <Link href={link} target="_blank">
                <Button variant={"outline"} className={`rounded-sm`}>
                  <FaArrowUpRightFromSquare className={`text-foreground`} />
                </Button>
              </Link>
              {!isCollab && (
                <Link href={code} target="_blank">
                  <Button variant={"outline"} className={`rounded-sm`}>
                    <FaGithub className={`text-foreground`} />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}

        <Image
          src={`${srcImage}`}
          fill
          alt={`${projectName} - Captura de Tela`}
          className={`rounded-t-sm border-b border-border lg:rounded-l-none lg:rounded-r-sm lg:border-b-0 lg:border-l lg:group-even:rounded-l-sm lg:group-even:rounded-r-none lg:group-even:border-r`}
        />

        {isHovered && (
          <div
            className={`absolute inset-0 z-10 size-full rounded-t-sm bg-black/60 lg:rounded-l-none lg:rounded-r-sm lg:group-even:rounded-l-sm lg:group-even:rounded-r-none`}
          ></div>
        )}
      </figure>
    </Card>
  );
};

export default PersonalProjectsCard;
