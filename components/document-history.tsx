"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DocumentHistoryProps {
  documentId: string
}

export function DocumentHistory({ documentId }: DocumentHistoryProps) {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching history data
    const fetchHistory = async () => {
      // This would normally fetch from the database
      setHistory([
        {
          id: "1",
          timestamp: new Date("2025-02-28T15:30:00"),
          user: { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
          description: "Updated content in paragraph 3",
        },
        {
          id: "2",
          timestamp: new Date("2025-02-27T14:15:00"),
          user: { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
          description: 'Added new section "Project Timeline"',
        },
        {
          id: "3",
          timestamp: new Date("2025-02-26T11:45:00"),
          user: { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=40&width=40" },
          description: "Fixed formatting issues",
        },
        {
          id: "4",
          timestamp: new Date("2025-02-25T09:20:00"),
          user: { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
          description: "Created document",
        },
      ])
      setLoading(false)
    }

    fetchHistory()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2">Loading history...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Version History</h2>
        <Button variant="outline" size="sm">
          Export History
        </Button>
      </div>

      <div className="space-y-4">
        {history.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={item.user.avatar} alt={item.user.name} />
                    <AvatarFallback>{item.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{item.user.name}</CardTitle>
                    <CardDescription>
                      {item.timestamp.toLocaleDateString()} at{" "}
                      {item.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Restore
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

