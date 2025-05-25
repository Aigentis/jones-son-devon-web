
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Star, MapPin, Clock, Shield } from "lucide-react";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const services = [
    {
      title: "Fascias & Soffits",
      description: "Professional UPVC and timber fascias & soffits installation with 10-year guarantee.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      price: "From £150/m"
    },
    {
      title: "Guttering",
      description: "Complete guttering solutions including repairs, cleaning, and replacements.",
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      price: "From £80/m"
    },
    {
      title: "UPVC Cladding", 
      description: "Modern cladding solutions for enhanced property protection and appearance.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      price: "From £45/m²"
    },
    {
      title: "Flat Roofing",
      description: "Specialist flat roofing using EPDM rubber and modern weatherproof materials.",
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      price: "From £85/m²"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Barnstaple",
      rating: 5,
      text: "Excellent service from Jones & Son. Professional, reliable and great value. Highly recommended!"
    },
    {
      name: "Mike Davidson", 
      location: "Bideford",
      rating: 5,
      text: "Top quality work on our guttering. Clean, efficient and finished exactly when promised."
    },
    {
      name: "Emma Thompson",
      location: "Ilfracombe", 
      rating: 5,
      text: "Very pleased with our new fascias and soffits. The team was courteous and professional throughout."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                North Devon's Trusted
                <span className="block text-yellow-400">Roofing Specialists</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Family-run business serving North Devon for over 10 years. 
                Professional property maintenance with a 10-year guarantee on all work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 01271 614 770
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Get Free Quote
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>10-Year Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>Free Quotes</span>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="/lovable-uploads/3535d1c2-0265-4157-a4c3-17752daa5844.png" 
                alt="Jones & Son Property Maintenance Team"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive property maintenance solutions across North Devon. 
              All work comes with our 10-year guarantee and full insurance coverage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Jones & Son?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years Experience</h3>
                    <p className="text-gray-600">Serving North Devon with professional roofing and property maintenance services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Year Guarantee</h3>
                    <p className="text-gray-600">All our work comes with a comprehensive 10-year guarantee for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Family Business</h3>
                    <p className="text-gray-600">Family-run business covering a 60-mile radius from Barnstaple across North Devon.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="p-6 bg-blue-600 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Emergency Call-Outs</h3>
                  <p className="text-blue-100 mb-4">Available for urgent roofing repairs</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Call 01271 614 770
                  </Button>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Quotes</h3>
                  <p className="text-gray-600 mb-4">No-obligation surveys and estimates</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Your Quote
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
