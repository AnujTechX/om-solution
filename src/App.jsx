import { useLayoutEffect, useRef,useState } from 'react'
import {Menu,X} from 'lucide-react';
import {Search} from 'lucide-react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const navItems = ['Capabilities', 'Products', 'Process', 'Quality', 'Contact']

const capabilities = [
  {
    icon:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/mcb-imeGe.webp",
    title: 'Precision Manufacturing',
    text: 'High-tolerance machining and fabrication for mission-critical automotive and industrial components.',
  },
  {
    icon:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/steering_components_327x280.png",
    title: 'Smart Automation',
    text: 'Connected production lines, digital process controls, and real-time performance optimization.',
  },
  {
    icon:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/bikespedometer.webp",
    title: 'Performance Engineering',
    text: 'Design-to-build solutions that improve throughput, reliability, and lifecycle efficiency.',
  },
  {
    icon: "https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/motor----e.webp",
    title: 'Workforce Readiness',
    text: 'Skilled technicians, structured training, and safety-first systems that keep production moving.',
  },
]

const products = [
  {
    name: 'Automotive Lock Components',
    category: 'We provide a wide range of plastic injection moulded automotive lock components, designed for reliable performance and durability.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/lock-cosmponet.webp',
  },
  {
    name: 'Auto Electrical Alternator Parts',
    category: 'We provide a wide range of plastic auto electrical components designed for effective functioning and reliable performance. Our Auto Electrical Alternator Parts are manufactured with a focus on durability, precise finishing, and consistent quality for automotive applications.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/electrical%20alternsator.webp',
  },
  {
    name: 'Auto Electrical Starter Parts',
    category: 'We offer a wide range of Auto Electrical Starter Parts manufactured as per standard specifications and customized requirements. These components are produced to meet specific customer needs while maintaining consistent quality, dimensional accuracy, and reliable performance.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/electrical-star4ter.webp',
  },
  {
    name: 'Automotive Steering Components',
    category: 'We offer a wide range of Automotive Steering Components manufactured as per standard specifications and specific application requirements. Our components are designed to provide reliable performance, dimensional consistency, and durability for automotive applications.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/steringaa.webp',
  },
 
  {
    name: 'Washing Machine Parts',
    category: 'We manufacture precision plastic components for washing machines, designed to meet specific application requirements. Our parts offer reliable performance, dimensional accuracy, durability, and consistent quality for modern washing machine assemblies.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/washing-machine12.webp',
  },
  {
    name: 'Washing Machine Parts',
    category: 'We manufacture precision plastic components for washing machines, designed to meet specific application requirements. Our parts offer reliable performance, dimensional accuracy, durability, and consistent quality for modern washing machine assemblies.',
    image:
      'https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/mcb-egear.webp',
  },
  
]

const stats = [
  { value: 18, suffix: '+', label: 'Years of experience' },
  { value: 5400, suffix: '+', label: 'Products manufactured' },
  { value: 99.6, suffix: '%', label: 'Quality rate' },
  { value: 220, suffix: '+', label: 'Clients served' },
]

const industries = ['Automotive', 'Heavy Equipment', 'Aerospace', 'Energy', 'Rail', 'Industrial']

const clientLogos = [
  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/havels.webp"}, 
  
  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/groz.webp"},

   {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/mirc.webp"},
  
  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/sanden.webp"},
  
  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/sebros.webp"},
  
  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/sparkminda.webp"},

  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/talbros.webp"},

  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/vidocon.webp"},

  {image:"https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/auto-lake.webp"},
]

function App() {
  const navbarRef = useRef(null)
  const cursorRingRef = useRef(null)
  const cursorDotRef = useRef(null)
  const CTAs = useRef([])
     const [darkMode,setDarkMode] = useState(false);
     const [menuOpen,setMenuOpen] = useState(false);
     const [openSearch,setOpenSearch] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);


  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cleanupCursor = () => {}
    
    const ctx = gsap.context(() => {
      const cursorRing = cursorRingRef.current
      const cursorDot = cursorDotRef.current
      const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches

      if (!prefersReducedMotion && canUseCustomCursor && cursorRing && cursorDot) {
        gsap.set([cursorRing, cursorDot], { autoAlpha: 0 })

        const moveRingX = gsap.quickTo(cursorRing, 'x', { duration: 0.35, ease: 'power3.out' })
        const moveRingY = gsap.quickTo(cursorRing, 'y', { duration: 0.35, ease: 'power3.out' })
        const moveDotX = gsap.quickTo(cursorDot, 'x', { duration: 0.08, ease: 'power2.out' })
        const moveDotY = gsap.quickTo(cursorDot, 'y', { duration: 0.08, ease: 'power2.out' })

      


const handlePointerMove = (event) => {
  gsap.set([cursorRing, cursorDot], {
    x: event.clientX,
    y: event.clientY,
  })

  moveRingX(event.clientX)
  moveRingY(event.clientY)
  moveDotX(event.clientX)
  moveDotY(event.clientY)

  gsap.to([cursorRing, cursorDot], {
    autoAlpha: 1,
    duration: 0.8,
    overwrite: true,
  })
}


        const handlePointerLeave = () => {
          gsap.to([cursorRing, cursorDot], { autoAlpha: 0, duration: 0.18, overwrite: true })
        }

        const handlePointerOver = (event) => {
          const interactive = event.target.closest('a, button, input, textarea, select, [role="button"]')
          gsap.to(cursorRing, { scale: interactive ? 1.55 : 1, duration: 0.2, overwrite: true })
        }

        window.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('pointerleave', handlePointerLeave)
        document.addEventListener('pointerover', handlePointerOver)

        cleanupCursor = () => {
          window.removeEventListener('pointermove', handlePointerMove)
          document.removeEventListener('pointerleave', handlePointerLeave)
          document.removeEventListener('pointerover', handlePointerOver)
        }
      }

      if (!prefersReducedMotion) {
        gsap.from('.hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-meta', {
          opacity: 0,
          y: 32,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        })

  //  navbar menu 
      gsap.from('.nav-links a', {
          opacity: 0,
          y: -20,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.3,
        })

      // navbar menu animation 
      let t1=gsap.timeline();
      gsap.from("nav",{
      y:-100,
      opacity:0,
      duration:1,
      // backgroundColor:"green"
      })

      t1.from("nav .brand",{
      y:200,
      opacity:0,
      duration:1
      })

    gsap.from('.hero-visual', {
          clipPath: 'inset(14% 0 14% 0 round 2rem)',
          scale: 1.15,
          duration: 1.4,
          ease: 'power2.out',
        })

        gsap.to('.hero-visual', {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.utils.toArray('.reveal-section').forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
              },
            },
          )
        })

      

        gsap.utils.toArray('.stat-value').forEach((value) => {
          const target = Number(value.dataset.target)
          const suffix = value.dataset.suffix || ''
          gsap.fromTo(
            value,
            { textContent: 0 },
            {
              textContent: target,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: value,
                start: 'top 90%',
              },
              onUpdate() {
                value.textContent = `${Math.round(Number(value.textContent))}${suffix}`
              },
            },
          )
        })
      }


// circle 

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".circle .card");

function positionCards() {
  const isMobile = window.innerWidth <= 768;
  const radius = isMobile ? 120 : 230;

  cards.forEach((card, i) => {
    const angle = (i * Math.PI * 2) / cards.length;

    gsap.set(card, {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    });
  });
}

positionCards();

gsap.to(".circle",{
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".production-section",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    duration:9,
    // pin: true,
    // markers: true
  }
});




})

    return () => {
      cleanupCursor()
      ctx.revert()
    }
  }, [])

  const handleMagneticMove = (event) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    gsap.to(button, {
      x: offsetX * 0.12,
      y: offsetY * 0.12,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMagneticLeave = (event) => {
    gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' })
  }


  return (
    <div className={`page-shell ${darkMode ? 'dark' : 'light'}`}>
      <span ref={cursorRingRef} className="custom-cursor custom-cursor-ring" aria-hidden="true" />
      <span ref={cursorDotRef} className="custom-cursor custom-cursor-dot" aria-hidden="true" />
      <header className="site-header">
        <nav ref={navbarRef} className="topbar" aria-label="Primary navigation">
          <a href="#home" className="brand" aria-label="OM Solutions home">
          <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/apex-logo.png" alt="OM Solutions logo" className="brand-logo" />            
          </a>

          <a className="nav-cta" href="#contact">
            Contact Us
          </a>

          {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button> */}
        <div className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

           <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>

            
        
        </div> 
         
          {/* <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} >
                {item}
              </a>
            ))}
          </div> */}

                <div
                className={`search-container ${
                  openSearch ? 'w-xsm' : 'w-10'
                } flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 absolute `}
              >
                {openSearch && (
                  <input
                    className="w-full min-w-0 outline-none p-1"
                    type="text"
                    placeholder="Search..."
                    autoFocus
                  />
                )}

                <Search
                  size={26}
                  className="shrink-0 cursor-pointer"
                  onClick={() => setOpenSearch(!openSearch)}
                />
              </div>
          {/* <a className="nav-cta" href="#contact">
            Contact Us
          </a> */}

        {/* cursor animation      */}
      <button className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        </nav>
        
      </header>
      
      <main id="home" className={`${darkMode ? 'dark' : 'light'}`}>
        <section className="hero-section hero">
          <video src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/video-compress-1.mp4"
            autoPlay
            loop
            muted
            className="hero-image hero-visual"
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            
            <h1 className="hero-title">
              ENGINEERING THE FUTURE OF MANUFACTURING
            </h1>
            <p className="hero-copy">
              We design and build advanced manufacturing systems that bring speed, accuracy,
              and production confidence to the world’s most demanding industries.
            </p>
            <div className="hero-actions">
              <a
                ref={(el) => (CTAs.current[0] = el)}
                href="#capabilities"
                className="primary-button magnetic-button"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                Explore Our Capabilities
                <ArrowRight size={18} />
              </a>
             
            </div>  
      </div>

         
     </section>
        <section className="intro reveal-section" id="capabilities">
          <div className="section-heading">
           
            <h2>Smarter systems. Stronger output. Safer production.</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-visual">
              <img
                src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/ristechjpg-01.jpg"
                alt="Factory floor with precision manufacturing equipment"
              />
            </div>

            <div className="intro-copy">
              <p>
                From concept to final assembly, OM Solutions delivers engineered manufacturing
                support for brands that need reliability, repeatability, and scalable growth.
              </p>
              <p>
                Our cross-functional teams combine engineering discipline, data-driven process
                control, and operational execution to help clients produce with more confidence.
              </p>

              <ul className="check-list">
                <li>
                  <CheckCircle2 size={18} /> High-precision manufacturing workflows
                </li>
                <li>
                  <CheckCircle2 size={18} /> End-to-end process visibility
                </li>
                <li>
                  <CheckCircle2 size={18} /> Scalable quality assurance systems
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="capabilities reveal-section" id="capabilities-section">
          <div className="section-heading narrow">
            <h2>Manufacturing expertise designed for critical performance.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="capability-card">
                <div className="card-icon">
                  {/* <Icon size={22} /> */}
                  <img src={`${Icon}`} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section reveal-section" id="products">
          <div className="section-heading split-heading">
            <div>
              <h2>Components built for demanding operations.</h2>
            </div>
          
          </div>
   
   {/* production circle  */}
          <div className="product-showcase">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-copy">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* <section className="process reveal-section" id="process">
          <div className="process-visual">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
              alt="Manufacturing process and workflow"
            />
          </div>

          <div className="process-copy">
            <p className="eyebrow">Our process</p>
            <h2>A disciplined workflow that reduces risk and increases output.</h2>
            <div className="process-steps">
              {process.map((step, index) => (
                <div key={step} className="step-item">
                  <span className="step-number">0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className='production-section'> 
           <div className="section-heading split-heading">
            <div>
              <h2>Components built for demanding operations.</h2>
            </div>
            <a href="#contact" className="text-link">
              Discuss a project <ArrowUpRight size={18} />
            </a>
          </div>
        <div className='types-production'>
        
        <section class="scene">
            <div class="circle">
              
              <div class="card">
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/motorbike.webp" alt="" />
                  <p>Automotive</p>
                </div>
              </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/steering-wheel.webp" alt="" />
                  <p>4 Wheeler Steering Parts</p>
                </div>
                
                </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/backhoe-loader.webp" alt="" />
                  <p>JCB Crane</p>
                </div>
                
                </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/circuit-breaker.webp" alt="" />
                  <p>MCB Parts</p>
                </div>
                
                </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/electric-motor.webp" alt="" />
                  <p> Alternator Motors </p>
                </div>
                
                </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/washing-machine.webp" alt="" />
                  <p> Washing Machine Parts </p>
                </div>
                
                </div>

              <div class="card">    
                <div className="content-container">
                <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/enginerring-component.webp" alt="" />
                  <p> Engineering Components </p>
                </div>
            </div>
       </div>
     <div class="card center">
      <img src="https://apexignite.omsoftsolution.net.in/apex-ignite/assets/images/apex-logo.png" alt="" />
      </div>
   </section>
  </div>
</section>

        <section className="stats reveal-section" id="quality">
          <div className="stats-grid">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-value" data-target={value} data-suffix={suffix}>
                  {value}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

       
        <section className="industries reveal-section">
          <div className="section-heading narrow">
            {/* <p className="eyebrow">Industries we support</p> */}
            <h2> Trusted by Leading Brands.</h2>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry} className="industry-pill">
                <Sparkles size={16} />
                {industry}
              </div>
            ))}
          </div>

          <div className="client-strip" aria-label="Client placeholder list">
            {clientLogos.map((logo,index) => (
              <span className='logo-img' key={index}><img src={`${logo.image}`} alt="" /></span>
            ))}
          </div>
        </section>

        <section className="contact-section reveal-section" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">Let’s build what’s next</p>
            <h2>Get in touch</h2>
            <p>Share your contact details and our team will be ready to connect.</p>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              setContactSubmitted(true)
            }}
            onChange={() => setContactSubmitted(false)}
          >
            <div className="contact-field">
              <label htmlFor="first-name">First name</label>
              <input id="first-name" name="firstName" type="text" autoComplete="given-name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="last-name">Last name</label>
              <input id="last-name" name="lastName" type="text" autoComplete="family-name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-number">Phone number</label>
              <input id="contact-number" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <button className="primary-button contact-submit" type="submit">
              Send details
              <ArrowRight size={18} />
            </button>
            {contactSubmitted && (
              <p className="contact-success" role="status">
                Thanks! The form is ready for your team to connect to a submission service.
              </p>
            )}
          </form>
        </section>

        
      </main>

      <footer className="site-footer" id='site-footer'>
        <div className="footer-contact-strip">
          <a className="footer-contact-card" href="tel:+21236547898">
            <span className="footer-contact-icon"><PhoneCall size={20} /></span>
            <span><strong>Call Us</strong><span>+2 123 654 7898</span></span>
          </a>
          <a className="footer-contact-card" href="mailto:info@example.com">
            <span className="footer-contact-icon"><Mail size={20} /></span>
            <span><strong>Mail Us</strong><span>info@example.com</span></span>
          </a>
          <div className="footer-contact-card">
            <span className="footer-contact-icon"><MapPin size={20} /></span>
            <span><strong>Our Address</strong><span>25/AB Milford, New York</span></span>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#home" aria-label="OM Solutions home">
              <span className="brand-mark">Apex</span>
              <span className="footer-brand-copy">
                <strong>Apex Ignite Solutions Pvt. Ltd.</strong>
                <span>Manufacturing Group</span>
              </span>
            </a>
            <p>We engineer dependable components and manufacturing solutions for businesses ready to build what’s next.</p>
            <h3>Follow Us On</h3>
            <div className="social-row" aria-label="Social media links">
              <a href="#contact" aria-label="Facebook"><Building2 size={17} /></a>
              <a href="#contact" aria-label="Instagram"><Sparkles size={17} /></a>
              <a href="#contact" aria-label="LinkedIn"><Users size={17} /></a>
              <a href="#contact" aria-label="YouTube"><Wrench size={17} /></a>
            </div>
          </div>

          <nav className="footer-menu" aria-label="Footer navigation">
            <div className="footer-menu-group">
              <h3>Company</h3>
              <a href="#capabilities">About Us</a>
              <a href="#quality">FAQs</a>
              <a href="#products">Latest Products</a>
              <a href="#contact">Contact Us</a>
              <a href="#contact">Terms of Service</a>
              <a href="#contact">Privacy Policy</a>
            </div>
            <div className="footer-menu-group">
              <h3>Our Services</h3>
              <a href="#capabilities-section">Automation Integration</a>
              <a href="#products">Machinery Fabrication</a>
              <a href="#products">Industrial Manufacturing</a>
              <a href="#capabilities-section">Equipment Installation</a>
              <a href="#capabilities-section">Supply Management</a>
              <a href="#contact">Technical Engineering</a>
            </div>
            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to get the latest updates and news.</p>
              <form
                className="newsletter-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setNewsletterSubscribed(true)
                }}
                onChange={() => setNewsletterSubscribed(false)}
              >
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" name="newsletterEmail" type="email" placeholder="Your email address" required />
                <button type="submit" aria-label="Subscribe to newsletter"><Send size={17} /></button>
              </form>
              {newsletterSubscribed && <p className="newsletter-success" role="status">Thanks for subscribing!</p>}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© Copyright 2026 OM Solutions. All Rights Reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>


      
    </div>
  )
}

export default App
