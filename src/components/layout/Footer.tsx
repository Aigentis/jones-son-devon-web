
import { Phone, Mail, MapPin, Facebook, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="Jones & Son Property Maintenance" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-lg font-bold">Jones & Son</h3>
                <p className="text-sm text-gray-400">Property Maintenance</p>
              </div>
            </div>
            <p className="text-gray-400">
              North Devon's trusted roofing and property maintenance specialists. 
              Family-run business serving the community for over 10 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <MessageSquare className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/fascias-soffits" className="hover:text-white transition-colors">Fascias & Soffits</a></li>
              <li><a href="/services/guttering" className="hover:text-white transition-colors">Guttering</a></li>
              <li><a href="/services/cladding" className="hover:text-white transition-colors">Cladding</a></li>
              <li><a href="/services/dry-verge" className="hover:text-white transition-colors">Dry Verge</a></li>
              <li><a href="/services/flat-roofs" className="hover:text-white transition-colors">Flat Roofs</a></li>
              <li><a href="/services/roof-cleaning" className="hover:text-white transition-colors">Roof Cleaning</a></li>
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Areas We Cover</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/areas/barnstaple" className="hover:text-white transition-colors">Barnstaple</a></li>
              <li><a href="/areas/bideford" className="hover:text-white transition-colors">Bideford</a></li>
              <li><a href="/areas/ilfracombe" className="hover:text-white transition-colors">Ilfracombe</a></li>
              <li><a href="/areas/braunton" className="hover:text-white transition-colors">Braunton</a></li>
              <li><a href="/areas/south-molton" className="hover:text-white transition-colors">South Molton</a></li>
              <li><a href="/areas/great-torrington" className="hover:text-white transition-colors">Great Torrington</a></li>
              <li><a href="/areas/fremington" className="hover:text-white transition-colors">Fremington</a></li>
              <li>+ Many More</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-semibold">01271 614 770</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-semibold">info@jonesandsonroofing.uk</p>
                  <p className="text-sm text-gray-400">Free quotes available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-semibold">North Devon</p>
                  <p className="text-sm text-gray-400">60-mile radius coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Jones & Son Property Maintenance. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
