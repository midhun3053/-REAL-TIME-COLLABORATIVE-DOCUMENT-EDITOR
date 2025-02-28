import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DocumentsPage() {
  // This would normally fetch from the database
  const documents = [
    {
      id: "1",
      title: "Project Proposal",
      updatedAt: new Date("2025-02-25T14:30:00"),
      collaborators: 3,
    },
    {
      id: "2",
      title: "Meeting Notes",
      updatedAt: new Date("2025-02-27T09:15:00"),
      collaborators: 5,
    },
    {
      id: "3",
      title: "Research Document",
      updatedAt: new Date("2025-02-28T16:45:00"),
      collaborators: 2,
    },
    {
      id: "4",
      title: "Product Roadmap",
      updatedAt: new Date("2025-02-26T11:20:00"),
      collaborators: 4,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="CODTECH Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">CODTECH Docs</span>
              </div>
            </Link>
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
      <main className="flex-1 container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Documents</h1>
          <div className="flex gap-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input type="search" placeholder="Search documents..." className="w-64 pl-8" />
            </div>
            <Link href="/documents/new">
              <Button className="bg-orange-600 hover:bg-orange-700">New Document</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Link key={doc.id} href={`/documents/${doc.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{doc.title}</CardTitle>
                  <CardDescription>
                    Last updated: {doc.updatedAt.toLocaleDateString()} at{" "}
                    {doc.updatedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    Document Preview
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {doc.collaborators} collaborators
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
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

