import { Section } from "./section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, Palette, Braces, DatabaseZap, Github, Atom } from "lucide-react";

const skills = [
  { name: "HTML", icon: <CodeXml className="w-10 h-10 text-primary" /> },
  { name: "CSS", icon: <Palette className="w-10 h-10 text-primary" /> },
  { name: "JavaScript", icon: <Braces className="w-10 h-10 text-primary" /> },
  { name: "Firebase", icon: <DatabaseZap className="w-10 h-10 text-primary" /> },
  { name: "GitHub", icon: <Github className="w-10 h-10 text-primary" /> },
  { name: "React", icon: <Atom className="w-10 h-10 text-primary" /> },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Skills</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">My technical toolkit for building modern web experiences.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <CardHeader className="items-center justify-center p-4">
              {skill.icon}
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
