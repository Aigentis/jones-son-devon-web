import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuotePopup } from "@/components/ui/QuotePopup";
import { Phone, Shield, Droplets, Clock, Award } from "lucide-react";

export default function Guttering() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Guttering Installation & Repair
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect your property with reliable guttering systems that effectively manage rainfall and prevent water damage. Expert installation and repair services across North Devon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup
                service="Guttering"
                trigger={
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Free Quote
                  </Button>
                }
              />
              <Button variant="outline" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                01271 614 770
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Guttering Service?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Water Management",
                  description: "Efficient rainwater collection and drainage to protect your property."
                },
                {
                  icon: Shield,
                  title: "Damage Prevention",
                  description: "Prevent costly water damage to foundations, walls, and landscaping."
                },
                {
                  icon: Clock,
                  title: "Durable Materials",
                  description: "High-quality UPVC guttering designed to withstand harsh weather."
                },
                {
                  icon: Award,
                  title: "Expert Fitting",
                  description: "Professional installation ensuring optimal performance and longevity."
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Guttering Services</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Proper guttering is essential for protecting your home from water damage. Our comprehensive 
                guttering services include installation, repair, and replacement using high-quality materials 
                designed to last in North Devon's challenging weather conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h3>
                  <ul className="space-y-2">
                    <li>• New guttering installation</li>
                    <li>• Gutter repairs and maintenance</li>
                    <li>• Downpipe installation</li>
                    <li>• Gutter cleaning and unblocking</li>
                    <li>• Full replacement systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li>• Prevents foundation damage</li>
                    <li>• Protects exterior walls</li>
                    <li>• Maintains property value</li>
                    <li>• Low maintenance UPVC materials</li>
                    <li>• Improved kerb appeal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Guttering Installation or Repair?
            </h2>
            <p className="text-xl mb-8">
              Don't wait for water damage to occur. Get a free quote for professional guttering 
              services that will protect your property for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup 
                service="Guttering"
                trigger={
                  <Button size="lg" variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
                    Contact Us Today
                  </Button>
                }
              />
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}