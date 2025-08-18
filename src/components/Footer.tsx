import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a href="connectankittt@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="https://github.com/ankittcse" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ankitrajkishor01/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="https://x.com/_ankit79?s=21" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 Ankit Kishor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
