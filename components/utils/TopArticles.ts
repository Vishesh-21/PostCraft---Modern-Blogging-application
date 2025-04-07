type article = {
  id: number;
  title: string;
  summary: string;
  author: string;
  views: number;
  likes: number;
  image: string;
  publishedAt: string;
};

export const topArticles: article[] = [
  {
    id: 1,
    title: "Mastering JavaScript Closures",
    summary: "A deep dive into closures in JavaScript with practical examples.",
    author: "Vishesh Baund",
    views: 2450,
    likes: 300,
    image:
      "https://images.unsplash.com/photo-1613490900233-141c5560d75d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "2025-03-15",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    summary:
      "Learn how to build fast, SEO-friendly web apps using the latest features of Next.js.",
    author: "Vishesh Baund",
    views: 3100,
    likes: 410,
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "2025-03-22",
  },
  {
    id: 3,
    title: "Why You Should Use Prisma with PostgreSQL",
    summary:
      "Explore the power of Prisma ORM for efficient database management in full-stack apps.",
    author: "Vishesh Baund",
    views: 1980,
    likes: 220,
    image:
      "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "2025-04-01",
  },
  {
    id: 4,
    title: "Creating an AI Code Reviewer with OpenAI API",
    summary:
      "Step-by-step guide to build your own AI-powered code review tool using OpenAI and Node.js.",
    author: "Vishesh Baund",
    views: 3725,
    likes: 560,
    image:
      "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "2025-02-28",
  },
  {
    id: 5,
    title: "10 JavaScript Interview Questions You Must Know",
    summary:
      "Ace your JavaScript interviews with these top 10 commonly asked questions and answers.",
    author: "Vishesh Baund",
    views: 4200,
    likes: 670,
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    publishedAt: "2025-04-03",
  },
];
