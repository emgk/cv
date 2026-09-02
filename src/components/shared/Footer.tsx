import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t mbs-8 border-t-cv-timeline-stale text-center px-10 py-10"
    >
      <p className="text-sm text-cv-sub-heading pbe-2">
        This website is fully handmade with Next.JS (SSR) + Drizzle + PosgreSQL + TailwindCSS +
        TypeScript
      </p>
      <p className="text-xs text-cv-sub-heading">
        Feel free to check out the source code:{' '}
        <a
          href="https://github.com/emgk/cv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub (opens in new tab)"
          className="inline-flex gap-1 items-center text-cv-link hover:text-cv-link-hover transition-colors underline underline-offset-2"
        >
          <span>Github</span>
          <ExternalLink size={10} aria-hidden="true" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
