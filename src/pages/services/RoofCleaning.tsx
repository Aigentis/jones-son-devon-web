import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Sparkles, Leaf, Home, Award } from "lucide-react";

export default function RoofCleaning() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Roof Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Gentle and safe moss and algae removal that restores your roof's appearance without causing damage to your tiles. Professional cleaning across North Devon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Roof Cleaning Service"
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Roof Cleaning?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Gentle Methods",
                  description: "Safe cleaning techniques that remove moss and algae without damaging tiles."
                },
                {
                  icon: Leaf,
                  title: "Moss Removal",
                  description: "Complete removal of moss, algae, and organic growth that damages roofs."
                },
                {
                  icon: Home,
                  title: "Restored Appearance",
                  description: "Dramatically improve your home's kerb appeal and roof longevity."
                },
                {
                  icon: Award,
                  title: "Professional Service",
                  description: "Fully insured specialists with the right equipment and expertise."
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Roof Cleaning Process</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                North Devon's damp climate creates perfect conditions for moss and algae growth on roofs. 
                Our professional cleaning service safely removes these growths, restoring your roof's 
                appearance and preventing long-term damage to tiles and roof structure.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process:</h3>
                  <ul className="space-y-2">
                    <li>• Thorough roof inspection</li>
                    <li>• Gentle moss and algae removal</li>
                    <li>• Safe biocide treatment</li>
                    <li>• Gutter clearing and cleaning</li>
                    <li>• Full area cleanup</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li>• Extends roof lifespan</li>
                    <li>• Improves property value</li>
                    <li>• Prevents tile damage</li>
                    <li>• Enhances kerb appeal</li>
                    <li>• Maintains roof warranty</li>
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
              Ready to Restore Your Roof?
            </h2>
            <p className="text-xl mb-8">
              Don't let moss and algae damage your roof. Contact us today for professional roof 
              cleaning that will restore your roof's appearance and protect its longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Roof Cleaning Service"
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