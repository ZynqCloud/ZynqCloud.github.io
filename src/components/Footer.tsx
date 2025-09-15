import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Download', href: '/download' },
      { name: 'Demo', href: '/demo' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
      { name: 'About', href: '/about' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="bg-darker-surface border-t border-tech-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-clean font-bold text-foreground">
                Zynq Cloud
              </span>
            </div>
            <p className="font-clean text-muted-foreground mb-6 max-w-md">
              Self-hosted cloud storage that puts privacy and control back in your hands. 
              Built for teams and individuals who value data sovereignty.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zynq-cloud"
                className="text-muted-foreground hover:text-tech-glow transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/zynqcloud"
                className="text-muted-foreground hover:text-tech-glow transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://discord.gg/zynqcloud"
                className="text-muted-foreground hover:text-tech-glow transition-colors duration-200"
                aria-label="Discord"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-clean font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-clean text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tech-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-clean text-muted-foreground text-sm">
            © 2024 Zynq Cloud. Open source and privacy-focused.
          </p>
          <p className="font-clean text-muted-foreground text-sm mt-4 md:mt-0">
            Made with ❤️ for the self-hosting community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;