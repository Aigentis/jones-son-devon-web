import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuotePopup } from "@/components/ui/QuotePopup";
import { Phone, Shield, Home, Thermometer, Award } from "lucide-react";

export default function Cladding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              High-Quality Exterior Cladding
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your home's appearance with our premium exterior cladding. Enhance insulation, provide weather protection, and create a stunning modern finish that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup
                service="Cladding"
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
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Cladding</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Home,
                  title: "Enhanced Appearance",
                  description: "Modern, attractive finish that significantly improves your home's kerb appeal."
                },
                {
                  icon: Thermometer,
                  title: "Better Insulation",
                  description: "Improved thermal efficiency reducing energy costs and increasing comfort."
                },
                {
                  icon: Shield,
                  title: "Weather Protection",
                  description: "Durable protective layer against rain, wind, and harsh weather conditions."
                },
                {
                  icon: Award,
                  title: "Low Maintenance",
                  description: "Long-lasting materials that require minimal upkeep and retain their appearance."
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Cladding Service</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Our exterior cladding solutions provide a perfect combination of aesthetics and functionality. 
                Whether you're looking to modernise your home's appearance or improve its thermal performance, 
                our expert installation ensures lasting quality and visual appeal.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h3>
                  <ul className="space-y-2">
                    <li>• UPVC cladding installation</li>
                    <li>• Composite cladding options</li>
                    <li>• Insulation improvements</li>
                    <li>• Complete exterior renovation</li>
                    <li>• Professional survey and design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Advantages:</h3>
                  <ul className="space-y-2">
                    <li>• Reduced energy bills</li>
                    <li>• Increased property value</li>
                    <li>• Weather-resistant finish</li>
                    <li>• Wide range of colours</li>
                    <li>• Professional installation guarantee</li>
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
              Ready to Transform Your Home's Exterior?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and quote. Discover how our premium cladding 
              can enhance your home's appearance and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup 
                service="Cladding"
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