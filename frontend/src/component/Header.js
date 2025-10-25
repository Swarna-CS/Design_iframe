import companyLogo from './images/XlligentUSA_LOGO.png';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
            <div className="w-32 h-100 bg-gradient-to-b from-white via-white to-white rounded-sm relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img
                        src={companyLogo}
                        alt="Xlligent USA"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-cyan-400 font-medium hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <button className="flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors">
              About 
            </button>
            <button className="flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Templates
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <Link to="/pricing" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            {/* FIX: route link (no hash) */}
            <Link to="/contact" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <Globe className="w-5 h-5 mr-1" />
              <span className="font-medium">English</span>
            </button>
            <button className="bg-orange-300 hover:bg-cyan-500 text-white font-semibold px-6 py-2.5 rounded-md transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
