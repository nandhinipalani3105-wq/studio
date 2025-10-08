import { Section } from "./section";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Contact Me</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">Have a question or want to work together? Drop me a message.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:nandhinipalani3105@gmail.com" className="hover:text-primary">nandhinipalani3105@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Salem, Tamil Nadu, India</span>
                </div>
            </div>
             <h3 className="text-xl font-semibold pt-4">Follow Me</h3>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/nandhini-p" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/nandhini-p" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></Link>
                </Button>
            </div>
        </div>
      </div>
    </Section>
  );
}
