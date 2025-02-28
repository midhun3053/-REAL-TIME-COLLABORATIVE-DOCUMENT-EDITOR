"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Editor } from "@/components/editor"
import { DocumentHistory } from "@/components/document-history"
import { DocumentComments } from "@/components/document-comments"

export default function DocumentPage() {
  const params = useParams()
  const documentId = params.id as string
  const [document, setDocument] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeUsers, setActiveUsers] = useState([
    { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", color: "#FF5733" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", color: "#33FF57" },
    { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=40&width=40", color: "#3357FF" },
  ])

  // Simulate fetching document data
  useEffect(() => {
    const fetchDocument = async () => {
      // This would normally fetch from the database
      setDocument({
        id: documentId,
        title:
          documentId === "1"
            ? "Project Proposal"
            : documentId === "2"
              ? "Meeting Notes"
              : documentId === "3"
                ? "Research Document"
                : "Product Roadmap",
        content:
          "<p>This is the document content. It would be loaded from the database and managed by the rich text editor.</p>",
        createdAt: new Date("2025-02-20T10:00:00"),
        updatedAt: new Date("2025-02-28T15:30:00"),
        owner: { id: "1", name: "John Doe" },
        collaborators: [
          { id: "2", name: "Jane Smith" },
          { id: "3", name: "Bob Johnson" },
          { id: "4", name: "Alice Williams" },
        ],
      })
      setLoading(false)
    }

    fetchDocument()
  }, [documentId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2">Loading document...</p>
        </div>
      </div>
    )
  }

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
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {activeUsers.map((user) => (
                <TooltipProvider key={user.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="border-2 border-background" style={{ borderColor: user.color }}>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{user.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8 ml-1">
                <span className="text-xs">+2</span>
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Share
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              Save
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <input
            type="text"
            value={document.title}
            onChange={(e) => setDocument({ ...document, title: e.target.value })}
            className="text-3xl font-bold bg-transparent border-none outline-none w-full focus:ring-1 focus:ring-primary rounded px-2"
          />
          <p className="text-sm text-muted-foreground">
            Last updated: {document.updatedAt.toLocaleDateString()} at{" "}
            {document.updatedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>

        <Tabs defaultValue="editor">
          <TabsList className="mb-4">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="editor" className="mt-0">
            <Editor initialContent={document.content} />
          </TabsContent>
          <TabsContent value="history" className="mt-0">
            <DocumentHistory documentId={document.id} />
          </TabsContent>
          <TabsContent value="comments" className="mt-0">
            <DocumentComments documentId={document.id} />
          </TabsContent>
        </Tabs>
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

