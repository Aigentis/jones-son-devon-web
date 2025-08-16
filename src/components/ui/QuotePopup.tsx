import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UnifiedQuotePopupProps {
  trigger: React.ReactNode;
  location?: string;
  service?: string;
}

export const QuotePopup = ({ trigger, location, service }: UnifiedQuotePopupProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedArea, setSelectedArea] = useState(location || "");
  const [selectedService, setSelectedService] = useState(service || "");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const areas = [
    "Barnstaple",
    "Bideford", 
    "Braunton",
    "Fremington",
    "Great Torrington",
    "Ilfracombe",
    "South Molton",
    "Other North Devon Area"
  ];

  const services = [
    "Fascias & Soffits",
    "Guttering", 
    "Cladding",
    "Dry Verge",
    "Flat Roofs",
    "Roof Cleaning",
    "Property Maintenance",
    "General Roofing Query"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !selectedArea) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone number, and area are required.",
        variant: "destructive"
      });
      return;
    }
    
    const subject = selectedService ? `Quote Request - ${selectedService}` : "Free Quote Request";
    let body = `Name: ${name}\nPhone: ${phone}\nArea: ${selectedArea}`;
    
    if (selectedService) {
      body += `\nService Required: ${selectedService}`;
    }
    
    if (message) {
      body += `\n\nMessage:\n${message}`;
    }
    
    body += `\n\nPlease provide a free quote for my roofing needs.`;
    
    const emailUrl = `mailto:info@jonesandsonroofing.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = emailUrl;
    
    toast({
      title: "Quote request sent!",
      description: "We'll be in touch within 30 minutes during business hours.",
    });
    
    setOpen(false);
    setName("");
    setPhone("");
    setSelectedArea("");
    setSelectedService("");
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 -m-6 mb-4 rounded-t-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-blue-200" />
            <span className="font-semibold">Quick Response Guarantee</span>
          </div>
          <p className="text-center text-blue-100">
            We'll be in touch within the next 30 minutes during business hours
          </p>
        </div>

        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600" />
            Get Your Free Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Your phone number"
              type="tel"
            />
          </div>
          
          <div>
            <Label htmlFor="area">Area *</Label>
            <Select value={selectedArea} onValueChange={setSelectedArea} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {areas.map((areaOption) => (
                  <SelectItem key={areaOption} value={areaOption}>
                    {areaOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="service">Service Required</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Select service (optional)" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {services.map((serviceOption) => (
                  <SelectItem key={serviceOption} value={serviceOption}>
                    {serviceOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={3}
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            This will open your email client with your details pre-filled
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};