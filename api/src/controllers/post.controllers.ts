import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getPostsHandler = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        body: true,
        user: true,
        createdAt: true,
        postLikes: true,
        comments: true,
      },
    });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({
      message: "Some internal server error.",
    });
  }
};
