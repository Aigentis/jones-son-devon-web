import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Shield, Wind, Wrench, Award } from "lucide-react";

export default function DryVerge() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Dry Verge Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Secure, maintenance-free dry verge systems that protect your roof's edges from wind uplift and replace crumbling mortar with modern, reliable protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Dry Verge Service"
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dry Verge?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Wind,
                  title: "Wind Resistance",
                  description: "Superior protection against wind uplift and storm damage to roof edges."
                },
                {
                  icon: Wrench,
                  title: "Maintenance-Free",
                  description: "No more crumbling mortar or regular repairs - install once and forget."
                },
                {
                  icon: Shield,
                  title: "Secure Fixing",
                  description: "Mechanical fixing system provides stronger hold than traditional mortar."
                },
                {
                  icon: Award,
                  title: "Professional Install",
                  description: "Expert fitting ensuring proper performance and long-term reliability."
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Dry Verge Installation</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Dry verge systems are the modern solution to traditional mortar bedding at roof edges. 
                Our professional installation provides superior wind resistance and eliminates the ongoing 
                maintenance issues associated with mortar verges that crack and crumble over time.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Process:</h3>
                  <ul className="space-y-2">
                    <li>• Removal of old mortar verge</li>
                    <li>• Roof edge inspection and preparation</li>
                    <li>• Mechanical dry verge system fitting</li>
                    <li>• Weatherproof sealing</li>
                    <li>• Full system testing and warranty</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                  <ul className="space-y-2">
                    <li>• Eliminates wind damage risk</li>
                    <li>• No more maintenance costs</li>
                    <li>• Improved roof longevity</li>
                    <li>• Clean, professional appearance</li>
                    <li>• Weather-resistant materials</li>
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
              Upgrade to Dry Verge Today
            </h2>
            <p className="text-xl mb-8">
              Stop worrying about wind damage and crumbling mortar. Get a free quote for professional 
              dry verge installation that will protect your roof for decades to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Dry Verge Service"
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