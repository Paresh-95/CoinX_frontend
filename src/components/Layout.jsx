import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src='/logo.png' alt="KoinX Logo" className="h-6 md:h-7" />
            </Link>
            <div className="hidden md:flex items-center space-x-8 font-bold">
              <Link to="/crypto-taxes" className="text-gray-700  hover:text-primary">Crypto Taxes</Link>
              <Link to="/free-tools" className="text-gray-700 hover:text-primary">Free Tools</Link>
              <Link to="/resource-center" className="text-gray-700 hover:text-primary">Resource Center</Link>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link to="/crypto-taxes" className="block text-gray-700 hover:text-primary">Crypto Taxes</Link>
              <Link to="/free-tools" className="block text-gray-700 hover:text-primary">Free Tools</Link>
              <Link to="/resource-center" className="block text-gray-700 hover:text-primary">Resource Center</Link>
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

