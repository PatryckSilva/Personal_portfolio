"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { TProject } from "../data";

const PersonalProjectsCard = ({
  projectName,
  projectDescription,
  srcImage,
  code,
  link,
  techs,
}: TProject) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card className={`w-full border`}>
      <CardHeader className={`flex gap-2`}>
        <CardTitle>{projectName}</CardTitle>
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
      </CardHeader>

      <CardContent className={`md:ml-5 lg:ml-10`}>
        <figure
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className={`relative h-[171px] w-[350px] transition-all md:h-[245px] md:w-[500px] lg:h-[343px] lg:w-[700px]`}
        >
          {isHovered && (
            <div className={`relative size-full`}>
              <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 gap-3">
                <Link href={link} target="_blank">
                  <Button variant={"outline"} className={`rounded-sm`}>
                    <FaArrowUpRightFromSquare className={`text-foreground`} />
                  </Button>
                </Link>
                <Link href={code} target="_blank">
                  <Button variant={"outline"} className={`rounded-sm`}>
                    <FaGithub className={`text-foreground`} />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          <Image
            src={srcImage}
            fill
            alt={`${projectName} - Captura de Tela`}
            className={`rounded-md border border-border`}
          />
          {isHovered && (
            <div
              className={`absolute inset-0 z-10 size-full bg-black/60`}
            ></div>
          )}
        </figure>
      </CardContent>
    </Card>
  );
};

export default memo(PersonalProjectsCard);
