// This would be used in a real implementation to handle real-time collaboration
// using Socket.io

import type { Server as NetServer } from "http"
import { Server as SocketIOServer } from "socket.io"
import type { NextApiRequest } from "next"

export type NextApiResponseWithSocket = {
  socket: {
    server: NetServer & {
      io?: SocketIOServer
    }
  }
}

export const initSocket = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (!res.socket.server.io) {
    const io = new SocketIOServer(res.socket.server)
    res.socket.server.io = io

    io.on("connection", (socket) => {
      console.log("Client connected:", socket.id)

      // Join a document room
      socket.on("join-document", (documentId: string) => {
        socket.join(documentId)
        console.log(`Socket ${socket.id} joined document: ${documentId}`)
      })

      // Handle content updates
      socket.on("update-content", (data: { documentId: string; content: string; user: any }) => {
        // Broadcast to all clients in the room except the sender
        socket.to(data.documentId).emit("content-updated", {
          content: data.content,
          user: data.user,
        })
      })

      // Handle cursor position updates
      socket.on("update-cursor", (data: { documentId: string; position: any; user: any }) => {
        socket.to(data.documentId).emit("cursor-updated", {
          position: data.position,
          user: data.user,
        })
      })

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id)
      })
    })
  }

  return res.socket.server.io
}

