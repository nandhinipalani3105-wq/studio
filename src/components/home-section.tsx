import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary -z-10"></div>
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Hi, I’m Nandhini P.
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            A passionate student and creative web developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#about">About Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
