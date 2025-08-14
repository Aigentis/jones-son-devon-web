import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactPopupProps {
  trigger: React.ReactNode;
  location?: string;
}

export const ContactPopup = ({ trigger, location }: ContactPopupProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = location ? `Quick Message from ${location}` : "Quick Message";
    const body = `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const emailUrl = `mailto:info@jonesandsonroofing.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = emailUrl;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    setOpen(false);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            Quick Contact
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
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
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={3}
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            This will open your email client with the message pre-filled to send to info@jonesandsonroofing.uk
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};