import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubmitInquiry } from '../hooks/useQueries';
import type { Inquiry } from '../backend';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const subjectValue = watch('subject');

  const onSubmit = (data: FormData) => {
    const inquiry: Inquiry = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    submitInquiry(inquiry, {
      onSuccess: () => {
        toast.success('Inquiry submitted successfully!', {
          description: 'Our team will get back to you within 24 hours.',
          icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
        });
        reset();
      },
      onError: () => {
        toast.error('Failed to submit inquiry', {
          description: 'Please try again or contact us directly.',
        });
      },
    });
  };

  const inputClass = "bg-charcoal-light border-steel text-foreground placeholder:text-muted-foreground focus:border-amber focus:ring-amber/20 rounded-sm h-11";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">Get in Touch</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-foreground mb-4 amber-underline">
              CONTACT US
            </h2>
            <p className="text-muted-foreground mt-6 mb-10 leading-relaxed">
              Whether you're looking to purchase a vehicle, need service support, or want to
              explore dealership opportunities — our team is ready to assist you.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              {[
                {
                  label: 'Sales Enquiries',
                  value: '+91 1800-XXX-XXXX',
                  sub: 'Mon–Sat, 9AM–6PM IST',
                },
                {
                  label: 'Service Support',
                  value: '+91 1800-XXX-YYYY',
                  sub: '24/7 Roadside Assistance',
                },
                {
                  label: 'Corporate Office',
                  value: 'Ropar, Punjab, India',
                  sub: 'SML Isuzu Limited',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-charcoal-light border border-steel rounded-sm hover:border-amber/30 transition-colors">
                  <div className="w-1 h-full min-h-[40px] bg-amber rounded-full flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-amber uppercase tracking-wide">{item.label}</span>
                    <p className="text-foreground font-semibold mt-0.5">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-charcoal-light border border-steel rounded-sm p-8">
            <h3 className="font-display text-2xl font-700 text-foreground mb-6">Send an Inquiry</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                  Full Name <span className="text-amber">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className={inputClass}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                    Email <span className="text-amber">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone <span className="text-amber">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                    {...register('phone', { required: 'Phone is required' })}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <Label className="text-sm font-medium text-foreground mb-1.5 block">
                  Subject <span className="text-amber">*</span>
                </Label>
                <Select
                  value={subjectValue}
                  onValueChange={(val) => setValue('subject', val, { shouldValidate: true })}
                >
                  <SelectTrigger className={`${inputClass} w-full`}>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-charcoal-light border-steel">
                    <SelectItem value="Sales" className="text-foreground hover:text-amber focus:text-amber">Sales</SelectItem>
                    <SelectItem value="Service" className="text-foreground hover:text-amber focus:text-amber">Service</SelectItem>
                    <SelectItem value="Dealership" className="text-foreground hover:text-amber focus:text-amber">Dealership</SelectItem>
                    <SelectItem value="Other" className="text-foreground hover:text-amber focus:text-amber">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  {...register('subject', { required: 'Please select a subject' })}
                />
                {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                  Message <span className="text-amber">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  className="bg-charcoal-light border-steel text-foreground placeholder:text-muted-foreground focus:border-amber focus:ring-amber/20 rounded-sm resize-none"
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                />
                {errors.message && <p className={errorClass}>{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-amber text-charcoal-deep font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-amber-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
