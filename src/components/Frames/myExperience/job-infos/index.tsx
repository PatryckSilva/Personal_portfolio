import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ExperienceContent = ({
  bulletPoints,
}: {
  bulletPoints: string[];
}) => (
  <Card className="max-w-[1000px] border-none px-2 shadow-none">
    <CardTitle className="mb-2 text-lg font-semibold text-muted-foreground underline transition-all">
      Atividades:{" "}
    </CardTitle>
    <CardContent className="flex justify-center gap-20">
      <section>
        <ul className="list-disc space-y-5">
          {bulletPoints.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </CardContent>
  </Card>
);
