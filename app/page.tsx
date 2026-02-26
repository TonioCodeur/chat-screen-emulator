import Link from "next/link";
import {
  MessageSquare,
  Smartphone,
  Palette,
  Download,
  Moon,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/phone-mockup";

const platforms = ["SMS", "WhatsApp", "Messenger", "Telegram"];

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Platform",
    description:
      "Support for SMS, WhatsApp, Messenger, and Telegram chat layouts.",
  },
  {
    icon: Smartphone,
    title: "Device Frames",
    description: "Realistic iOS and Android device frames to wrap your chats.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description:
      "Customize colors, fonts, contact names, and message timestamps.",
  },
  {
    icon: Download,
    title: "Export Ready",
    description:
      "Export your chat mockups as high-quality PNG or SVG images.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "Full dark mode support for both the app and generated mockups.",
  },
  {
    icon: Eye,
    title: "Real-Time Preview",
    description:
      "See your changes instantly with a live preview as you edit.",
  },
];

const steps = [
  {
    step: 1,
    title: "Choose a platform",
    description: "Pick from SMS, WhatsApp, Messenger, or Telegram.",
  },
  {
    step: 2,
    title: "Compose your chat",
    description: "Add messages, set contacts, customize the look and feel.",
  },
  {
    step: 3,
    title: "Export & share",
    description: "Download your mockup as a high-quality image.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-24 text-center md:py-32">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Create realistic chat screen mockups in seconds
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          ChatFrame lets you build pixel-perfect chat screenshots for SMS,
          WhatsApp, Messenger, and Telegram — on iOS or Android.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {platforms.map((p) => (
            <Badge key={p} variant="secondary" className="text-sm">
              {p}
            </Badge>
          ))}
        </div>
        {/* Phone mockup */}
        <div className="pt-8">
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            Everything you need
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
            All the tools to create professional chat mockups, packed into one
            simple app.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <f.icon className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            How it works
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
            Three simple steps to create your chat mockup.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/40 py-20">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to create?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Sign up for free and start building beautiful chat mockups today.
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Sign Up Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto flex flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="font-semibold text-foreground">ChatFrame</span>
          </div>
          <p>&copy; {new Date().getFullYear()} ChatFrame. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
