"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Project Takeoff
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={cn(
                "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-gray-50"
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-gray-50"
              )}
            >
              Services
            </Link>
            <Link
              href="/templates-guides"
              className={cn(
                "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-gray-50"
              )}
            >
              Templates & Guides
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-gray-50"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}