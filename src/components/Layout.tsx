import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Stethoscope, ShieldCheck, CheckSquare, Calendar, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { LungIcon } from "./LungIcon";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Stethoscope },
  { name: "Eligibility", href: "/eligibility", icon: ShieldCheck },
  { name: "Checklist", href: "/checklist", icon: CheckSquare },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Contact & FAQ", href: "/contact", icon: Phone },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center font-sans text-gray-900">
      <div className="w-full max-w-[428px] bg-gray-50 min-h-screen flex flex-col relative shadow-2xl overflow-x-hidden">
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
          <nav className="flex items-center justify-between p-4" aria-label="Global">
             <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-xl">
                <LungIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-semibold text-base tracking-tight text-gray-900 leading-tight">
                Ottawa Lung<br/>Rehab
              </span>
            </Link>
            <button
              type="button"
              className="-m-2 p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </nav>

          {/* Mobile Overlay Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-[61px] left-0 right-0 bottom-0 min-h-[calc(100vh-61px)] bg-white z-40 p-3 overflow-y-auto shadow-inner">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 rounded-xl px-4 py-4 text-base font-medium transition-colors border",
                        isActive ? "bg-blue-50 border-blue-100 text-blue-700 shadow-sm" : "bg-white border-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-100"
                      )}
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-blue-600" : "text-gray-500")} />
                          {item.name}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        <main className="flex-1 w-full px-5 py-6">
          <Outlet />
        </main>

        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="px-6 py-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <LungIcon className="h-4 w-4 text-gray-400" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">The Rehabilitation Centre</span>
            </div>
            <p className="text-[10px] text-gray-400">
              &copy; {new Date().getFullYear()} Ottawa Pulmonary Rehabilitation.
            </p>
            <Link to="/legal" className="text-[10px] text-blue-500 hover:text-blue-600 mt-2 font-medium">
              Legal, Privacy &amp; Medical Disclaimer
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
