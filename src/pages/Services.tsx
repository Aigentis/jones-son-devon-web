import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
const Services = () => {
  const services = [{
    title: "Fascias & Soffits",
    description: "Professional installation and replacement of fascias and soffits to protect your roofline and enhance your property's appearance.",
    image: "/lovable-uploads/d1904592-63dc-47b2-bb22-d71dff0aeee9.png",
    features: ["UPVC & Timber Options", "Free Survey & Quote", "All Weather Installation", "Full Insurance Coverage"],
    price: "From £150 per linear metre"
  }, {
    title: "Guttering Services",
    description: "Complete guttering solutions including cleaning, repairs, and full replacements using high-quality materials.",
    image: "/lovable-uploads/4dc5f5f2-ed23-4d0e-b478-136d05627700.png",
    features: ["All Gutter Materials", "Leaf Guard Installation", "Downpipe Repairs", "Emergency Call-outs", "Gutter Cleaning Service"],
    price: "From £80 per linear metre"
  }, {
    title: "UPVC Cladding",
    description: "Modern cladding solutions to enhance and protect your property's exterior with low-maintenance materials.",
    image: "/lovable-uploads/7d82f95d-3d99-40b6-b550-45f02b663f91.png",
    features: ["UPVC & Composite", "Weatherproof Systems", "Low Maintenance", "Insulation Benefits", "Color Matched Trims"],
    price: "From £45 per square metre"
  }, {
    title: "Dry Verge Systems",
    description: "Secure and weatherproof dry verge systems for long-lasting roof edge protection without mortar pointing.",
    image: "/lovable-uploads/78096d46-db87-4941-b8c6-bdd89906670c.png",
    features: ["No Mortar Required", "Secure Mechanical Fixing", "Weather Resistant", "Prevents Tile Slippage", "Easy Maintenance"],
    price: "From £25 per linear metre"
  }, {
    title: "Flat Roofing",
    description: "Specialist flat roofing services using modern materials and techniques for durable, long-lasting results.",
    image: "/placeholder.svg",
    features: ["EPDM Rubber Roofing", "Traditional Felt Systems", "GRP Fibreglass", "Green Roof Options", "Roof Light Installation", "10-Year Guarantee"],
    price: "From £85 per square metre"
  }, {
    title: "Roof Cleaning",
    description: "Professional roof cleaning services to restore your roof's appearance and extend its lifespan.",
    image: "/placeholder.svg",
    features: ["Soft Washing Technique", "Moss & Algae Removal", "Gutter Clearing Included", "Biocide Treatment", "Before/After Photos"],
    price: "From £8 per square metre"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative">
          {/* Google Reviews Badge - Top Right */}
          <div className="absolute top-0 right-0 z-10">
            
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Roofing Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive property maintenance solutions across North Devon with a 10-year guarantee on all work.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Phone className="h-5 w-5 mr-2" />
            Get Free Quote: 01271 614 770
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      
                      <p className="text-sm text-gray-500">Competitive pricing</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;