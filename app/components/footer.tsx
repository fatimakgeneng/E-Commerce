import Link from 'next/link';
import { Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://www.linkedin.com/in/fatimakgeneng/" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://github.com/fatimakgeneng" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCyUHv2cy1eOwE2Qg9lJiskw" aria-label="YouTube">
            <Youtube className="w-6 h-6 text-gray-400 hover:text-white" />
          </Link>
        </div>

        {/* Developer Info with Image */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <img 
            src="/fatimaphoto.jpeg"  // Update this path with the actual image location
            alt="fatimakgeneng"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="mb-1 tracking-wide">
              &copy; {new Date().getFullYear()} EmberIvy
            </p>
            <p className="tracking-wide">Developed by Fatima Khan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

