// App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ExternalLink, ChevronRight, ArrowUpRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    id: 'field-sales-tracker',
    name: "Field Sales Tracker",
    // GLOBAL FIX: Removed "That's the point."
    description: "Built for a manufacturer tracking 40+ field reps on WhatsApp. Now they don't have to.",
    tags: ["Antigravity", "Next.js", "Supabase"],
    signal: "Real companies · Daily active users",
    signalType: "success",
    link: "https://salesapp.thetomorrowsteam.com/",
    heroImage: "/image/field-sales-tracker.png",
    // SEC 3.1: Full overview replacement
    overview: "It started with one manufacturer drowning in WhatsApp messages, spreadsheets, and phone calls. Managers had no real-time visibility into what 40+ field reps were doing, deals were slipping through the cracks, and nobody had a single source of truth. I built a system to fix that. It now runs in production across 10 companies.",
    // SEC 3.1: Stat bar data
    statBar: [
      { label: "Built with", value: "Antigravity" },
      { label: "Status", value: "Live in production" },
      { label: "Companies", value: "10" },
      { label: "Users", value: "Daily active" },
    ],
    problem: "Manufacturers with large field teams were drowning in WhatsApp messages, spreadsheets, and phone calls. Managers had no real-time visibility into what reps were doing, deals were slipping through the cracks, and nobody had a single source of truth.",
    // SEC 3.2: We → I fix
    solution: "I built a system where reps report naturally through WhatsApp - the tool they already use - while managers get a live dashboard with every update, location, and deal stage. Zero behavior change required from the field.",
    features: [
      "WhatsApp-native reporting - reps just message as usual",
      "Real-time dashboard for managers with live rep activity",
      "40+ field rep management at once",
      "Automated data collection and categorization",
      "Daily reports and streak tracking",
      "Works on any phone, no app install needed"
    ],
    techStack: ["Antigravity", "Next.js", "Supabase", "WhatsApp Business API", "React", "PostgreSQL"],
    // SEC 3.3: Project-specific How I Built It
    techDescription: "Antigravity for AI-assisted rapid development.\nNext.js and React for the frontend.\nSupabase and PostgreSQL for real-time data.\nWhatsApp Business API for native rep reporting.\nBuilt for production from day one — not a prototype.\nNow running across 10 companies.",
    video: "YOUR_FIELD_SALES_VIDEO_URL",
    year: "2024",
    category: "B2B SaaS",
    // SEC 3.4: CTA with demo credentials
    ctaTitle: "This app runs in production with real companies.",
    ctaDescription: "Try it with demo access:",
    ctaCredentials: { email: "[your demo email here]", password: "[your demo password here]" },
    ctaButtonText: "Launch Live Demo ",
    // SEC 4.1 status tag (field sales stays as-is)
    statusLabel: "Live in production",
  },
  {
    id: 'deep-researcher-agent',
    name: "Deep Researcher Agent",
    description: "Multi-agent AI that doesn't just answer questions - it goes out and actually researches them.",
    tags: ["Antigravity", "LangChain", "LangGraph"],
    signal: "1st Place · Outskill AI Hackathon",
    signalType: "trophy",
    link: "https://my-deep-researcher-agent.streamlit.app/",
    heroImage: "/image/deep-researcher.png",
    // SEC 4.1: Full overview replacement
    overview: "Most AI tools tell you what they already know. That's not research. That's recall. I wanted to build something that could actually go out, read the web, debate its own findings, and come back with a structured answer - the way a research analyst would, but in minutes. This won 1st place at the Outskill AI Hackathon.",
    problem: "LLMs give confident answers from stale training data. For anything time-sensitive or nuanced, you need something that actually goes out and reads the web - not just recites what it memorized.",
    solution: "Built a network of specialized agents: one plans the research strategy, others execute parallel web searches, one synthesizes findings, and a final layer quality-checks the output. The result feels less like chatting with an AI and more like having a research assistant.",
    features: [
      "Multi-agent architecture with specialized roles",
      "Active web research with real-time data",
      "Parallel search execution for speed",
      "Source citation and confidence scoring",
      "Iterative refinement based on findings",
      "Hackathon-winning reliability"
    ],
    techStack: ["LangChain", "LangGraph", "Python", "Streamlit", "OpenAI", "Tavily Search"],
    // SEC 4.2: Project-specific How I Built It
    techDescription: "Python and LangGraph for agent orchestration.\nTavily Search for real-time web research.\nLangChain for agent memory and tool use.\nStreamlit to ship a working demo fast without frontend overhead.\nOpenAI for synthesis and quality checking.\nBuilt in a hackathon sprint. Won first place.",
    video: "https://youtu.be/Ly1F2DNx2T4?si=VOrgMarmJhWz5KVs",
    year: "2024",
    category: "AI / Research",
    // SEC 4.1: Status tag fix
    statusLabel: "Live Demo Available",
    // SEC 4.3: CTA honest about API key
    ctaTitle: "The Streamlit demo is live.",
    ctaDescription: "Enter your API key and watch it research any topic in real time.",
    ctaButtonText: "Launch Live Demo",
    ctaButtonAlt: "Watch Full Demo Video",
    ctaButtonAltLink: "https://youtu.be/Ly1F2DNx2T4?si=VOrgMarmJhWz5KVs",
  },
  {
    id: 'travel-ease',
    name: "Travel Ease",
    description: "Your AI travel agent. Itinerary, flights, hotels, weather, food - everything. No agency fees.",
    tags: ["Lovable", "OpenAI", "Booking.com API", "OpenWeather API", "React", "TypeScript"],
    signal: "1st Place · Outskill AI Hackathon",
    signalType: "trophy",
    link: "https://lets-travel-with-ease.lovable.app/",
    heroImage: "/image/travel-ease.png",
    // SEC 5.1: Full overview replacement
    overview: "Planning a trip means 6 open tabs, manual price comparisons, and an itinerary you're still not sure about. Travel agents fix this but charge a premium and aren't available at 2am. I built Travel Ease during a 48-hour hackathon sprint. It won first place at the Outskill AI Hackathon.",
    problem: "Travel planning is genuinely painful - you're jumping between 6 different tabs, comparing prices manually, and still not sure if the itinerary makes geographic sense. Travel agents solve this but cost a premium and don't work at 2am.",
    // SEC 5.2: "switching contexts" → "all in one place"
    solution: "One conversation handles everything. Tell it where you want to go, your budget, and your vibe. It builds a coherent itinerary, checks weather, suggests food, and finds bookable options - all in one place.",
    features: [
      "Full itinerary generation from a single prompt",
      "Flight and hotel search with real pricing",
      "Weather-aware planning for your travel dates",
      "Local food and restaurant recommendations",
      "Budget optimization across the full trip",
      "Zero agency fees, instant results"
    ],
    techStack: ["Lovable", "OpenAI", "Booking.com API", "OpenWeather API", "React", "TypeScript"],
    // SEC 5.3: Project-specific How I Built It
    techDescription: "Built on Lovable for rapid frontend development.\nOpenAI for itinerary generation and travel recommendations.\nBooking.com API for real-time flight and hotel pricing.\nOpenWeather API for accurate travel-date forecasts.\nReact and TypeScript for a clean, reliable frontend.\nBuilt and shipped in 48 hours during a hackathon.\nWon 1st place at the Outskill AI Engineering Hackathon.",
    video: "https://youtu.be/5Z2CeX2XInI?si=7XsDva2ZCCO2e-Hi",
    year: "2024",
    category: "Consumer AI",
    statusLabel: "Live and Public",
    // SEC 5.4: CTA as invitation
    ctaTitle: "Plan your next trip right now.",
    ctaDescription: "Tell it where you want to go - watch it build your entire itinerary.",
    ctaButtonText: "Launch Live Demo ",
  },
  {
    id: 'the-tomorrows-team',
    name: "The Tomorrows Team",
    description: "A platform for people serious about communication, confidence, and showing up prepared.",
    tags: ["Lovable", "Supabase"],
    signal: "Real members · Active community",
    signalType: "users",
    link: "https://thetomorrowsteam.com/",
    heroImage: "/image/tomorrowsteam.png",
    // SEC 6.1: Full overview replacement - community before platform
    overview: "I started The Tomorrows Team before I knew how to build products. It began as offline sessions for people who wanted to get better at speaking, thinking, and showing up in rooms that matter. When it grew, I built the platform for it. Not the other way around.",
    // SEC 6.1: Real numbers stat bar
    statBar: [
      { label: "Founded", value: "2024" },
      { label: "Members", value: "[X]" },
      { label: "Sessions run", value: "[X]" },
      { label: "Status", value: "Active" },
    ],
    problem: "Most people who want to improve their communication and confidence don't have a structured path or community around it. Courses feel transactional, coaches are expensive, and social media is noise.",
    // SEC 6.2: We → I fix
    solution: "I built a focused community platform where members work on real communication skills together - with structured programs, peer accountability, and a founder who's in the trenches with them. Not just content, but belonging.",
    // SEC 6.3: Reordered features - founder involvement FIRST
    features: [
      "Direct founder involvement and mentorship",
      "Structured group discussion sessions and speaking exercises",
      "Live sessions and practice environments",
      "Peer accountability and community challenges",
      "Progress tracking and streaks",
      "Confidence-building exercises and tracks",
    ],
    techStack: ["Lovable", "Supabase", "React", "Stripe", "Real-time Channels"],
    // SEC 6.4: Project-specific How I Built It
    techDescription: "Built on Lovable for rapid development.\nSupabase for real-time community features and member management.\nStripe for membership payments.\nReal-time Channels for live session infrastructure.\nStarted as a WhatsApp group.\nNow it has its own platform.",
    year: "2024",
    category: "Community Platform",
    statusLabel: "Active",
    // SEC 6.5: Community CTA — cannot be demoed
    ctaTitle: "The Tomorrows Team is live and open.",
    ctaDescription: "Join the community or explore the platform.",
    ctaButtonText: "Visit The Tomorrows Team ",
  },
  {
    id: 'carpenter-rewards',
    name: "Carpenter Rewards",
    description: "Points. Commissions. Bikes. A loyalty system for the people who actually sell your product.",
    tags: ["Antigravity"],
    signal: "Live in production · B2B manufacturing",
    signalType: "success",
    link: "https://app.saraswatiplyhouse.com",
    heroImage: "/image/carpenter-reward.png",
    // SEC 7.1: Full overview replacement
    overview: "In building materials, carpenters decide which brand gets installed. They walk into every home renovation and make the call. Most manufacturers have no way to recognise or reward that influence. Saraswati Ply House did it manually - phone calls, handwritten registers, best guesses. I built a system to change that.",
    // SEC 7.1: Stat bar
    statBar: [
      { label: "Built with", value: "Antigravity" },
      { label: "Status", value: "Live in production" },
      { label: "Business", value: "Saraswati Ply House" },
      { label: "Carpenters", value: "300+" },
    ],
    problem: "In B2B manufacturing, the people who actually influence purchase decisions - carpenters, contractors, retailers - have zero reason to be loyal to one brand over another. Everyone's competing on price alone.",
    // SEC 7.2: We → I + QR/SMS context added
    solution: "I built a points and commission system that makes loyalty tangible. Carpenters scan a QR code at the point of sale - points update instantly. They get an SMS notification so they know their balance without opening an app.",
    features: [
      "Points earned automatically on every purchase",
      "Real-time commission tracking for reps",
      "Tiered rewards catalog - bikes, appliances, vouchers",
      "QR-code based purchase verification",
      "Leaderboards to drive competitive behavior",
      "Admin dashboard for full program management"
    ],
    techStack: ["Antigravity", "React", "Node.js", "PostgreSQL", "QR Code API", "SMS Integration"],
    // SEC 7.3: Project-specific How I Built It
    techDescription: "Built on Antigravity for rapid AI-assisted development.\nReact and Node.js for the full application stack.\nPostgreSQL for purchase history and points data.\nQR Code API for field purchase verification -\ncarpenters scan at point of sale, points update instantly.\nSMS Integration for reward notifications -\ncarpenters get their balance update without opening an app.\nBuilt for a real 30-year-old B2B manufacturing business.\nCurrently live and in active use.",
    year: "2024",
    category: "B2B Loyalty",
    statusLabel: "Live in production",
    // SEC 7.4: Honest private tool CTA
    ctaTitle: "This app runs in production for Saraswati Ply House and their network of carpenters.",
    ctaDescription: "Not open for public signup - it is a live business tool. Reach out if you would like a walkthrough.",
    ctaEmail: "ayushi@merkri.media",
    ctaButtonText: "Request a Walkthrough",
  }
];

const getSignalColor = (type) => {
  switch (type) {
    case 'success': return 'text-amber-400';
    case 'trophy': return 'text-amber-400';
    case 'users': return 'text-amber-400';
    default: return 'text-amber-400';
  }
};

const scrollToProjects = () => {
  const element = document.getElementById('projects');
  const navbarHeight = 80;
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

/* ─── PROJECT DETAIL ─── */
const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button onClick={() => navigate('/')} className="text-violet-400 hover:text-violet-300">
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#0A0A0A] text-white"
    >
      {/* Wireframe bg */}
      <div className="wireframe-container">
        <div className="wireframe-cube"></div>
        <div className="wireframe-globe"></div>
        <div className="wireframe-mesh"></div>
        <div className="wireframe-pyramid"></div>
        <div className="wireframe-torus"></div>
        <div className="wireframe-octahedron"></div>
      </div>

      {/* ── STICKY NAVBAR on project pages ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-violet-500/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-white font-semibold text-lg hover:text-violet-300 transition-colors tracking-tight"
          >
            Ayushi
          </button>
          <div className="flex items-center gap-6">
            <button
              onClick={() => { navigate('/'); setTimeout(() => scrollToProjects(), 300); }}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Projects
            </button>
            <a
              href="https://www.linkedin.com/in/ayushiiaggarwall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ayushi@merkri.media"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* ── BREADCRUMB NAV ── */}
      <div className="relative z-30 px-8 pt-24 pb-0">
        <nav className="flex items-center gap-2 text-sm text-gray-400 max-w-7xl mx-auto">
          <button
            onClick={() => { navigate('/'); setTimeout(() => scrollToProjects(), 300); }}
            className="hover:text-violet-400 transition-colors font-medium"
          >
            Projects
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-violet-300 font-medium truncate max-w-xs">{project.name}</span>
        </nav>
      </div>

      {/* ── HEADER — GLOBAL FIX 3: No floating View Live button ── */}
      <section className="relative z-10 w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-violet-500/40 rounded-full text-violet-300 text-xs font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/15 rounded-full text-gray-300 text-xs font-medium">
              {project.year}
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-medium ${getSignalColor(project.signalType)}`}>
              <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
              {project.signal}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-6 text-white">
            {project.name}
          </h1>

          {/* Hero description only — no floating View Live button (GLOBAL FIX 3) */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT BAR (SEC 3.1 / 7.1) ── */}
      {project.statBar && (
        <div className="relative z-10 max-w-7xl mx-auto px-8 mb-16">
          <div className="flex flex-wrap gap-0 border border-white/[0.08] rounded-2xl overflow-hidden">
            {project.statBar.map((stat, i) => (
              <div
                key={i}
                className="flex-1 min-w-[120px] px-6 py-4 bg-white/[0.02] border-r border-white/[0.06] last:border-r-0"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── CONTENT BODY ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-widest text-violet-400 font-semibold mb-4">Overview</p>
            <p className="text-2xl text-gray-200 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Built with</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map(t => (
                  <span key={t} className="px-2.5 py-1 bg-violet-600/15 border border-violet-500/20 rounded-lg text-violet-300 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {/* SEC 4.1: Per-project status label */}
                <span className="text-green-300 text-sm font-medium">{project.statusLabel || 'Live in production'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* GLOBAL FIX 1 + 2: Consistent violet circles, correct numbering 01-05 */}

        {/* 01 — The Problem */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-xs font-bold">01</span>
            </div>
            <h2 className="text-3xl font-bold text-white">The Problem</h2>
          </div>
          <div className="pl-12 max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
        </div>

        {/* 02 — The Solution */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-xs font-bold">02</span>
            </div>
            <h2 className="text-3xl font-bold text-white">The Solution</h2>
          </div>
          <div className="pl-12 max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* 03 — What It Does */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-xs font-bold">03</span>
            </div>
            <h2 className="text-3xl font-bold text-white">What It Does</h2>
          </div>
          <div className="pl-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.04] transition-colors">
                <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 04 — How I Built It (GLOBAL FIX 2: was skipped, now 04; GLOBAL FIX 5: project-specific text) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-violet-400 text-xs font-bold">04</span>
            </div>
            <h2 className="text-3xl font-bold text-white">How I Built It</h2>
          </div>

          <div className="pl-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-200 text-sm font-medium hover:bg-violet-600/15 hover:border-violet-500/30 hover:text-violet-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* GLOBAL FIX 5: Project-specific tech description, not generic template */}
                <p className="text-gray-400 max-w-2xl leading-relaxed whitespace-pre-line">
                  {project.techDescription}
                </p>
              </div>

              {/* SEC 4.2: Video placed BELOW tags, wider */}
              {project.video && !project.video.startsWith('YOUR_') && (
                <div className="order-first lg:order-last">
                  <div
                    className="relative rounded-2xl overflow-hidden bg-black/20 border border-white/[0.08] group cursor-pointer"
                    onClick={() => window.open(project.video, '_blank')}
                  >
                    <div className="aspect-video">
                      <iframe
                        src={`${project.video.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}?enablejsapi=1&mute=1&showinfo=0&controls=0&modestbranding=1&rel=0`}
                        title={`${project.name} Demo Video`}
                        className="w-full h-full transition-opacity duration-300 pointer-events-none"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 05 — Try It Yourself (GLOBAL FIX 2: was 05 skipped to 06, now sequential) */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-center bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40 border border-violet-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-3xl blur-xl" />
          <div className="relative z-10">
            {/* Section number */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                <span className="text-violet-400 text-xs font-bold">05</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-violet-400 font-semibold">Try It Yourself</p>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-white">{project.ctaTitle}</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-lg mx-auto">
              {project.ctaDescription}
            </p>

            {/* SEC 3.4: Demo credentials for Field Sales Tracker */}
            {project.ctaCredentials && (
              <div className="inline-block mb-8 text-left bg-black/40 border border-white/10 rounded-xl px-8 py-4">
                <p className="text-gray-400 text-sm mb-1">
                  <span className="text-gray-500">Email: </span>
                  <span className="text-white font-mono">{project.ctaCredentials.email}</span>
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-gray-500">Password: </span>
                  <span className="text-white font-mono">{project.ctaCredentials.password}</span>
                </p>
              </div>
            )}

            {/* SEC 7.4: Private tool — email instead of demo link */}
            {project.ctaEmail ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${project.ctaEmail}`}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-violet-600 hover:bg-violet-500 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105"
                >
                  {project.ctaButtonText}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-violet-600 hover:bg-violet-500 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105"
                >
                  {project.ctaButtonText || 'Launch Live Demo'}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                {/* SEC 4.3: Two buttons for Deep Researcher */}
                {project.ctaButtonAlt && project.ctaButtonAltLink && (
                  <a
                    href={project.ctaButtonAltLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105"
                  >
                    {project.ctaButtonAlt}
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── PORTFOLIO HOME ─── */
function Portfolio() {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    window.scrollTo(0, 0);
    navigate(`/project/${project.id}`);
  };

  // Stack tags for new Stack section
  const stackTags = [
    "Antigravity", "Lovable", "LangChain", "LangGraph",
    "Next.js", "React", "Supabase", "Python", "Streamlit"
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[#0A0A0A]">
      {/* 3D Wireframe Background */}
      <div className="wireframe-container">
        <div className="wireframe-cube"></div>
        <div className="wireframe-globe"></div>
        <div className="wireframe-mesh"></div>
        <div className="wireframe-pyramid"></div>
        <div className="wireframe-dodecahedron"></div>
        <div className="wireframe-torus"></div>
        <div className="wireframe-octahedron"></div>
        <div className="wireframe-helix"></div>
        <div className="wireframe-icosahedron"></div>
      </div>

      {/* Grain texture overlay */}
      <div className="grain-texture" />

      {/* Animated gradient orbs */}
      <div className="gradient-orb orb-1 animate-float" />
      <div className="gradient-orb orb-2 animate-float-delay" />
      <div className="gradient-orb orb-3 animate-float-slow" />

      {/* Background particles */}
      <div className="bg-particle"></div>
      <div className="bg-particle"></div>
      <div className="bg-particle"></div>
      <div className="bg-particle"></div>
      <div className="bg-particle"></div>

      {/* Animated background blobs */}
      <div className="bg-blob"></div>
      <div className="bg-blob"></div>
      <div className="bg-blob"></div>
      <div className="bg-blob"></div>
      <div className="bg-blob"></div>
      <div className="bg-blob"></div>

      {/* ─── NAVBAR (SEC 2.4: Sticky navbar with Ayushi left, Projects + icons right) ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-violet-500/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Ayushi (scrolls to top) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-semibold text-lg hover:text-violet-300 transition-colors tracking-tight"
          >
            Ayushi
          </button>

          {/* Right: Projects + LinkedIn + Email */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToProjects}
              className="text-gray-300 hover:text-white text-base font-medium transition-colors hidden sm:block"
            >
              Projects
            </button>
            <a
              href="https://www.linkedin.com/in/ayushiiaggarwall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ayushi@merkri.media"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section-wrapper relative w-full overflow-hidden bg-[#0A0A0A] pt-20">
        {/* Hero image block */}
        <div className="hero-image-block relative w-full">
          {/* FOUNDER label */}
          <p className="hero-tag">FOUNDER</p>

          <img
            src="/image/founder.png"
            alt="Ayushi Aggarwal"
            className="hero-image"
          />

          {/* Dark overlay on top of image */}
          <div className="hero-overlay" />

          {/* Name + tagline overlay — SEC 2.1: Removed third line "Something right now" */}
          <div className="hero-text-container">
            <h1 className="hero-name">
              AYUSHI<br />AGGARWAL
            </h1>
            <p className="hero-description">
              Curious enough to ask why.<br />
              Impatient enough to just build it.
            </p>
          </div>
        </div>

        {/* SEC 2.1: Buttons — refined, inline, smaller */}
        <div className="button-container">
          <div className="btn-wrapper">
            <button
              onClick={scrollToProjects}
              className="hero-button hero-button-primary"
            >
              See What I've Built
            </button>
          </div>
          <div className="btn-wrapper">
            <a
              href="https://www.linkedin.com/in/ayushiiaggarwall/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-secondary"
            >
              Say Hi on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section — SEC 2.2 */}
      <section id="about" className="about-section py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* SEC 2.2: Removed large centered ABOUT heading */}
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center">
            {/* SEC 2.2: Widened text column */}
            <div className="order-2 lg:order-1 lg:pr-16">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                <p>I build things that actually get used.</p>
                {/* SEC 2.2: Removed quotes around "planning to build" */}
                <p>Not prototypes that live on GitHub. Not decks that explain what I'm planning to build. Products with real users, real logins, and real businesses depending on them daily.</p>
                {/* SEC 2.2: Updated text - "national hackathons" → "hackathons", added "right now" */}
                <p>I run Merkri Media - a brand building agency helping B2B founders stop being the best-kept secret in their industry. I also build AI products, two of which have won national hackathons and three of which are in active production use right now.</p>
                <p>I left Ericsson because I wanted to build something of my own. So I did. And I'm not done yet.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end -ml-4">
              <div className="relative">
                <div className="about-photo w-80 h-96 lg:w-[32rem] lg:h-96">
                  <img
                    src="/image/new.png"
                    alt="Ayushi Aggarwal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section — SEC 2.3 */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* SEC 2.3: Keep exact heading */}
          <h2 className="text-5xl font-bold mb-4 text-center">Things I've Actually Built</h2>
          <p className="text-gray-500 text-center text-sm mb-16">(not side projects that died in week two)</p>

          {/* SEC 2.3: Project card grid — centered bottom row */}
          <div className="project-grid-home">
            {/* Row 1: 3 cards */}
            <div className="project-row-top">
              {projects.slice(0, 3).map((project, index) => (
                project && project.name ? (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={() => handleProjectClick(project)}
                    animDir={index === 0 ? -20 : index === 2 ? 20 : 0}
                    animAxis={index === 1 ? 'y' : 'x'}
                  />
                ) : null
              ))}
            </div>
            {/* Row 2: 2 cards CENTERED */}
            <div className="project-row-bottom">
              {projects.slice(3, 5).map((project, index) => (
                project && project.name ? (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + 3}
                    onClick={() => handleProjectClick(project)}
                    animDir={index === 0 ? -20 : 20}
                    animAxis="x"
                  />
                ) : null
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2.4: Stack section — between projects and footer */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {stackTags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-gray-400 text-sm font-medium hover:text-violet-300 hover:border-violet-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-violet-500/20 py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ayushi Aggarwal</h3>
              <p className="text-gray-400 text-sm">Building products that matter</p>
            </div>
            <div className="flex justify-center items-center gap-6 text-lg">
              <button onClick={scrollToProjects} className="nav-link text-violet-400 hover:text-white">Projects</button>
              <a href="https://www.linkedin.com/in/ayushiiaggarwall/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
              <a href="https://github.com/ayushiiaggarwall" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            </div>
            <div className="text-center md:text-right">
              <a href="mailto:ayushi@merkri.media" className="nav-link text-violet-400 hover:text-white">ayushi@merkri.media</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-violet-500/10 text-center">
            <p className="text-gray-400 text-sm">Made with curiosity. Shipped with Antigravity and Lovable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── PROJECT CARD COMPONENT (SEC 2.3 redesign) ─── */
function ProjectCard({ project, index, onClick, animDir, animAxis }) {
  return (
    <motion.div
      initial={{ opacity: 0, [animAxis === 'y' ? 'y' : 'x']: animDir }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      // SEC 2.3: Entire card is clickable; consistent border (no stuck violet glow)
      className="project-item glass-card rounded-2xl cursor-pointer group"
      onClick={onClick}
    >
      {/* SEC 2.3: External link icon smaller + lower contrast, top right */}
      <div className="flex justify-between items-start mb-5">
        <h3 className="text-xl font-semibold text-white leading-tight">{project.name}</h3>
        {/* Smaller, lower contrast icon */}
        <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-1 ml-3" />
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-xs text-violet-300 font-medium bg-violet-600/10 border border-violet-500/20 rounded-lg whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>

      <div className={`text-xs font-medium ${getSignalColor(project.signalType)} flex items-center gap-2 mb-5`}>
        <span className="w-1.5 h-1.5 bg-current rounded-full opacity-70"></span>
        {project.signal}
      </div>

      {/* SEC 2.3: Clear text CTA at bottom of card */}
      <div className="pt-4 border-t border-white/[0.05]">
        <span className="text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
          View Project
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;