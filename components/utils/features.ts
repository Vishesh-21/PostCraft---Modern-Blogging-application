interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Easy Blog Creation",
    description:
      "Write, edit, and publish your blog posts effortlessly with a user-friendly editor designed for all content creators.",
    icon: "📝",
  },
  {
    title: "Responsive Design",
    description:
      "Enjoy a seamless experience across all devices – mobile, tablet, and desktop – with a fully responsive layout.",
    icon: "📱",
  },
  {
    title: "User Authentication",
    description:
      "Secure login and registration system with JWT-based authentication to protect your content.",
    icon: "🔐",
  },
  {
    title: "Rich Text Editor",
    description:
      "Format your blogs beautifully using our powerful WYSIWYG editor with support for headings, images, links, and more.",
    icon: "🎨",
  },
  {
    title: "Comment System",
    description:
      "Engage with your readers through a built-in commenting system that encourages discussions and feedback.",
    icon: "💬",
  },
  {
    title: "SEO Optimized",
    description:
      "Boost your visibility on search engines with built-in SEO optimization for each blog post.",
    icon: "🚀",
  },
];
