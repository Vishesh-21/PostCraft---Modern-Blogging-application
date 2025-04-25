import { prisma } from "../prisma";

export const filterArticles = async (
  query: string,
  skip: number,
  take: number
) => {
  const [searchArticles, totalArticles] = await prisma.$transaction([
    prisma.articles.findMany({
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
      skip: skip,
      take: take,
      orderBy : {
        createdAt: 'desc'
      }
    }),

    prisma.articles.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { category: { contains: query, mode: "insensitive" } },
        ],
      },
    }),
  ]);

  return { articles: searchArticles, totalArticles };
};
