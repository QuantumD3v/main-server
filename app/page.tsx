import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-gray-800 text-white py-4 px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Personal Page</h1>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:underline-offset-4"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <section id="home" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Page</h2>
          <p className="text-lg">
            Hi, I&apos;m Celestia. This is my personal page where I share my
            projects, thoughts, and more.
          </p>
        </section>
      </main>

      {/* Links Section */}
      <section
        id="links"
        className="bg-black-100 py-4 px-8 flex justify-center gap-4 mt-auto"
      >
        <a
          href="https://github.com/QuantumD3v"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-lg hover:bg-gray-100 transition flex items-center gap-2"
        >
          <FaGithub /> My GitHub
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-lg hover:bg-gray-100 transition flex items-center gap-2"
        >
          <FaTwitter /> My Twitter
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
