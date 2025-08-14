import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";

export default function Braunton() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Braunton's Local Experts for Roofing & Home Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hello Braunton! As your trusted local experts with over 20 years of experience, Jones & Son Roofing is dedicated to providing the highest quality roofing and home maintenance services to the community. We understand the unique needs of properties in Braunton, from the village centre to the homes near the dunes, and offer durable solutions designed to withstand both coastal and inland conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Braunton"
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
              We are committed to quality and stand behind our work. That's why we offer a 10-year warranty on all roofing work and a full workmanship guarantee on every service we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Braunton</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "High-quality UPVC installations that provide a clean, modern finish and protect your roofline from the elements."
                },
                {
                  title: "Guttering",
                  description: "Professional guttering systems that effectively manage rainfall, a crucial defense for homes in an area exposed to both coastal and rural weather."
                },
                {
                  title: "Cladding",
                  description: "Durable and stylish exterior cladding that enhances your home's aesthetic and provides an extra layer of insulation."
                },
                {
                  title: "Dry Verge",
                  description: "A maintenance-free, interlocking system that securely holds your roof tiles in place, offering superior protection against wind uplift."
                },
                {
                  title: "Flat Roofs",
                  description: "Expert installation and repair of flat roofs for garages and extensions using high-performance, watertight materials."
                },
                {
                  title: "Roof Cleaning",
                  description: "Gentle and safe moss and algae removal that rejuvenates your roof's appearance without causing damage."
                },
                {
                  title: "Property Maintenance",
                  description: "A wide range of services for general home upkeep, from exterior painting to minor repairs, all handled by our professional team."
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
              Contact your local Braunton experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="Braunton"
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