import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";

export default function GreatTorrington() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Great Torrington's Local Roofing & Property Maintenance Professionals
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              With over 20 years of experience, Jones & Son is your local expert for all roofing and property maintenance needs. We are proud to serve the Great Torrington community and are committed to providing the highest quality workmanship to keep your home in top condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Great Torrington"
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

      {/* Guarantee Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Quality Guarantee</h2>
            <p className="text-lg">
              We stand by the quality of our work. All our roofing work is backed by a 10-year warranty, 
              and every project we complete is supported by our full workmanship guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Great Torrington</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "Durable UPVC installations that protect your roofline and provide a clean, long-lasting finish for your home."
                },
                {
                  title: "Guttering",
                  description: "Reliable guttering systems that effectively manage rainfall and protect your property from water damage."
                },
                {
                  title: "Cladding",
                  description: "High-quality exterior cladding that enhances your home's appearance, improves insulation, and provides a durable protective layer."
                },
                {
                  title: "Dry Verge",
                  description: "A secure, maintenance-free solution that protects your roof's verges from wind uplift and replaces old, damaged mortar."
                },
                {
                  title: "Flat Roofs",
                  description: "Expert installation and repair for garages and extensions using high-performance, watertight materials."
                },
                {
                  title: "Roof Cleaning",
                  description: "Gentle and safe moss and algae removal that restores your roof's appearance without causing damage to your tiles."
                }
              ].map((service, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact your local Great Torrington experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Great Torrington"
                trigger={
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Contact Us Today
                  </Button>
                }
              />
              <Button variant="outline" size="lg">
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