import AnimatedPage from "../components/AnimatedPage";
import { Link } from "react-router-dom";
import { Activity, HeartPulse, UserCheck, Stethoscope, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <AnimatedPage className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-blue-600 px-5 py-10 shadow-md">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-cebb47acdd92?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
        <div className="relative text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
            Breathe Easier.
          </h1>
          <p className="text-sm text-blue-100 mb-6 leading-relaxed">
            Welcome to the Pulmonary Rehab Program at The Ottawa Hospital Rehabilitation Centre.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/checklist"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-sm text-center transition-transform hover:scale-[1.02]"
            >
              Admission Checklist
            </Link>
            <Link to="/services" className="text-sm font-semibold text-white flex items-center justify-center gap-1.5 py-2 hover:text-blue-200">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Features */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Holistic Care</h2>
          <p className="mt-1.5 text-sm text-gray-600">
            A structured program tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              name: 'Exercise Training',
              description: 'Physio sessions to improve fitness safely.',
              icon: Activity,
            },
            {
              name: 'Education',
              description: 'Manage symptoms and conserve energy.',
              icon: Stethoscope,
            },
            {
              name: 'Nutrition',
              description: 'Dietary support for lung health.',
              icon: HeartPulse,
            },
            {
              name: 'Psychology',
              description: 'Mental health and emotional counseling.',
              icon: UserCheck,
            },
          ].map((feature) => (
            <div key={feature.name} className="flex gap-4 rounded-[2rem] border-2 border-white bg-white/70 backdrop-blur-md p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-blue-50 to-blue-100 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_4px_10px_rgba(0,0,0,0.05)] border border-blue-50">
                <feature.icon className="h-6 w-6 text-blue-600 drop-shadow-sm" aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-bold text-gray-900">
                  {feature.name}
                </h3>
                <p className="text-xs mt-0.5 text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-blue-600 rounded-3xl p-6 text-white shadow-md">
        <h2 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">Patient Success</h2>
        <div className="flex flex-col gap-4">
          <div>
            <blockquote className="text-blue-50 text-sm italic leading-relaxed">
              "The team didn't just give me an exercise plan; they gave me my independence back."
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">M</div>
              <div>
                <div className="font-semibold text-white text-xs">Michael T.</div>
                <div className="text-xs text-blue-200">Program Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
