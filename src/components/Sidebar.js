import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaCertificate,
  FaUsers,
  FaBlog,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";

const nav = [
  { label: "HOME", href: "#home", icon: <FaHome /> },
  { label: "ABOUT", href: "#about", icon: <FaUser /> },
  { label: "EXPERTISE", href: "#expertise", icon: <FaUser /> },
  { label: "TOOLS", href: "#tools", icon: <FaTools /> },
  { label: "EXPERIENCE", href: "#experience", icon: <FaBriefcase /> },
  { label: "PROJECTS", href: "#projects", icon: <FaProjectDiagram /> },
  { label: "EDUCATION", href: "#education", icon: <FaGraduationCap /> },
  { label: "CERTIFICATIONS", href: "#certifications", icon: <FaCertificate /> },
  { label: "LEADERSHIP", href: "#leadership", icon: <FaUsers /> },
  { label: "BLOG", href: "#blog", icon: <FaBlog /> },
  { label: "CONTACT", href: "#contact", icon: <FaPhoneAlt /> },
];

export default function Sidebar({ onCollapseChange }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const widthClass = collapsed ? "w-[84px]" : "w-64";

  const toggleCollapsed = () => {
    const next = !collapsed;
    setCollapsed(next);
    onCollapseChange?.(next);
  };

  const SidebarContent = (
    <div
      className={[
        "h-full flex flex-col",
        "glass border-r border-blue-500/20",
        widthClass,
        "transition-all duration-300",
      ].join(" ")}
    >
      {/* Header */}
      <div className="px-5 py-5">
        <div className="text-xl font-bold text-blue-700 dark:text-blue-200">
          {!collapsed ? "Maghnaa.dev" : "M."}
        </div>
        {!collapsed && (
          <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">
            Cybersecurity • SOC • VAPT
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="px-3 flex-1 space-y-1">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpenMobile(false)}
            className={[
              "flex items-center gap-3 px-3 py-3 rounded-lg",
              "text-slate-800 dark:text-slate-200",
              "hover:bg-blue-500/10 transition",
            ].join(" ")}
            title={collapsed ? item.label : ""}
          >
            <span className="text-blue-600 dark:text-blue-300">{item.icon}</span>
            {!collapsed && <span className="text-sm font-semibold tracking-wide">{item.label}</span>}
          </a>
        ))}
      </nav>

      {/* Footer actions */}
      <div className="px-4 pb-5 pt-3 border-t border-blue-500/15">
        <button
          onClick={toggleTheme}
          className={[
            "w-full flex items-center justify-between gap-3 px-3 py-3 rounded-lg",
            "bg-white/40 dark:bg-black/30 border border-blue-500/15",
            "text-slate-800 dark:text-slate-200",
            "hover:bg-blue-500/10 transition",
          ].join(" ")}
        >
          {!collapsed ? <span className="text-sm font-semibold">Theme</span> : <span className="text-sm">🌓</span>}
          <span className="text-xs opacity-80">{theme === "dark" ? "Dark" : "Light"}</span>
        </button>

        {/* Collapse button (desktop only) */}
        <button
          onClick={toggleCollapsed}
          className={[
            "hidden md:flex mt-3 w-full items-center justify-center gap-2 px-3 py-3 rounded-lg",
            "border border-blue-500/15 hover:bg-blue-500/10 transition",
            "text-slate-800 dark:text-slate-200",
          ].join(" ")}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          {!collapsed && <span className="text-sm font-semibold">Collapse</span>}
        </button>

        {!collapsed && (
          <div className="mt-4 text-xs text-slate-600 dark:text-slate-400">
            © 2026 Maghnaa Sathish Kumar
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-3 left-3 z-50">
        <button
          onClick={() => setOpenMobile(true)}
          className="glass border border-blue-500/20 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
        >
          <FaBars />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-screen z-40">
        {SidebarContent}
      </aside>

      {/* Mobile overlay */}
      {openMobile && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenMobile(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72">
            <div className="relative h-full">
              <button
                onClick={() => setOpenMobile(false)}
                className="absolute top-4 right-4 z-10 glass border border-blue-500/20 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
              >
                <FaTimes />
              </button>
              {SidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}