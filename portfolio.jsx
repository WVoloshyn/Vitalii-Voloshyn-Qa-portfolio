import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: "Manual Testing",
    color: "bg-blue-50 border-blue-200",
    tag: "text-blue-700 bg-blue-100",
    items: [
      "Functional Testing", "Regression Testing", "Smoke Testing",
      "Exploratory Testing", "Integration Testing", "UAT",
      "Cross-browser Testing", "Mobile Testing",
    ],
  },
  {
    category: "API & Performance",
    color: "bg-indigo-50 border-indigo-200",
    tag: "text-indigo-700 bg-indigo-100",
    items: [
      "REST API Testing", "Postman", "Playwright",
      "Cypress", "Grafana K6", "Performance Testing",
    ],
  },
  {
    category: "Tools & Platforms",
    color: "bg-slate-50 border-slate-200",
    tag: "text-slate-700 bg-slate-100",
    items: [
      "Jira", "TestRail", "Confluence",
      "BrowserStack", "LambdaTest", "SQL", "Git",
    ],
  },
  {
    category: "Methodologies",
    color: "bg-teal-50 border-teal-200",
    tag: "text-teal-700 bg-teal-100",
    items: ["Agile", "Scrum", "STLC", "SDLC", "Test Planning", "Bug Reporting"],
  },
];

const EXPERIENCE = [
  {
    company: "Spinner",
    role: "QA Engineer",
    period: "Sep 2025 – Present",
    type: "Full-time · Remote",
    domain: "iGaming",
    current: true,
    bullets: [
      "Leading end-to-end QA for a live iGaming platform serving thousands of concurrent users.",
      "Designing and maintaining regression, smoke and functional test suites in TestRail.",
      "Executing API testing via Postman; documenting defects and tracking resolution in Jira.",
      "Collaborating with developers in Agile sprints to shift quality left and reduce defect leakage.",
    ],
  },
  {
    company: "Rezet — JIGZO",
    role: "QA Engineer",
    period: "May 2024 – Dec 2025",
    type: "Contract · Remote",
    domain: "Fintech / Payments",
    current: false,
    bullets: [
      "Built automated UI test coverage with Playwright (TypeScript) reducing manual regression effort by ~40%.",
      "Defined and executed performance load scripts using Grafana K6; identified bottlenecks under simulated peak load.",
      "Wrote and maintained SQL queries to validate backend data integrity across payment flows.",
      "Logged and triaged 150+ bugs in Jira; established defect classification standards adopted team-wide.",
    ],
  },
  {
    company: "Rezet — Hagedoo",
    role: "QA Engineer",
    period: "Jul 2023 – May 2024",
    type: "Contract · Remote",
    domain: "Marketplace / E-commerce",
    current: false,
    bullets: [
      "Performed functional, regression and exploratory testing across web and mobile (iOS/Android) surfaces.",
      "Maintained comprehensive test suites in TestRail and produced weekly quality status reports.",
      "Conducted cross-browser and cross-device testing via BrowserStack; logged and verified 80+ defects.",
      "Participated in sprint planning and retrospectives, contributing QA estimates and risk assessments.",
    ],
  },
  {
    company: "ChangeAgents AEC",
    role: "Junior QA Engineer",
    period: "Jul 2022 – Jul 2023",
    type: "Full-time",
    domain: "SaaS / B2B",
    current: false,
    bullets: [
      "Executed manual functional and regression test cases for a B2B SaaS web application.",
      "Created and maintained test plans and test case documentation in Confluence and TestRail.",
      "Investigated UI and API defects using browser DevTools and Postman; filed detailed bug reports in Jira.",
      "Gained hands-on experience with STLC, Agile ceremonies and cross-functional team collaboration.",
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavBar({ active, onNav }) {
  const links = ["Skills", "Experience", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-[#1F3864] tracking-wide text-sm">
          VITALII VOLOSHYN
        </span>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => onNav(l.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  active === l.toLowerCase()
                    ? "text-[#2E75B6]"
                    : "text-slate-500 hover:text-[#2E75B6]"
                }`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
      {/* Profile photo */}
      <img
        src="./photo.jpg"
        alt="Vitalii Voloshyn"
        className="mx-auto mb-6 w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-white border-2 border-[#2E75B6]"
      />

      <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-green-100 text-green-700 uppercase">
        ● Open to Remote
      </span>

      <h1 className="text-4xl font-bold text-[#1F3864] mb-2 tracking-tight">
        Vitalii Voloshyn
      </h1>
      <p className="text-xl text-[#2E75B6] font-medium mb-1">
        QA Engineer · QC Engineer · Test Engineer
      </p>
      <p className="text-slate-700 text-sm mb-6">
        4+ Years · Manual Testing · API · Mobile · Playwright · Grafana K6 · Fintech · iGaming
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
        <a
          href="mailto:woloshinvit@gmail.com"
          className="px-5 py-2 rounded-lg bg-[#2E75B6] text-white text-sm font-semibold hover:bg-[#1F3864] transition-colors"
        >
          Get in touch
        </a>
        <a
          href="https://www.linkedin.com/in/vitalii-voloshyn/"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-lg border border-[#2E75B6] text-[#2E75B6] text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-2xl font-bold text-[#1F3864] mb-8">
          Testing stack &amp; tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className={`rounded-xl border p-5 ${group.color}`}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-slate-600 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${group.tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-2xl font-bold text-[#1F3864] mb-8">
          4+ years across iGaming, Fintech &amp; SaaS
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-blue-100 hidden sm:block" />

          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="sm:pl-12 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 top-5 w-3 h-3 rounded-full border-2 hidden sm:block ${
                    job.current
                      ? "border-[#2E75B6] bg-[#2E75B6]"
                      : "border-blue-200 bg-white"
                  }`}
                />

                <div
                  className="rounded-xl border border-slate-200 bg-white p-5 cursor-pointer hover:border-[#2E75B6] hover:shadow-sm transition-all"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="font-bold text-[#1F3864] text-base">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">
                            Current
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-[#2E75B6] font-medium">
                          {job.domain}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#2E75B6]">{job.role}</p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {job.period} · {job.type}
                      </p>
                    </div>
                    <span className="text-slate-500 text-lg select-none mt-1">
                      {open === i ? "▲" : "▼"}
                    </span>
                  </div>

                  {open === i && (
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-800">
                          <span className="text-[#2E75B6] mt-0.5 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-[#1F3864]">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel light>Contact</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-3">
          Let's work together
        </h2>
        <p className="text-white/90 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Available for remote QA Engineer roles globally. Fast response — usually within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="mailto:woloshinvit@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2E75B6] text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
          >
            ✉ woloshinvit@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vitalii-voloshyn/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white/60 text-white font-semibold text-sm hover:bg-[#2E75B6] hover:border-[#2E75B6] transition-colors"
          >
            in LinkedIn Profile
          </a>
        </div>

        <div className="flex justify-center gap-6 text-xs text-white/80 font-medium">
          <span>● Open to Remote</span>
          <span>·</span>
          <span>4+ Years Experience</span>
          <span>·</span>
          <span>Fintech · iGaming · SaaS</span>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children, light }) {
  return (
    <p
      className={`text-xs font-bold tracking-widest uppercase mb-2 ${
        light ? "text-slate-300" : "text-[#2E75B6]"
      }`}
    >
      {children}
    </p>
  );
}

function Footer() {
  return (
    <footer className="py-4 text-center text-xs text-slate-400 bg-slate-50 border-t border-slate-100">
      © {new Date().getFullYear()} Vitalii Voloshyn · QA Engineer
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("skills");

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <NavBar active={activeSection} onNav={scrollTo} />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
