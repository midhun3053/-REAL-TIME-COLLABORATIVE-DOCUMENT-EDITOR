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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would fetch from MongoDB
  const document = documents.find((doc) => doc.id === id)

  if (!document) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 })
  }

  return NextResponse.json(document)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const data = await request.json()

  // In a real app, this would update in MongoDB
  const documentIndex = documents.findIndex((doc) => doc.id === id)

  if (documentIndex === -1) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 })
  }

  // Update the document
  const updatedDocument = {
    ...documents[documentIndex],
    ...data,
    updatedAt: new Date(),
  }

  documents[documentIndex] = updatedDocument

  return NextResponse.json(updatedDocument)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would delete from MongoDB
  const documentIndex = documents.findIndex((doc) => doc.id === id)

  if (documentIndex === -1) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 })
  }

  // Remove the document
  documents.splice(documentIndex, 1)

  return NextResponse.json({ success: true })
}

