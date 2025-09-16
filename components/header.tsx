"use client"

import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuLinkClassName,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        {/* Left Section - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:opacity-70 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:opacity-70 transition-colors duration-200 font-medium"
          >
            Services
          </Link>
        </div>

        {/* Center Section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-white text-xl font-bold">
            Practices.fyi
          </Link>
        </div>

        {/* Right Section - Navigation Links and Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/templates"
            className="text-white hover:opacity-70 transition-colors duration-200 font-medium"
          >
            Templates & Guides
          </Link>
          <Link
            href="/contact"
            className="btn-primary px-6 py-2 rounded-full transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Dialog.Root>
            <Dialog.Trigger
              className="text-white hover:opacity-70 p-2 rounded-md"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30" />
              <Dialog.Content className="fixed inset-y-0 right-0 w-72 max-w-[85vw] bg-white shadow-xl p-6 focus:outline-none">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold">Menu</span>
                  <Dialog.Close className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50" aria-label="Close menu">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col space-y-2">
                  <Dialog.Close asChild>
                    <Link href="/" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Home
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/services" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Services
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/templates" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Templates & Guides
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/contact" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Contact
                    </Link>
                  </Dialog.Close>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  )
}

