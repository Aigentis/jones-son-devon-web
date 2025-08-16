
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every project completed to the highest standards using premium materials and proven techniques."
    },
    {
      icon: Users,
      title: "Family Values",
      description: "As a family business, we treat every customer like family, building lasting relationships in our community."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual, professional service with clear communication throughout every project timeline."
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Fully insured with comprehensive guarantees - your investment is protected for years to come."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About <span className="text-orange-400">Jones & Son</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted North Devon roofing specialists. Family-run business 
                with over 20 years of experience serving our local community.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call 01271 614 770
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/81a878dd-05b3-490f-9542-5037d45927d0.png" 
                alt="Jones & Son Property Maintenance van" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Jones & Son Property Maintenance was founded over two decades ago with a simple mission: 
                to provide North Devon with honest, reliable roofing and property maintenance services 
                that homeowners can trust.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Starting as a small family operation, we've grown through word-of-mouth recommendations 
                and a commitment to quality that has never wavered. Every project, from a simple gutter 
                clean to a complete roof replacement, receives the same attention to detail and 
                professional care.
              </p>
              <p className="text-lg leading-relaxed">
                Based in the heart of North Devon, we understand the unique challenges that our local 
                climate presents. Our experience with coastal weather conditions, combined with our 
                use of premium materials, ensures that every job we complete stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from our first conversation 
              to the completion of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Jones & Son?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">20+</div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <p className="text-xl">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <p className="text-xl">Guarantee on Work</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            When you choose Jones & Son, you're choosing a local business that cares about 
            quality, reliability, and customer satisfaction above all else.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
