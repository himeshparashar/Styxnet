"use client"
import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/images/Styxnet-ai-logo.png"
                  alt="Styxnet AI Logo"
                  width={120}
                  height={30}
                  className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li className="relative group">
              <Link 
                href="#home" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="#pricing" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/blogs" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/sign-in" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Sign In
            </Link>
            <Link href="/auth/sign-up">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-green-100/50 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="#home" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#pricing" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#features" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/blogs" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-green-100 space-y-3">
                <Link 
                  href="/auth/sign-in" 
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link href="/auth/sign-up" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
