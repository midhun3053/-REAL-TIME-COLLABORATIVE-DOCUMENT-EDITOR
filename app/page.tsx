import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="SPARK DOCS" className="h-8 w-8" />
            <span className="text-xl font-bold">SPARK DOCS</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/documents">
              <Button variant="ghost">My Documents</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Real-Time Collaborative Document Editor
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create, edit, and collaborate on documents in real-time with your team. Our platform provides a
                  seamless experience for multiple users to work on the same document simultaneously.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/documents/new">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                      Create New Document
                    </Button>
                  </Link>
                  <Link href="/documents">
                    <Button size="lg" variant="outline">
                      View Your Documents
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative">
                  <img
                    src="/editor-preview.svg"
                    alt="Document Editor Preview"
                    width={550}
                    height={400}
                    className="rounded-lg border bg-white p-2 shadow-lg"
                  />
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-600 opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-600 opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our collaborative document editor comes with powerful features to enhance your team's productivity.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 pt-8">
              {features.map((feature) => (
                <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">{feature.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SPARK. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Real-Time Collaboration",
    description: "Multiple users can edit the same document simultaneously with changes reflected instantly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Rich Text Editing",
    description: "Format your documents with a wide range of styling options and formatting tools.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M8 13h8"></path>
        <path d="M8 17h8"></path>
        <path d="M8 9h1"></path>
      </svg>
    ),
  },
  {
    title: "Version History",
    description: "Track changes and revert to previous versions of your document at any time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 3v5h5"></path>
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path>
        <path d="M12 7v5l4 2"></path>
      </svg>
    ),
  },
  {
    title: "Access Control",
    description: "Manage who can view and edit your documents with customizable permissions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    title: "Comments & Annotations",
    description: "Add comments and feedback directly within the document for better collaboration.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    title: "Offline Support",
    description: "Continue working even when offline, with changes syncing once you're back online.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M9 11V6a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0"></path>
        <path d="M9 10h6"></path>
        <rect width="18" height="12" x="3" y="10" rx="2"></rect>
      </svg>
    ),
  },
]

