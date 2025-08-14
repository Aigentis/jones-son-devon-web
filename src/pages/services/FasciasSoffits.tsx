import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Shield, Star, Clock, Award } from "lucide-react";

export default function FasciasSoffits() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Fascias & Soffits Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect your roofline with our durable UPVC fascias and soffits. Our expert installations provide long-lasting protection and a clean, professional finish for your North Devon home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Fascias & Soffits Service"
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Fascias & Soffits?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Weather Protection",
                  description: "Superior protection against wind, rain, and moisture damage."
                },
                {
                  icon: Star,
                  title: "Premium UPVC",
                  description: "High-quality materials that won't rot, warp, or require painting."
                },
                {
                  icon: Clock,
                  title: "Long-Lasting",
                  description: "Durable installation designed to last for decades with minimal maintenance."
                },
                {
                  icon: Award,
                  title: "Expert Installation",
                  description: "Professional fitting by experienced tradesmen with attention to detail."
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Fascias & Soffits Service</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                Fascias and soffits are essential components of your roof system, providing crucial protection 
                for your home while maintaining its aesthetic appeal. Our UPVC installations offer superior 
                durability and weather resistance compared to traditional timber options.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Include:</h3>
                  <ul className="space-y-2">
                    <li>• Complete removal of old fascias and soffits</li>
                    <li>• High-quality UPVC installation</li>
                    <li>• Proper ventilation installation</li>
                    <li>• Full clean-up and disposal</li>
                    <li>• 10-year workmanship warranty</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li>• Maintenance-free solution</li>
                    <li>• Enhanced property value</li>
                    <li>• Improved weather protection</li>
                    <li>• Clean, professional appearance</li>
                    <li>• Energy efficiency improvements</li>
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
              Ready to Upgrade Your Fascias & Soffits?
            </h2>
            <p className="text-xl mb-8">
              Get a free, no-obligation quote for professional fascias and soffits installation. 
              Protect your home with our expert service and quality materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Fascias & Soffits Service"
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