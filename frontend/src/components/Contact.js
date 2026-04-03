import { useState } from "react";
import { CONTACT } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail as MailIcon, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [formRef, formVisible] = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service_interest: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "", service_interest: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const socialIcons = { facebook: Facebook, twitter: Twitter, instagram: Instagram, linkedin: Linkedin };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 lg:py-32 bg-[#FDE8EE]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            data-testid="contact-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] tracking-tight"
          >
            {CONTACT.heading}
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#333333] max-w-xl mx-auto">
            {CONTACT.subtext}
          </p>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {submitted ? (
              <div data-testid="contact-success" className="bg-white rounded-2xl p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDE8EE] mb-4">
                  <CheckCircle size={32} className="text-[#1A3C8F]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1A3C8F]">Thank You!</h3>
                <p className="mt-2 text-sm text-[#333333]">We'll get back to you shortly.</p>
                <button
                  data-testid="contact-send-another"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#1A3C8F] underline hover:no-underline transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bg-white rounded-2xl p-8 md:p-10 space-y-5 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-input-animate">
                    <label className="text-sm font-medium text-[#1A3C8F] mb-1.5 block">Name *</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      data-testid="contact-name-input"
                      className="border-[#0D2561]/10 focus-visible:ring-[#1A3C8F] bg-[#FDE8EE]/30 transition-all duration-300"
                    />
                  </div>
                  <div className="form-input-animate">
                    <label className="text-sm font-medium text-[#1A3C8F] mb-1.5 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      data-testid="contact-email-input"
                      className="border-[#0D2561]/10 focus-visible:ring-[#1A3C8F] bg-[#FDE8EE]/30 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-input-animate">
                    <label className="text-sm font-medium text-[#1A3C8F] mb-1.5 block">Phone</label>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      data-testid="contact-phone-input"
                      className="border-[#0D2561]/10 focus-visible:ring-[#1A3C8F] bg-[#FDE8EE]/30 transition-all duration-300"
                    />
                  </div>
                  <div className="form-input-animate">
                    <label className="text-sm font-medium text-[#1A3C8F] mb-1.5 block">Service Interest</label>
                    <Select onValueChange={(val) => setForm({ ...form, service_interest: val })}>
                      <SelectTrigger
                        data-testid="contact-service-select"
                        className="border-[#0D2561]/10 focus:ring-[#1A3C8F] bg-[#FDE8EE]/30"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT.serviceOptions.map((opt, i) => (
                          <SelectItem key={i} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="form-input-animate">
                  <label className="text-sm font-medium text-[#1A3C8F] mb-1.5 block">Message *</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    data-testid="contact-message-input"
                    className="border-[#0D2561]/10 focus-visible:ring-[#1A3C8F] bg-[#FDE8EE]/30 resize-none transition-all duration-300"
                  />
                </div>

                {error && (
                  <p data-testid="contact-error" className="text-red-500 text-sm animate-pulse">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-button"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A3C8F] text-white font-semibold text-sm btn-magnetic hover:bg-[#0D2561] hover:shadow-lg hover:shadow-[#1A3C8F]/25 disabled:opacity-50"
                >
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-8 transition-all duration-700 delay-200 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 space-y-6 transition-shadow duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 group" data-testid="contact-email-info">
                <div className="w-10 h-10 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] shrink-0 transition-all duration-300 group-hover:bg-[#1A3C8F] group-hover:text-white group-hover:shadow-md">
                  <MailIcon size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-wider mb-1">Email</div>
                  <div className="text-sm text-[#333333]">{CONTACT.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group" data-testid="contact-phone-info">
                <div className="w-10 h-10 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] shrink-0 transition-all duration-300 group-hover:bg-[#1A3C8F] group-hover:text-white group-hover:shadow-md">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-sm text-[#333333]">{CONTACT.phone}</div>
                </div>
              </div>
              {CONTACT.address && (
                <div className="flex items-start gap-4 group" data-testid="contact-address-info">
                  <div className="w-10 h-10 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] shrink-0 transition-all duration-300 group-hover:bg-[#1A3C8F] group-hover:text-white group-hover:shadow-md">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-wider mb-1">Office</div>
                    <div className="text-sm text-[#333333]">{CONTACT.address}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg">
              <div className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex gap-3" data-testid="contact-social-links">
                {Object.entries(CONTACT.socialLinks).map(([key, url]) => {
                  const SocialIcon = socialIcons[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`social-link-${key}`}
                      className="social-icon w-10 h-10 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white transition-colors duration-200"
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
