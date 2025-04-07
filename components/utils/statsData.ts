export interface StatItem {
    id: number;
    title: string;
    value: number;
    suffix : string
    description: string;
  }
  
  export const statsData: StatItem[] = [
    {
      id: 1,
      title: "Blogs Published",
      value: 12000,
      suffix: "+",
      description: "High-quality posts shared by our vibrant community.",
    },
    {
      id: 2,
      title: "Active Users",
      value: 4800,
      suffix: "",
      description: "Writers and readers engaging monthly.",
    },
    {
      id: 3,
      title: "Countries Reached",
      value: 87,
      suffix: "+",
      description: "Global creators sharing unique stories.",
    },
    {
      id: 4,
      title: "Monthly Views",
      value: 150000,
      suffix: "+",
      description: "Content that’s reaching thousands every day.",
    },
  ];
  