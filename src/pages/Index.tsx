import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Star, MapPin, Clock, Shield, Play } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
const Index = () => {
  const services = [{
    title: "Fascias & Soffits",
    description: "Professional UPVC and timber fascias & soffits installation with 10-year guarantee.",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    price: "From £150/m"
  }, {
    title: "Guttering",
    description: "Complete guttering solutions including repairs, cleaning, and replacements.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    price: "From £80/m"
  }, {
    title: "UPVC Cladding",
    description: "Modern cladding solutions for enhanced property protection and appearance.",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    price: "From £45/m²"
  }, {
    title: "Flat Roofing",
    description: "Specialist flat roofing using EPDM rubber and modern weatherproof materials.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    price: "From £85/m²"
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    location: "Barnstaple",
    rating: 5,
    text: "Excellent service from Jones & Son. Professional, reliable and great value. Highly recommended!"
  }, {
    name: "Mike Davidson",
    location: "Bideford",
    rating: 5,
    text: "Top quality work on our guttering. Clean, efficient and finished exactly when promised."
  }, {
    name: "Emma Thompson",
    location: "Ilfracombe",
    rating: 5,
    text: "Very pleased with our new fascias and soffits. The team was courteous and professional throughout."
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/b08eef82-716b-4a9b-8c9c-698cd5876ed4.png')`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  North Devon's Trusted
                  <span className="block text-orange-400 mt-2">Roofing & Property Specialists</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Family-run business serving North Devon for over 10 years. 
                  Professional property maintenance with a 10-year guarantee on all work.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 01271 614 770
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg px-8 py-4 h-auto">
                  Get Free Quote
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm">
                <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  <span className="text-white">10-Year Guarantee</span>
                </div>
                <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  <span className="text-white">Fully Insured</span>
                </div>
                <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  <span className="text-white">Free Quotes</span>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative">
                {/* Video Placeholder */}
                <div className="relative bg-black bg-opacity-20 rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto aspect-video flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-30">
                  <div className="text-center text-white">
                    <div className="inline-flex p-4 bg-orange-500 rounded-full mb-4 hover:bg-orange-600 transition-colors cursor-pointer">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Watch Our Story</p>
                    <p className="text-sm text-gray-300">Click to add your video</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive property maintenance solutions across North Devon. 
              All work comes with our 10-year guarantee and full insurance coverage.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full group-hover:bg-orange-50 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-orange-600 font-bold text-lg">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Jones & Son?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-orange-100 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years Experience</h3>
                    <p className="text-gray-600 leading-relaxed">Serving North Devon with professional roofing and property maintenance services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-orange-100 rounded-full mt-1">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Year Guarantee</h3>
                    <p className="text-gray-600 leading-relaxed">All our work comes with a comprehensive 10-year guarantee for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-orange-100 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Family Business</h3>
                    <p className="text-gray-600 leading-relaxed">Family-run business covering a 60-mile radius from Barnstaple across North Devon.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 lg:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-white bg-opacity-20 rounded-full mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Emergency Call-Outs</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">Available for urgent roofing repairs across North Devon</p>
                  <Button variant="outline" className="border-2 border-white hover:bg-white font-semibold text-blue-600">
                    Call 01271 614 770
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6 lg:p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-xl">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-white bg-opacity-20 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Free Quotes</h3>
                  <p className="text-orange-100 mb-6 leading-relaxed">No-obligation surveys and estimates for all services</p>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                    Get Your Quote
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6 lg:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />)}
                  </div>
                  <p className="text-gray-700 italic text-center leading-relaxed">"{testimonial.text}"</p>
                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </div>;
};
export default Index;