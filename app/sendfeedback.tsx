import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust the import path for Shadcn components
import { Button } from "@/components/ui/button";

 const ContactForm = () => {
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent("User Message");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:alexh2877@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSendEmail}>Send Message</Button>
    </div>
  );
};

export default ContactForm;
