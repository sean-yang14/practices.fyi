import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Project Takeoff</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses to launch and scale with comprehensive services,
              templates, and expert guidance for successful project execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/templates-guides" className="text-gray-300 hover:text-white transition-colors">
                  Templates & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@projecttakeoff.com" className="text-gray-300 hover:text-white transition-colors">
                  info@projecttakeoff.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Project Takeoff. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}