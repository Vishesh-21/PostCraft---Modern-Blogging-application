import { prisma } from "../prisma";

export const filterArticles = async (query: string) => {
  return prisma.articles.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
      ],
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageURL: true,
        },
      },
      comments: true,
      likes: true,
    },
  });
};
