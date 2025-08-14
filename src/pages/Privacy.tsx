import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you request a quote, 
              contact us for services, or sign up for our newsletter. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Name and contact information (email, phone, address)</li>
              <li>Property details and service requirements</li>
              <li>Payment information for completed services</li>
              <li>Communications between you and our team</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Provide quotes and deliver our roofing and maintenance services</li>
              <li>Communicate with you about your projects and appointments</li>
              <li>Process payments and maintain records</li>
              <li>Improve our services and customer experience</li>
              <li>Send you updates about our services (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Service providers who assist us in operating our business</li>
              <li>Legal authorities when required by law</li>
              <li>Insurance companies for warranty and liability purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-8">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-8">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of marketing communications at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Jones & Son Property Maintenance</strong></p>
              <p className="text-gray-700">Phone: 01271 614 770</p>
              <p className="text-gray-700">Email: info@jonesandsonroofing.uk</p>
              <p className="text-gray-700">Address: North Devon, UK</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;