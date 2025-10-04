"use client"

import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="backdrop-blur-md rounded-2xl px-8 py-4 flex items-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        {/* Left Section - Company Name */}
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl font-bold whitespace-nowrap">
            Practices.fyi
          </Link>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-16">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:opacity-70 transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center text-white hover:opacity-70 transition-colors duration-200 font-medium whitespace-nowrap group">
                Products
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[220px] bg-white rounded-lg shadow-lg p-2 z-50"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="outline-none">
                    <Link
                      href="/reputation-management"
                      className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                    >
                      Reputation Management
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="outline-none">
                    <Link
                      href="/practice-performance-report"
                      className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                    >
                      Practice Performance Report
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="outline-none">
                    <Link
                      href="/practice-health-checkup"
                      className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                    >
                      Practice Health Checkup
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="outline-none">
                    <Link
                      href="/accountability-partner"
                      className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                    >
                      Accountability Partner
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* <Link
              href="/templates"
              className="text-white hover:opacity-70 transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Templates & Guides
            </Link> */}

            <Link
              href="/partners"
              className="text-white hover:opacity-70 transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Partners
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium whitespace-nowrap"
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
                    <Link href="/" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Home
                    </Link>
                  </Dialog.Close>

                  {/* Products Section - Collapsible */}
                  <Collapsible.Root open={productsOpen} onOpenChange={setProductsOpen}>
                    <Collapsible.Trigger className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-900 font-medium hover:bg-gray-50">
                      Products
                      <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                    </Collapsible.Trigger>
                    <Collapsible.Content className="flex flex-col space-y-1 mt-1">
                      <Dialog.Close asChild>
                        <Link href="/reputation-management" className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                          Reputation Management
                        </Link>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Link href="/practice-performance-report" className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                          Practice Performance Report
                        </Link>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Link href="/practice-health-checkup" className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                          Practice Health Checkup
                        </Link>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Link href="/accountability-partner" className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                          Accountability Partner
                        </Link>
                      </Dialog.Close>
                    </Collapsible.Content>
                  </Collapsible.Root>

                  {/* <Dialog.Close asChild>
                    <Link href="/templates" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Templates & Guides
                    </Link>
                  </Dialog.Close> */}
                  <Dialog.Close asChild>
                    <Link href="/partners" className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      Partners
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/contact" className="px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
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

