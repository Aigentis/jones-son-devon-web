import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuotePopup } from "@/components/ui/QuotePopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";
import bidefordHero from "@/assets/bideford-hero.jpg";

export default function Bideford() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: `url(${bidefordHero})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6">
              Trusted Roofing & Exterior Services in
              <span className="block text-orange-400 mt-2">Bideford</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Hello Bideford! As a local company with over 20 years of experience, Jones & Son Roofing is your go-to provider for all roofing and exterior services. We are dedicated to delivering professional, high-quality workmanship to the Bideford community, ensuring your home is well-protected against the elements that come with living near the River Torridge and the coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup
                location="Bideford"
                trigger={
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 h-auto">
                    Get Free Quote
                  </Button>
                }
              />
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 h-auto">
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Bideford</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "Durable UPVC fascias and soffits that protect your roofline and give your home a fresh, clean look."
                },
                {
                  title: "Guttering",
                  description: "Reliable guttering installation and repair services designed to prevent water damage to your property's foundation."
                },
                {
                  title: "Cladding",
                  description: "Professional exterior cladding that improves insulation and transforms your home's aesthetic with a modern, protective finish."
                },
                {
                  title: "Dry Verge",
                  description: "A secure, maintenance-free solution that protects your roof's verges from wind uplift and pests without the need for mortar."
                },
                {
                  title: "Flat Roofs",
                  description: "Expert installation and repair using durable materials like GRP and EPDM, ensuring a watertight and long-lasting result."
                },
                {
                  title: "Roof Cleaning",
                  description: "Safe and gentle cleaning services that remove damaging moss and lichen, restoring your roof's appearance and lifespan."
                },
                {
                  title: "Property Maintenance",
                  description: "Comprehensive services for general home upkeep, from exterior painting to minor repairs, all handled by a trusted local team."
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
              Contact your local Bideford experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup 
                location="Bideford"
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