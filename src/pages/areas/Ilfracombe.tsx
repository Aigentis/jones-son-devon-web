import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";

export default function Ilfracombe() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Ilfracombe Roofing & Exterior Specialists
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Jones & Son Roofing, the trusted roofing and exterior specialists for Ilfracombe. With over 20 years of experience, we have a deep understanding of the challenges that coastal properties face. Our services are specifically designed to provide durable, weather-resistant solutions that protect your home from the sea air and high winds, all while enhancing its curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Ilfracombe"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Ilfracombe</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "Weather-resistant UPVC installations that are specifically chosen to withstand coastal conditions and protect your roofline."
                },
                {
                  title: "Guttering",
                  description: "High-performance guttering systems to effectively manage heavy coastal rainfall and prevent water damage."
                },
                {
                  title: "Cladding",
                  description: "Durable exterior cladding that provides an essential layer of protection and improves insulation for properties exposed to the elements."
                },
                {
                  title: "Dry Verge",
                  description: "A secure, wind-resistant dry verge system that protects your roof from uplift, a perfect solution for coastal properties."
                },
                {
                  title: "Flat Roofs",
                  description: "Expert installation and repair using robust materials that are proven to be watertight and long-lasting in a coastal environment."
                },
                {
                  title: "Roof Cleaning",
                  description: "Specialized cleaning to safely remove moss and algae that are common in coastal and damp conditions, extending your roof's life."
                },
                {
                  title: "Property Maintenance",
                  description: "A full range of services for general home upkeep, ensuring your property is cared for and looks its best year-round."
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
              Contact your local Ilfracombe experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Ilfracombe"
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