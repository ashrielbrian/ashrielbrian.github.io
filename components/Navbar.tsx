import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-center px-4 md:px-6">
        <nav className="flex items-center justify-center gap-8 sm:gap-10">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            /home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-extrabold text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            /blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
