// App.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { ExternalLink, ChevronRight, ArrowUpRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

const projects = [
  {
    id: 'field-sales-tracker',
    name: "Field Sales Tracker",
    description: "Built for a manufacturer tracking 40+ field reps on WhatsApp. Now they don't have to. That's the point.",
    tags: ["Antigravity", "Next.js", "Supabase"],
    signal: "Real companies · Daily active users",
    signalType: "success",
    link: "https://salesapp.thetomorrowsteam.com/",
    heroImage: "/image/field-sales-tracker.png",
    overview: "A comprehensive WhatsApp-based field sales tracking solution designed for manufacturers. Eliminates the need for manual tracking by automating sales data collection from 40+ field representatives in real-time.",
    problem: "Manufacturers with large field teams were drowning in WhatsApp messages, spreadsheets, and phone calls. Managers had no real-time visibility into what reps were doing, deals were slipping through the cracks, and nobody had a single source of truth.",
    solution: "We built a system where reps report naturally through WhatsApp — the tool they already use — while managers get a live dashboard with every update, location, and deal stage. Zero behavior change required from the field.",
    features: [
      "WhatsApp-native reporting — reps just message as usual",
      "Real-time dashboard for managers with live rep activity",
      "40+ field rep management at once",
      "Automated data collection and categorization",
      "Daily reports and streak tracking",
      "Works on any phone, no app install needed"
    ],
    techStack: ["Antigravity", "Next.js", "Supabase", "WhatsApp Business API", "React", "PostgreSQL"],
    
    video: "YOUR_FIELD_SALES_VIDEO_URL",
    year: "2024",
    category: "B2B SaaS"
  },
  {
    id: 'deep-researcher-agent',
    name: "Deep Researcher Agent",
    description: "Multi-agent AI that doesn't just answer questions — it goes out and actually researches them.",
    tags: ["Antigravity", "LangChain", "LangGraph"],
    signal: "1st Place · Outskill AI Hackathon",
    signalType: "trophy",
    link: "https://my-deep-researcher-agent.streamlit.app/",
    heroImage: "/image/deep-researcher.png",
    overview: "An advanced multi-agent AI research system that goes beyond simple question answering. It actively conducts comprehensive research using multiple specialized agents to gather, analyze, and synthesize information.",
    problem: "LLMs give confident answers from stale training data. For anything time-sensitive or nuanced, you need something that actually goes out and reads the web — not just recites what it memorized.",
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
    
    video: "https://youtu.be/Ly1F2DNx2T4?si=VOrgMarmJhWz5KVs",
    year: "2024",
    category: "AI / Research"
  },
  {
    id: 'travel-ease',
    name: "Travel Ease",
    description: "Your AI travel agent. Itinerary, flights, hotels, weather, food — everything. No agency fees.",
    tags: ["Lovable"],
    signal: "1st Place · Outskill AI Hackathon",
    signalType: "trophy",
    link: "https://lets-travel-with-ease.lovable.app/",
    heroImage: "/image/travel-ease.png",
    overview: "An AI-powered travel planning assistant that handles everything from itinerary creation to flight and hotel bookings. Comprehensive travel solutions including weather forecasts and food recommendations.",
    problem: "Travel planning is genuinely painful — you're jumping between 6 different tabs, comparing prices manually, and still not sure if the itinerary makes geographic sense. Travel agents solve this but cost a premium and don't work at 2am.",
    solution: "One conversation handles everything. Tell it where you want to go, your budget, and your vibe. It builds a coherent itinerary, checks weather, suggests food, and finds bookable options — all without you switching contexts.",
    features: [
      "Full itinerary generation from a single prompt",
      "Flight and hotel search with real pricing",
      "Weather-aware planning for your travel dates",
      "Local food and restaurant recommendations",
      "Budget optimization across the full trip",
      "Zero agency fees, instant results"
    ],
    techStack: ["Lovable", "OpenAI", "Booking.com API", "OpenWeather API", "React", "TypeScript"],
    video: "https://youtu.be/5Z2CeX2XInI?si=7XsDva2ZCCO2e-Hi",
    
    year: "2024",
    category: "Consumer AI"
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
    overview: "A community platform for individuals committed to personal growth through improved communication, confidence building, and preparation. Active community of real members focused on self-improvement.",
    problem: "Most people who want to improve their communication and confidence don't have a structured path or community around it. Courses feel transactional, coaches are expensive, and social media is noise.",
    solution: "Built a focused community platform where members work on real communication skills together — with structured programs, peer accountability, and a founder who's in the trenches with them. Not just content, but belonging.",
    features: [
      "Structured communication development programs",
      "Peer accountability and community challenges",
      "Confidence-building exercises and tracks",
      "Live sessions and practice environments",
      "Progress tracking and streaks",
      "Direct founder involvement and mentorship"
    ],
    techStack: ["Lovable", "Supabase", "React", "Stripe", "Real-time Channels"],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    ],
    year: "2024",
    category: "Community Platform"
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
    overview: "A comprehensive loyalty and rewards system for Saraswati Ply House. Tracks points, manages commissions, and drives sales through tangible incentives for the people who actually move product.",
    problem: "In B2B manufacturing, the people who actually influence purchase decisions — carpenters, contractors, retailers — have zero reason to be loyal to one brand over another. Everyone's competing on price alone.",
    solution: "Built a points and commission system that makes loyalty tangible. Carpenters earn points on every Saraswati purchase, track their commissions in real time, and redeem rewards like bikes and appliances. Suddenly brand loyalty has a face.",
    features: [
      "Points earned automatically on every purchase",
      "Real-time commission tracking for reps",
      "Tiered rewards catalog — bikes, appliances, vouchers",
      "QR-code based purchase verification",
      "Leaderboards to drive competitive behavior",
      "Admin dashboard for full program management"
    ],
    techStack: ["Antigravity", "React", "Node.js", "PostgreSQL", "QR Code API", "SMS Integration"],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=1200&q=80",
    ],
    year: "2024",
    category: "B2B Loyalty"
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
  element?.scrollIntoView({ behavior: 'smooth' });
};

/* ─── INFINITE CAROUSEL COMPONENT ─── */
const InfiniteCarousel = ({ slides, autoPlaySpeed = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clonedSlides, setClonedSlides] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [perView, setPerView] = useState(3);
  
  const carouselRef = useRef(null);
  const autoTimerRef = useRef(null);
  const slideWidthRef = useRef(0);
  const totalSlidesRef = useRef(0);
  
  const getPerView = useCallback(() => {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }, []);
  
  const calcSlideWidth = useCallback(() => {
    if (!carouselRef.current) return 0;
    const carouselWidth = carouselRef.current.parentElement?.clientWidth || 0;
    const gap = 32;
    const width = (carouselWidth - (gap * (perView - 1))) / perView;
    return width;
  }, [perView]);
  
  const createClonedSlides = useCallback(() => {
    if (!slides || slides.length === 0) return [];
    
    const firstClones = slides.slice(-perView).map((slide, idx) => ({
      ...slide,
      id: `clone-start-${idx}`,
      originalIndex: slides.length - perView + idx
    }));
    
    const originalSlides = slides.map((slide, idx) => ({
      ...slide,
      id: `original-${idx}`,
      originalIndex: idx
    }));
    
    const lastClones = slides.slice(0, perView).map((slide, idx) => ({
      ...slide,
      id: `clone-end-${idx}`,
      originalIndex: idx
    }));
    
    return [...firstClones, ...originalSlides, ...lastClones];
  }, [slides, perView]);
  
  const jumpTo = useCallback((index, shouldAnimate = false) => {
    if (!carouselRef.current || isTransitioning) return;
    
    if (!shouldAnimate) {
      carouselRef.current.style.transition = 'none';
    }
    
    const slideWidth = slideWidthRef.current;
    const gap = 32;
    const translateX = -(index * (slideWidth + gap));
    carouselRef.current.style.transform = `translateX(${translateX}px)`;
    
    if (!shouldAnimate) {
      carouselRef.current.offsetHeight;
      carouselRef.current.style.transition = '';
    }
  }, [isTransitioning]);
  
  const next = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, isTransitioning]);
  
  const prev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, isTransitioning]);
  
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    
    const totalClonedSlides = clonedSlides.length;
    const originalStartIndex = perView;
    const originalEndIndex = totalClonedSlides - perView - 1;
    
    if (currentIndex >= originalEndIndex) {
      const newIndex = originalStartIndex;
      setCurrentIndex(newIndex);
      jumpTo(newIndex, false);
    } else if (currentIndex < originalStartIndex) {
      const newIndex = originalEndIndex;
      setCurrentIndex(newIndex);
      jumpTo(newIndex, false);
    }
  }, [currentIndex, clonedSlides.length, perView, jumpTo]);
  
  const navigateToSlide = useCallback((originalIndex) => {
    if (isTransitioning) return;
    
    const originalStartIndex = perView;
    const targetIndex = originalStartIndex + originalIndex;
    
    if (targetIndex >= 0 && targetIndex < clonedSlides.length) {
      setIsTransitioning(true);
      setCurrentIndex(targetIndex);
    }
  }, [clonedSlides.length, perView, isTransitioning]);
  
  const startAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
    
    autoTimerRef.current = setInterval(() => {
      next();
    }, autoPlaySpeed);
  }, [next, autoPlaySpeed]);
  
  const stopAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);
  
  const handleMouseEnter = useCallback(() => {
    stopAuto();
  }, [stopAuto]);
  
  const handleMouseLeave = useCallback(() => {
    startAuto();
  }, [startAuto]);
  
  const handleResize = useCallback(() => {
    const newPerView = getPerView();
    if (newPerView !== perView) {
      setPerView(newPerView);
    }
    
    const newSlideWidth = calcSlideWidth();
    slideWidthRef.current = newSlideWidth;
    
    const newClonedSlides = createClonedSlides();
    setClonedSlides(newClonedSlides);
    
    const originalStartIndex = newPerView;
    setCurrentIndex(originalStartIndex);
    
    setTimeout(() => {
      jumpTo(originalStartIndex, false);
    }, 0);
  }, [getPerView, calcSlideWidth, createClonedSlides, jumpTo, perView]);
  
  useEffect(() => {
    if (slideWidthRef.current === 0) return;
    
    jumpTo(currentIndex, true);
  }, [currentIndex, jumpTo]);
  
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    
    const initialPerView = getPerView();
    setPerView(initialPerView);
    
    const newClonedSlides = createClonedSlides();
    setClonedSlides(newClonedSlides);
    totalSlidesRef.current = slides.length;
    
    const initialIndex = initialPerView;
    setCurrentIndex(initialIndex);
    
    setTimeout(() => {
      const width = calcSlideWidth();
      slideWidthRef.current = width;
      jumpTo(initialIndex, false);
    }, 100);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      stopAuto();
    };
  }, [slides, getPerView, createClonedSlides, calcSlideWidth, jumpTo, handleResize, stopAuto]);
  
  useEffect(() => {
    if (slides && slides.length > 0 && clonedSlides.length > 0) {
      startAuto();
    }
    
    return () => {
      stopAuto();
    };
  }, [slides, clonedSlides, startAuto, stopAuto]);
  
  if (!slides || slides.length === 0) {
    return null;
  }
  
  const slideWidth = slideWidthRef.current;
  const gap = 32;
  
  return (
    <div 
      className="infinite-carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          ref={carouselRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: `${gap}px`,
            transition: isTransitioning ? 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        >
          {clonedSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className="carousel-slide"
              style={{
                width: slideWidth ? `${slideWidth}px` : 'auto',
                flexShrink: 0
              }}
            >
              <div className="slide-inner">
                <img
                  src={slide}
                  alt={`Slide ${idx}`}
                  className="slide-image"
                />
                <div className="slide-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === (currentIndex - perView) ? 'active' : ''}`}
            onClick={() => navigateToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── LIGHTBOX ─── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        src={images[current]}
        alt=""
        className="max-w-5xl max-h-[80vh] w-full object-contain rounded-2xl"
        style={{ padding: '0 5rem' }}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── PROJECT DETAIL ─── */
const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

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

      {/* ── BREADCRUMB NAV ── */}
      <div className="relative z-30 px-8 pt-8 pb-0">
        <nav className="flex items-center gap-2 text-sm text-gray-400 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="hover:text-violet-400 transition-colors font-medium"
          >
            Projects
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-violet-300 font-medium truncate max-w-xs">{project.name}</span>
        </nav>
      </div>

      {/* ── HEADER ── */}
      <section className="relative z-10 w-full py-16 md:py-24">
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

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105"
            >
              View Live
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
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
                <span className="text-green-300 text-sm font-medium">Live in production</span>
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-violet-600/10 border border-violet-500/20 rounded-2xl group hover:bg-violet-600/20 transition-colors"
            >
              <span className="text-violet-300 font-medium text-sm">Open live project</span>
              <ArrowUpRight className="w-4 h-4 text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-red-400 text-xs font-bold">01</span>
            </div>
            <h2 className="text-3xl font-bold text-white">The Problem</h2>
          </div>
          <div className="pl-12 max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-xs font-bold">02</span>
            </div>
            <h2 className="text-3xl font-bold text-white">The Solution</h2>
          </div>
          <div className="pl-12 max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
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

        
        

        {/* Tech Stack */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 text-xs font-bold">
                {project.video && !project.video.startsWith('YOUR_') ? '06' : '05'}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">How I Built It</h2>
          </div>

          <div className="pl-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Content */}
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
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                  The stack was chosen for speed of development, reliability in production, and the ability to iterate fast based on user feedback. Every technology decision optimized for shipping something real — not something impressive on paper.
                </p>
              </div>

              {/* Right side - Video */}
              {project.video && !project.video.startsWith('YOUR_') && (
                <div className="order-first lg:order-last">
                  <div 
                    className="relative rounded-2xl overflow-hidden bg-black/20 border border-white/[0.08] group cursor-pointer"
                    onClick={() => window.open(project.video, '_blank')}
                  >
                    <div className="aspect-video">
                      <iframe
                        ref={(iframe) => {
                          if (iframe) {
                            iframe.onload = () => {
                              // Store iframe reference for hover events
                              iframe.dataset.videoId = project.video.split('/').pop().split('?')[0];
                            };
                          }
                        }}
                        src={`${project.video.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}?enablejsapi=1&mute=1&showinfo=0&controls=0&modestbranding=1&rel=0`}
                        title={`${project.name} Demo Video`}
                        className="w-full h-full transition-opacity duration-300 pointer-events-none"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onMouseEnter={(e) => {
                          const iframe = e.target;
                          const videoId = project.video.split('/').pop().split('?')[0];
                          // Send play command to YouTube iframe
                          iframe.contentWindow.postMessage(JSON.stringify({
                            event: 'command',
                            func: 'playVideo',
                            args: []
                          }), '*');
                        }}
                        onMouseLeave={(e) => {
                          const iframe = e.target;
                          // Send pause command to YouTube iframe
                          iframe.contentWindow.postMessage(JSON.stringify({
                            event: 'command',
                            func: 'pauseVideo',
                            args: []
                          }), '*');
                        }}
                      />
                    </div>
                    {/* Overlay gradient for better visual feedback */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-center bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40 border border-violet-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-3xl blur-xl" />
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-widest text-violet-400 font-semibold mb-4">See it in action</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Try It Yourself</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
              The live demo is available right now. See how it performs with real usage.
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-violet-600 hover:bg-violet-500 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105"
            >
              Launch Live Demo
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={project.images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
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

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section-wrapper relative w-full overflow-hidden bg-[#0A0A0A]">
        <div className="relative w-full" style={{ height: 'clamp(340px, 75vh, 860px)' }}>
          <p
            className="hero-tag"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '18rem',
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1rem, 2.2vw, 1.9rem)',
              letterSpacing: '0.04em',
              color: '#ffffff',
              margin: 0,
              zIndex: 20,
              lineHeight: 1.15,
            }}
          >
            FOUNDER
          </p>
          <img
            src="/image/founder.png"
            alt="Ayushi Aggarwal"
            className="hero-image"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              backgroundColor: '#0A0A0A',
            }}
          />

          <div
            className="hero-text-container"
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '8rem',
              maxWidth: '55%',
              zIndex: 10,
            }}
          >
            <h1
              className="hero-name"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase',
              }}
            >
              AYUSHI<br />AGGARWAL
            </h1>

            <p
              className="hero-description"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.65,
                maxWidth: '420px',
                margin: 0,
              }}
            >
              Curious enough to ask why.
              <br />
              Impatient enough to just build it.
              <br />
              Something right now
            </p>
          </div>
        </div>

        <div className="button-container max-w-4xl mx-auto flex justify-center gap-4 px-6 py-5">
          <div className="w-[32rem]">
            <button
              onClick={scrollToProjects}
              className="hero-button w-full py-5 text-center text-sm font-bold tracking-widest uppercase bg-violet-600 hover:bg-violet-500 transition-colors text-white"
              style={{ letterSpacing: '0.15em' }}
            >
              See What I've Built
            </button>
          </div>
          <div className="w-80">
            <a
              href="https://www.linkedin.com/in/ayushiiaggarwall/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button block w-full py-5 text-center text-sm font-bold tracking-widest uppercase bg-[#1a1a2e] hover:bg-gray-300 hover:text-[#1a1a2e] transition-colors text-gray-300"
              style={{ letterSpacing: '0.15em' }}
            >
              Say Hi on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center">ABOUT</h2>
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>I build things that actually get used.</p>
                <p>Not prototypes that live on GitHub. Not decks that explain what I'm "planning to build." Products with real users, real logins, and real businesses depending on them daily.</p>
                <p>I run Merkri Media — a brand building agency helping B2B founders stop being the best-kept secret in their industry. I also build AI products, two of which have won hackathons and three of which are in active production use right now.</p>
                <p>I left Ericsson because I wanted to build something of my own. So I did. And I'm not done yet.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pl-8">
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

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center">PROJECTS</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              project && project.name && project.description ? (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="project-item glass-card rounded-2xl cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                      <p className="text-sm text-violet-400 font-medium mb-3">{project.description}</p>
                    </div>
                    <div className="ml-4">
                      <ExternalLink className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {project.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span className="px-2 py-1 text-xs text-violet-300 font-medium bg-violet-600/10 border border-violet-500/20 rounded whitespace-nowrap">
                            {tag}
                          </span>
                          {idx < project.tags.length - 1 && (
                            <span className="text-violet-400 text-xs mx-1">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className={`text-sm font-medium ${getSignalColor(project.signalType)} flex items-center gap-2`}>
                    <span className="w-2 h-2 bg-current rounded-full opacity-60"></span>
                    {project.signal}
                  </div>
                </motion.div>
              ) : null
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="border-t border-violet-500/20 py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ayushi Aggarwal</h3>
              <p className="text-gray-400 text-sm">Building products that matter</p>
            </div>
            <div className="flex justify-center items-center gap-6 text-lg">
              <a href="#projects" className="nav-link text-violet-400 hover:text-white">Projects</a>
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