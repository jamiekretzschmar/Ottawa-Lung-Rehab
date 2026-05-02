import AnimatedPage from "../components/AnimatedPage";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "Where can I find parking?",
    answer: "Parking is available in the main visitor lots surrounding The Rehabilitation Centre. You may purchase a daily pass or a multi-day pass at the payment kiosks located in the lobby."
  },
  {
    question: "What are the visiting hours?",
    answer: "General visiting hours are from 11:00 AM to 8:00 PM daily. We encourage visitors, but we ask them to coordinate with your therapy schedule."
  },
  {
    question: "Can I bring my own food?",
    answer: "Yes, you are welcome to bring your own food such as sandwiches, juice, or other snacks. The unit has a patient kitchenette equipped with a small fridge, microwave, and toaster for your convenience. Please coordinate with nursing staff if you have strict dietary needs."
  },
  {
    question: "Is WiFi available?",
    answer: "Yes, free public WiFi is available throughout The Rehabilitation Centre. Connect to the 'OttawaHospital-Guest' network."
  },
  {
    question: "Do I fast before morning therapy?",
    answer: "No, please eat breakfast for energy unless instructed for specific medical tests by a nurse."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <AnimatedPage className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact & Info</h1>
        <p className="mt-2 text-sm text-gray-600">
          Location details and FAQs for your stay.
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-5">
        <div className="flex gap-4 items-start">
          <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Location</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              The Rehabilitation Centre<br />
              505 Smyth Rd, 2nd floor<br />
              Ottawa, ON
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Phone</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Main: (613) 737-7350<br />
              Rehab Coordinator: Ext. 5xxxx
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Hours</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Inpatient: 24/7<br/>
              Cafe: Mon-Fri, 7am-3pm
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative h-48">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.4426503837947!2d-75.6534579234857!3d45.400407771073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce058aab5eeeb1%3A0x6e2fe614b78c5d26!2sThe%20Rehabilitation%20Centre!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
        />
      </div>

      {/* FAQ Section */}
      <section className="pt-2">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-4 py-3.5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-[13px] text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform shrink-0", openFaq === index ? "rotate-180" : "")} />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
