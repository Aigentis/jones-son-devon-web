
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Mail } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas We Cover", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar - Fixed for mobile */}
      <div className="bg-blue-600 text-white py-2 px-2">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Mobile layout */}
          <div className="flex flex-col space-y-1 sm:hidden">
            <div className="flex items-center justify-center text-xs">
              <Mail className="h-3 w-3 text-orange-400 mr-1" />
              <span>info@jonesandsonroofing.uk</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>📍 Serving North Devon & Beyond</span>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span className="font-semibold">01271 614 770</span>
              </div>
            </div>
          </div>
          
          {/* Desktop layout */}
          <div className="hidden sm:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>info@jonesandsonroofing.uk</span>
              </div>
              <span>📍 Serving North Devon & Beyond</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">01271 614 770</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5da8d96d-ab3d-4a6e-9e44-74498b5c3e1d.png" 
              alt="Jones & Son Property Maintenance" 
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
