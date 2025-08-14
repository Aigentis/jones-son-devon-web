
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import northDevonHero from "@/assets/north-devon-hero.jpg";

const Areas = () => {
  const primaryAreas = [
    {
      name: "Barnstaple",
      slug: "barnstaple",
      description: "Our home base - providing comprehensive roofing services throughout Barnstaple and surrounding villages.",
      distance: "0 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "Bideford",
      slug: "bideford",
      description: "Serving the historic port town of Bideford with reliable roofing and property maintenance.",
      distance: "8 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "Ilfracombe",
      slug: "ilfracombe",
      description: "Coastal roofing specialists for Ilfracombe, understanding the unique challenges of seaside properties.",
      distance: "12 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "Braunton",
      slug: "braunton", 
      description: "Quality roofing services for Braunton and the surrounding rural communities.",
      distance: "6 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "South Molton",
      slug: "south-molton",
      description: "Premier roofing and property maintenance in this historic market town.",
      distance: "14 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "Great Torrington",
      slug: "great-torrington",
      description: "Trusted roofing and home care professionals for Great Torrington.",
      distance: "16 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    },
    {
      name: "Fremington",
      slug: "fremington",
      description: "Local roofing and property maintenance professionals for Fremington.",
      distance: "4 miles",
      services: ["Fascias & Soffits", "Guttering", "Cladding", "Dry Verge", "Flat Roofs", "Roof Cleaning", "Property Maintenance"]
    }
  ];

  const additionalAreas = [
    "Woolacombe", "Croyde", "Westward Ho!", "Appledore", "Instow", "Lynton", "Lynmouth", 
    "Combe Martin", "Mortehoe", "Lee", "Georgeham", "Saunton", "Umberleigh", "Kings Nympton",
    "Chulmleigh", "Winkleigh", "Atherington", "High Bickington", "Roborough"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${northDevonHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow-lg">
            Areas We Cover
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-shadow">
            Proudly serving North Devon and surrounding areas with professional 
            roofing and property maintenance services.
          </p>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>60-Mile Radius</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              <span>Fast Response Times</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our main coverage areas where we provide full services with the fastest response times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {primaryAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-2xl text-blue-600">
                    <span>{area.name}</span>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {area.distance}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Available Services:</h4>
                    <ul className="space-y-1">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <Link to={`/areas/${area.slug}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More About {area.name}
                      </Button>
                    </Link>
                    <ContactPopup 
                      location={area.name}
                      trigger={
                        <Button variant="outline" className="w-full">
                          Get Quote for {area.name}
                        </Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also provide services to these locations and many more across North Devon and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-blue-600 text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="text-lg text-blue-100 mb-6">
              We regularly travel throughout Devon and beyond. Contact us to check if we can help with your project.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Call 01271 614 770
            </Button>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Response Times</h3>
                <p className="text-gray-600">
                  Emergency calls responded to within 2 hours for primary areas, 
                  24 hours for extended coverage areas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Travel Policy</h3>
                <p className="text-gray-600">
                  No call-out charges within 20 miles of Barnstaple. 
                  Reasonable travel costs may apply for distant locations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Free Quotes</h3>
                <p className="text-gray-600">
                  Free, no-obligation quotes available for all areas we serve. 
                  Site surveys arranged at your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Areas;
