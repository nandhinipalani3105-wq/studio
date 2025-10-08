import Image from "next/image";
import { Section } from "./section";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-photo');

  return (
    <Section id="about" className="bg-secondary">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I’m <strong>Nandhini P.</strong>, currently pursuing <strong>B.E. Computer Science and Engineering</strong> at <strong>Government College of Engineering, Salem</strong>. I’m passionate about developing clean, simple, and useful web applications using Firebase Studio, HTML, CSS, and JavaScript.
          </p>
        </div>
        <div className="flex justify-center">
            <Card className="rounded-xl shadow-lg overflow-hidden w-64 h-64 md:w-full md:h-auto max-w-sm">
                <CardContent className="p-0 relative aspect-square">
                    {profileImage && (
                        <Image
                            src={profileImage.imageUrl}
                            alt={profileImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={profileImage.imageHint}
                        />
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-2xl font-light italic text-muted-foreground">“Code. Create. Connect.”</p>
      </div>
    </Section>
  );
}
