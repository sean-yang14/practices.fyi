"use client"

import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"
export function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="backdrop-blur-md rounded-2xl px-8 py-4 flex items-center justify-between" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        {/* Left Section - Company Name */}
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl font-bold whitespace-nowrap">
            Practices.fyi
          </Link>
        </div>

        {/* Right Section - Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/get-started"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium whitespace-nowrap"
          >
            Get started
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-2 rounded-full transition-colors duration-200 font-medium whitespace-nowrap hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden ml-auto relative">
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
              <Dialog.Content className="fixed top-20 right-8 w-72 bg-white shadow-xl rounded-lg p-6 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-[60]">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
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
                    <Link href="/get-started" className="px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
                      Get started
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/contact" className="px-3 py-2 rounded-md bg-white text-black hover:bg-gray-100 border border-gray-200">
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
