import Link from "next/link";

export default function About() {
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
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I&apos;m a Developer with a passion for Learning Backend.
            Feel free to explore my work and connect with me!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}