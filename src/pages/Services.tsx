import AnimatedPage from "../components/AnimatedPage";
import { Activity, Apple, Brain, Stethoscope, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Physiotherapy",
      icon: Activity,
      iconClass: "text-blue-600",
      bgClass: "bg-blue-100",
      desc: "Individual morning sessions and group afternoon walking to build endurance safely."
    },
    {
      title: "Respiratory Care",
      icon: Stethoscope,
      iconClass: "text-teal-600",
      bgClass: "bg-teal-100",
      desc: "Monitoring lung function and titrating oxygen requirements during your stay."
    },
    {
      title: "OT Workshops",
      icon: Briefcase,
      iconClass: "text-amber-600",
      bgClass: "bg-amber-100",
      desc: "Learning energy conservation techniques for daily activities."
    },
    {
      title: "Nutritional Support",
      icon: Apple,
      iconClass: "text-green-600",
      bgClass: "bg-green-100",
      desc: "Dietitian referrals and education sessions on healthy eating."
    },
    {
      title: "Psychological Help",
      icon: Brain,
      iconClass: "text-purple-600",
      bgClass: "bg-purple-100",
      desc: "Individual counseling to help cope with anxiety or stress."
    }
  ];

  return (
    <AnimatedPage className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Services</h1>
        <p className="mt-2 text-sm text-gray-600">
          Our dedicated team addresses every aspect of your lung health.
        </p>
      </div>

      <div className="space-y-6">
        {services.map((service) => (
          <section key={service.title} className="bg-white/70 backdrop-blur-md p-4 rounded-[2rem] border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1.25rem] ${service.bgClass} shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_4px_10px_rgba(0,0,0,0.05)] border border-white`}>
                <service.icon className={`h-6 w-6 ${service.iconClass} drop-shadow-sm`} />
              </div>
              <h2 className="text-base font-bold text-gray-900">{service.title}</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </section>
        ))}

        <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-base font-bold text-gray-900">Education Sessions</h3>
          <p className="mt-1.5 text-xs text-gray-600">
            Mandatory learning blocks for all attendees.
          </p>
          <ul className="mt-4 flex gap-4">
            <li className="flex items-center text-sm text-gray-800 font-medium bg-white px-3 py-1.5 rounded-xl border border-white shadow-[0_4px_10px_rgb(0,0,0,0.03)]">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              Tue PM
            </li>
            <li className="flex items-center text-sm text-gray-800 font-medium bg-white px-3 py-1.5 rounded-xl border border-white shadow-[0_4px_10px_rgb(0,0,0,0.03)]">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              Thu PM
            </li>
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );
}
