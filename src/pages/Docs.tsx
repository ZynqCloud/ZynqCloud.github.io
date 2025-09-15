import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarLinks = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Prerequisites", href: "/docs/prerequisites" },
  { title: "Installation Guide", href: "/docs/installation" },
  { title: "User Guide", href: "/docs/user-guide" },
  { title: "Versions", href: "/docs/versions" },
  { title: "FAQ", href: "/docs/faq" },
];

export default function Docs() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border flex items-center px-6 z-10">
        <h1 className="font-bold text-lg">Zynq Cloud Docs</h1>
      </header>

      <main className="flex flex-1 pt-16">
        {/* Fixed Sidebar */}
        <aside className="w-64 border-r border-border p-6 fixed top-16 bottom-0">
          <nav className="space-y-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block transition ${
                  location.pathname === link.href
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <section className="flex-1 ml-64 container mx-auto px-6 py-12 prose prose-neutral dark:prose-invert max-w-4xl">
          <Outlet /> {/* child routes go here */}
        </section>
      </main>
    </div>
  );
}
