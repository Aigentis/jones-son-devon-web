import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuotePopup } from "@/components/ui/QuotePopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";
import barnstapleHero from "@/assets/barnstaple-hero.jpg";

export default function Barnstaple() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: `url(${barnstapleHero})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6">
              Your Local Roofing & Property Maintenance Experts in
              <span className="block text-orange-400 mt-2">Barnstaple</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Welcome to Jones & Son Roofing, your trusted partner for all roofing and property maintenance needs in Barnstaple. With over 20 years of experience, we have proudly served countless homeowners, delivering exceptional quality and reliability. We understand the specific needs of Barnstaple properties and are committed to keeping your home protected, beautiful, and well-maintained.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup
                location="Barnstaple"
                trigger={
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 h-auto">
                    Get Free Quote
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-semibold text-lg px-8 py-4 h-auto">
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
              We offer a comprehensive range of services, all backed by our quality promise. All roofing work comes with a 10-year warranty, and every project we complete is backed by our full workmanship guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Barnstaple</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "High-quality UPVC installations that protect your roofline from water damage while dramatically improving your home's curb appeal."
                },
                {
                  title: "Guttering",
                  description: "Expert installation, repair, and cleaning services to ensure your home's foundation is protected from rainwater runoff."
                },
                {
                  title: "Cladding",
                  description: "Durable and stylish exterior cladding solutions that enhance insulation and provide a modern, protective layer for your home's exterior walls."
                },
                {
                  title: "Dry Verge",
                  description: "A maintenance-free, interlocking cap system that securely protects your roof's verge, a superior alternative to traditional mortar."
                },
                {
                  title: "Flat Roofs",
                  description: "Specialist installation and repair using advanced, watertight materials like EPDM and GRP for garages, extensions, and commercial properties."
                },
                {
                  title: "Roof Cleaning",
                  description: "Professional and safe moss, algae, and lichen removal that restores your roof's appearance and prevents long-term damage."
                },
                {
                  title: "Property Maintenance",
                  description: "A complete range of services for general upkeep, including exterior painting, brickwork repairs, and other essential tasks."
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
              Contact your local Barnstaple experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuotePopup 
                location="Barnstaple"
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