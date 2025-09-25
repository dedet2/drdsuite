import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, Phone, Building, User, MessageSquare, Download, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Contact form schema
const contactFormSchema = z.object({
  // Basic Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  title: z.string().optional(),
  
  // Inquiry Details
  inquiryType: z.enum([
    'consultation',
    'speaking',
    'retreat',
    'general',
    'download',
    'newsletter'
  ], {
    required_error: 'Please select an inquiry type',
  }),
  
  // Service Specific
  serviceArea: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  
  // Message
  message: z.string().min(10, 'Message must be at least 10 characters'),
  
  // Accessibility Needs
  accessibilityNeeds: z.string().optional(),
  
  // Marketing
  howDidYouHear: z.string().optional(),
  marketingConsent: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  defaultType?: 'consultation' | 'speaking' | 'retreat' | 'general' | 'download' | 'newsletter';
  defaultService?: string;
  triggerText: string;
  triggerVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive';
  triggerSize?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  context?: string; // Add context for unique test IDs
}

const inquiryTypeLabels = {
  consultation: 'Strategic Consultation',
  speaking: 'Speaking Engagement',
  retreat: 'Executive Retreat',
  general: 'General Inquiry',
  download: 'Resource Download',
  newsletter: 'Newsletter Signup'
};

const serviceAreas = [
  'AI Governance & Risk Management',
  'Product Inclusion Strategy',
  'Accessibility Implementation',
  'Executive Advisory',
  'Team Training & Workshops',
  'Policy Development',
  'Compliance Strategy',
  'Speaking & Keynotes'
];

const timelines = [
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Not sure yet'
];

const budgetRanges = [
  'Under $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000+',
  'Prefer to discuss'
];

const hearAboutUs = [
  'TEDx Talk',
  'LinkedIn',
  'Conference/Event',
  'Referral',
  'Google Search',
  'Industry Publication',
  'Other'
];

export default function ContactForm({ 
  defaultType = 'consultation',
  defaultService,
  triggerText,
  triggerVariant = 'default',
  triggerSize = 'default',
  className = '',
  icon: Icon,
  description,
  context
}: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      title: '',
      inquiryType: defaultType,
      serviceArea: defaultService || '',
      timeline: '',
      budget: '',
      message: '',
      accessibilityNeeds: '',
      howDidYouHear: '',
      marketingConsent: false,
    },
  });

  const watchInquiryType = form.watch('inquiryType');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      form.reset();
      setOpen(false);
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant} 
          size={triggerSize}
          className={className}
          data-testid={`button-contact-form-${defaultType}${context ? `-${context}` : ''}`}
        >
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {triggerText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {watchInquiryType === 'consultation' && <Calendar className="w-5 h-5 text-primary" />}
            {watchInquiryType === 'speaking' && <MessageSquare className="w-5 h-5 text-primary" />}
            {watchInquiryType === 'retreat' && <Building className="w-5 h-5 text-primary" />}
            {watchInquiryType === 'general' && <Mail className="w-5 h-5 text-primary" />}
            {watchInquiryType === 'download' && <Download className="w-5 h-5 text-primary" />}
            {watchInquiryType === 'newsletter' && <User className="w-5 h-5 text-primary" />}
            Get In Touch
          </DialogTitle>
          <DialogDescription>
            {description || `Submit your ${inquiryTypeLabels[watchInquiryType].toLowerCase()} request and we'll respond within 24 hours.`}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Inquiry Type */}
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Inquiry</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(inquiryTypeLabels).map(([key, label]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} data-testid="input-full-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@company.com" type="email" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Optional" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company/Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Optional" {...field} data-testid="input-company" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} data-testid="input-title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service-Specific Fields */}
            {(watchInquiryType === 'consultation' || watchInquiryType === 'speaking') && (
              <>
                <FormField
                  control={form.control}
                  name="serviceArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Area of Interest</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service-area">
                            <SelectValue placeholder="Select service area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceAreas.map((area) => (
                            <SelectItem key={area} value={area}>{area}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {watchInquiryType === 'consultation' && (
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-budget">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </>
            )}

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {watchInquiryType === 'consultation' ? 'Project Details *' : 
                     watchInquiryType === 'speaking' ? 'Event Details *' : 
                     watchInquiryType === 'retreat' ? 'Application Details *' : 
                     'Message *'}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={
                        watchInquiryType === 'consultation' ? 'Tell us about your project, goals, and challenges...' :
                        watchInquiryType === 'speaking' ? 'Event details, audience, topic preferences...' :
                        watchInquiryType === 'retreat' ? 'Why are you interested in the executive retreat program?' :
                        'How can we help you?'
                      }
                      rows={4}
                      {...field}
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Accessibility Needs */}
            <FormField
              control={form.control}
              name="accessibilityNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accessibility Needs</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any accessibility accommodations or considerations we should know about?"
                      rows={2}
                      {...field}
                      data-testid="textarea-accessibility"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* How did you hear about us */}
            <FormField
              control={form.control}
              name="howDidYouHear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-referral-source">
                        <SelectValue placeholder="Optional" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {hearAboutUs.map((source) => (
                        <SelectItem key={source} value={source}>{source}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                data-testid="button-cancel-form"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                data-testid="button-submit-form"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}