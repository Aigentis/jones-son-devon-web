import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { Phone, Mail, Shield, Award, Clock } from "lucide-react";

export default function SouthMolton() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              South Molton's Premier Roofing & Property Maintenance Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome, South Molton! With over 20 years of experience, Jones & Son Roofing is the premier choice for roofing and property maintenance in this historic market town. We are committed to delivering professional, reliable services that respect the heritage of the area while providing modern-day performance and protection for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="South Molton"
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
              We believe in the quality of our work. All our roofing work is backed by a 10-year warranty, and every project we complete is supported by our full workmanship guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in South Molton</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascias & Soffits",
                  description: "Durable UPVC replacements that protect your roofline and blend seamlessly with the traditional aesthetic of the town."
                },
                {
                  title: "Guttering",
                  description: "Reliable systems to ensure proper drainage, a crucial defense against damp and other water-related issues common in older properties."
                },
                {
                  title: "Cladding",
                  description: "Modern cladding solutions that provide improved insulation and a fresh, protective layer for your home's exterior."
                },
                {
                  title: "Dry Verge",
                  description: "A clean, secure, and long-lasting alternative to traditional mortar verges, perfect for updating your roof's finish."
                },
                {
                  title: "Flat Roofs",
                  description: "Expert installation and repair for garages and extensions using advanced, watertight materials for a lasting solution."
                },
                {
                  title: "Roof Cleaning",
                  description: "Careful and safe cleaning to preserve the integrity of your roof tiles while removing unsightly moss and lichen."
                },
                {
                  title: "Property Maintenance",
                  description: "A wide range of services for general home upkeep, ensuring your South Molton property remains in excellent condition."
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
              Contact your local South Molton experts today for a free, no-obligation quote and discover the difference our experience makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopup 
                location="South Molton"
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