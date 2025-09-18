import React from 'react';
import { footerSections, socialLinks, legalLinks } from '../data/footerData';

export function DetailedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{backgroundColor: 'var(--color-baba-ganoush)'}}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                      style={{color: 'var(--color-ice)'}}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="hover:text-white transition-colors duration-200"
                  style={{color: 'var(--color-ice)'}}
                  aria-label={social.alt}
                >
                  <img
                    alt={social.alt}
                    src={social.src}
                    className="w-5 h-5 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Large name section spanning full width */}
        <div className="mt-12 mb-8">
          <div className="w-full overflow-hidden">
            <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-center text-white leading-none tracking-wider select-none">
              <span className="inline-block">S</span>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">E</span>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">A</span>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">N</span>
            </h2>
          </div>
        </div>

        <div className="border-t pt-8" style={{borderColor: 'var(--color-pesto)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p style={{color: 'var(--color-ice)'}}>
                Sean © {currentYear}<br />
                All Rights Reserved
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 text-sm" style={{color: 'var(--color-ice)'}}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}