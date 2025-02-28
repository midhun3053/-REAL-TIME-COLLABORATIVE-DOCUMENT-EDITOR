"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

interface DocumentCommentsProps {
  documentId: string
}

export function DocumentComments({ documentId }: DocumentCommentsProps) {
  const [comments, setComments] = useState<any[]>([])
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching comments data
    const fetchComments = async () => {
      // This would normally fetch from the database
      setComments([
        {
          id: "1",
          timestamp: new Date("2025-02-28T15:30:00"),
          user: { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
          content: "I think we should expand the section on market analysis. The current content is too brief.",
        },
        {
          id: "2",
          timestamp: new Date("2025-02-27T14:15:00"),
          user: { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=40&width=40" },
          content: "Great work on the executive summary! Very clear and concise.",
        },
        {
          id: "3",
          timestamp: new Date("2025-02-26T11:45:00"),
          user: { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
          content: "I've updated the financial projections based on the latest data.",
        },
      ])
      setLoading(false)
    }

    fetchComments()
  }, [])

  const handleAddComment = () => {
    if (newComment.trim() === "") return

    const comment = {
      id: `new-${Date.now()}`,
      timestamp: new Date(),
      user: { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
      content: newComment,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2">Loading comments...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Comments</h2>
        <Button variant="outline" size="sm">
          Resolve All
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Add a comment</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setNewComment("")}>
            Cancel
          </Button>
          <Button onClick={handleAddComment} className="bg-orange-600 hover:bg-orange-700">
            Comment
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{comment.user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.timestamp.toLocaleDateString()} at{" "}
                    {comment.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{comment.content}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="ghost" size="sm">
                Reply
              </Button>
              <Button variant="ghost" size="sm">
                Resolve
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

