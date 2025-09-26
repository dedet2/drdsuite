import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-serif mb-6">
            Contact
          </h1>
          <ContactForm 
            triggerText="Contact"
            triggerVariant="default"
            triggerSize="lg"
            description="Send a message"
            context="contact-page"
          />
        </div>
      </div>
    </div>
  );
}