import { Section } from "./section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Expense Tracker (₹)",
    shortDescription: "Track daily expenses using Firebase Realtime Database.",
    description: "A simple yet powerful expense tracker that allows users to log their daily expenditures. All data is saved in real-time to a Firebase Realtime Database, providing instant updates across devices. The interface is clean and user-friendly, focusing on quick entry and easy visualization of spending habits.",
    icon: "🪙",
  },
  {
    title: "FinTrack App",
    shortDescription: "A secure app with Google Login for tracking expenses.",
    description: "FinTrack is a comprehensive financial tracking application with a focus on security. It features Google Authentication for secure user login. Users can manage their income and expenses, categorize transactions, and view detailed reports. The app is built to be robust and scalable, ensuring data privacy and integrity.",
    icon: "📊",
  },
  {
    title: "Local Service Finder",
    shortDescription: "Helps users find nearby services quickly.",
    description: "This application is designed to connect users with local service providers. By leveraging geolocation, it provides a list of nearby services such as plumbers, electricians, and more. It includes features like provider profiles, user reviews, and direct contact options, making it easy to find and hire local professionals.",
    icon: "🧭",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Projects</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">A selection of my work. Click to learn more.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Dialog key={project.title}>
            <Card className="flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription>{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">View Details</Button>
                </DialogTrigger>
              </CardFooter>
            </Card>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <span>{project.title}</span>
                </DialogTitle>
                <DialogDescription>
                  {project.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
}
