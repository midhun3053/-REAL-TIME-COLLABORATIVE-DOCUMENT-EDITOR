import { NextResponse } from "next/server"

// This would normally connect to MongoDB
const documents = [
  {
    id: "1",
    title: "Project Proposal",
    content: "<p>This is the document content.</p>",
    createdAt: new Date("2025-02-20T10:00:00"),
    updatedAt: new Date("2025-02-28T15:30:00"),
    owner: { id: "1", name: "John Doe" },
    collaborators: [
      { id: "2", name: "Jane Smith" },
      { id: "3", name: "Bob Johnson" },
    ],
  },
  // More documents would be here
]

export async function GET() {
  // In a real app, this would fetch from MongoDB
  return NextResponse.json(documents)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Validate the data
  if (!data.title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 })
  }

  // In a real app, this would save to MongoDB
  const newDocument = {
    id: `new-${Date.now()}`,
    title: data.title,
    content: data.content || "<p></p>",
    createdAt: new Date(),
    updatedAt: new Date(),
    owner: { id: "1", name: "John Doe" },
    collaborators: [],
  }

  // Add to our mock database
  documents.push(newDocument)

  return NextResponse.json(newDocument)
}

