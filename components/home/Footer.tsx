import {FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Code2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-full md:mt-0 mt-6 mx-auto py-12 border-t-1 border-foreground/60 ">
      <div className="max-w-6xl  mx-auto px-6 grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">PostCraft</h2>
          <p className="mt-2 text-sm">
            Share your thoughts with the world. Blogify makes it easy.
          </p>
        </div>

        {/* Resources */}
        <div className="place-self-end md:place-self-start md:pl-34">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Help Center</Link>
            </li>
          </ul>
        </div>

        {/* CTA & Socials */}
        <div className="col-span-2 md:place-self-end place-self-start">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Join Our Community
          </h3>
          <p className="text-sm mb-4">
            Stay updated with the latest posts and features.
          </p>
          <form className="flex items-center space-x-2">
            <Input
              type="text"
              className="md:w-52 w-[300px] focus-visible:ring-1"
              placeholder="Enter your mail..."
            />
            <Button className="cursor-pointer">Subscribe</Button>
          </form>
          <div className="flex space-x-4 mt-6 justify-end">
            <Link
              href="https://www.hackerrank.com/dashboard"
              className="hover:text-primary hover:-translate-y-1 duration-200 transition-all"
              target="_blank"
            >
              <Code2 className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/Vishesh-21"
              className="hover:text-primary hover:-translate-y-1 duration-200 transition-all"
              target="_blank"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishesh-verma-35b31b279/"
              className="hover:text-primary hover:-translate-y-1 duration-200 transition-all"
              target="_blank"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PostCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
