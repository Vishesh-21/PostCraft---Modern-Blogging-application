import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import image1 from "@/public/image1.jpeg";
import image2 from "@/public/image2.jpeg";
import image3 from "@/public/image3.jpeg";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Riya Kapoor",
      role: "Content Creator",
      avatar: image1,
      quote:
        "This platform made publishing my thoughts super easy and beautiful. Love the editor!",
    },
    {
      id: 2,
      name: "Arjun Mehra",
      role: "Tech Blogger",
      avatar: image2,
      quote:
        "Finally found a clean blogging space with powerful features. Highly recommended!",
    },
    {
      id: 3,
      name: "Sneha Sharma",
      role: "Freelance Writer",
      avatar: image3,
      quote:
        "I grew my audience 2x in just a month thanks to this amazing platform!",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Card className="text-center bg-background">
        <CardTitle>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Users Say
          </h2>
          <p className="mb-12">
            Hear from creators who are growing with our platform.
          </p>
        </CardTitle>

        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="transition-all duration-300 hover:border-primary hover:shadow-xl hover:scale-100 scale-95 cursor-pointer"
            >
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-center mb-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={"100"}
                      height={"100"}
                      className="w-16 h-16 rounded-full border-2 border-primary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">“{t.quote}”</p>
              </CardContent>
              <CardFooter className="flex flex-col">
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
