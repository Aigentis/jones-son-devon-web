import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Our terms and conditions for roofing and property maintenance services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services</h2>
            <p className="text-gray-700 mb-6">
              Jones & Son Property Maintenance provides roofing, guttering, fascias, soffits, 
              cladding, and related property maintenance services throughout North Devon and 
              surrounding areas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Quotes and Estimates</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>All quotes are provided free of charge and are valid for 30 days</li>
              <li>Quotes are estimates based on initial assessment and may vary if additional work is discovered</li>
              <li>Final pricing will be confirmed before any additional work begins</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Payment terms will be agreed upon before work commences</li>
              <li>For larger projects, staged payments may be required</li>
              <li>Final payment is due upon completion and your satisfaction with the work</li>
              <li>We accept cash, bank transfer, and card payments</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Warranties and Guarantees</h2>
            <p className="text-gray-700 mb-6">
              We provide warranties on our workmanship and materials:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Workmanship guarantee: 12 months from completion date</li>
              <li>Material warranties as provided by manufacturers</li>
              <li>We will return to address any issues covered under warranty at no charge</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Insurance and Liability</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>We carry full public liability insurance</li>
              <li>All work is covered by appropriate trade insurance</li>
              <li>Insurance certificates available upon request</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Health and Safety</h2>
            <p className="text-gray-700 mb-8">
              We adhere to all relevant health and safety regulations. We will take reasonable 
              precautions to protect your property and ensure safe working conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Weather and Delays</h2>
            <p className="text-gray-700 mb-8">
              Work may be delayed due to adverse weather conditions. We will communicate any 
              delays and reschedule work as soon as conditions permit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation Policy</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>You may cancel services with 24 hours notice without charge</li>
              <li>Cancellations with less notice may incur charges for materials already ordered</li>
              <li>We reserve the right to cancel services due to safety concerns or non-payment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 mb-8">
              Any disputes will be handled professionally and promptly. We are committed to 
              customer satisfaction and will work to resolve any issues fairly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms or our services:
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

export default Terms;