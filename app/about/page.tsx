import Image from "next/image";
import Link from "next/link";
import { Github, MapPin, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="items-center text-center">
            <Image
              src="/my-avatar.png"
              alt="TonioCode's avatar"
              width={160}
              height={160}
              className="rounded-2xl"
              priority
            />
            <CardTitle className="mt-4 text-3xl">TonioCode</CardTitle>
            <CardDescription className="text-base">
              Full-Stack Next.js Developer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Full-Stack</Badge>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <p>
                  Based near Toulouse, France. Building modern web applications
                  from the south of France.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Code className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <p>
                  Full-stack developer specialized in Next.js. I craft
                  performant, type-safe applications from front-end to back-end.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <p>
                  Passionate about computer science and new technologies. Always
                  exploring the latest tools and frameworks to build better
                  software.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Button asChild>
                <a
                  href="https://github.com/TonioCodeur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Follow me on GitHub
                </a>
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              <Link href="/" className="underline-offset-4 hover:underline">
                Back to home
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
