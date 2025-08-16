import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UnifiedQuotePopup } from "@/components/ui/UnifiedQuotePopup";
import { Phone, Shield, Droplets, Clock, Award } from "lucide-react";

export default function FlatRoofs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Flat Roof Installation & Repair
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional flat roof solutions for garages, extensions, and commercial properties. High-performance, watertight materials installed by experienced specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UnifiedQuotePopup 
                service="Flat Roofs"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Flat Roof Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Watertight Guarantee",
                  description: "100% waterproof installation using premium materials and proven techniques."
                },
                {
                  icon: Shield,
                  title: "Durable Materials",
                  description: "High-performance membranes designed to withstand extreme weather conditions."
                },
                {
                  icon: Clock,
                  title: "Long-Lasting",
                  description: "Professional installation designed for decades of reliable performance."
                },
                {
                  icon: Award,
                  title: "Expert Installation",
                  description: "Specialist flat roof contractors with extensive experience and training."
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Flat Roof Services</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Flat roofs require specialist knowledge and materials to ensure long-term performance. 
                Our expert team provides comprehensive flat roof solutions using the latest membrane 
                technologies and installation techniques for lasting protection.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h3>
                  <ul className="space-y-2">
                    <li>• New flat roof installation</li>
                    <li>• Flat roof repairs and maintenance</li>
                    <li>• Membrane replacement</li>
                    <li>• Insulation upgrades</li>
                    <li>• Emergency leak repairs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications:</h3>
                  <ul className="space-y-2">
                    <li>• Garage roofs</li>
                    <li>• Extension roofs</li>
                    <li>• Commercial buildings</li>
                    <li>• Dormer windows</li>
                    <li>• Bay window roofs</li>
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
              Need Flat Roof Installation or Repair?
            </h2>
            <p className="text-xl mb-8">
              Don't let flat roof problems cause expensive damage. Contact our specialists today 
              for a free assessment and quote on professional flat roof solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UnifiedQuotePopup 
                service="Flat Roofs"
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