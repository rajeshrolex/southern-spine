import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Award, Users, Heart, ChevronRight, Star, CheckCircle, ArrowRight, Quote, Facebook, Instagram, Linkedin, ArrowUp, Zap, MapPin, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const testimonials = [
    // ... rest of testimonials
    {
      name: "Mohammed Pasha",
      time: "2 years ago",
      content: "I highly recommend Southern spine, Dr Jadhav is a genius, I was suffering from lower back for almost 3 years, it took 5 sessions to get rid of it, the treatment is pocket friendly, if you are suffering from pain then don't hesitate just visit him.",
      rating: 5
    },
    {
      name: "Sree Durga Bhavani",
      time: "2 years ago",
      content: "Dr. Raghupathi Jadhav is truly exceptional. His interactive sessions are a game-changer, creating an environment that not only promotes healing but also uplifts the patient's spirits.",
      rating: 5
    },
    {
      name: "Nawaz Mohammad",
      time: "2 years ago",
      content: "Hi all, I was having hell of back pain and I got relief from it now in just 6 sessions Dr Jadhav sir is very good and expert in this I recommend to all to contact him.",
      rating: 5
    }
  ];

  const painConditions = [
    {
      title: "Neck Pain",
      description: "Pain in the cervical spine region",
      conditions: ["Cervical strain", "Whiplash", "Cervical disc issues", "Poor neck posture"],
      image: "/images/neck-pain.jpg"
    },
    {
      title: "Joint Pain",
      description: "Pain affecting specific or multiple joints",
      conditions: ["Osteoarthritis", "Rheumatoid arthritis", "Bursitis", "Joint injuries"],
      image: "/images/joint-pain.jpg"
    },
    {
      title: "Headaches",
      description: "Pain in the head with accompanying symptoms",
      conditions: ["Tension headaches", "Migraines", "Cervicogenic headaches"],
      image: "/images/headache.jpg"
    },
    {
      title: "Nerve Pain",
      description: "Pain from nerve irritation or compression",
      conditions: ["Sciatica", "Carpal tunnel syndrome", "Radiculopathy"],
      image: "/images/nerve-pain.jpg"
    },
    {
      title: "Post-Surgical Pain",
      description: "Advanced orthopedic rehabilitation and post-operative neuropathic pain management.",
      conditions: ["Joint Replacement Recovery", "Spinal Fusion Care", "Hardware Integration", "Post-Surgical Neuralgia"],
      image: "/images/post-surgical.jpg"
    },
    {
      title: "Chronic Pain",
      description: "Comprehensive management of systemic central sensitization and long-term neuropathic syndromes.",
      conditions: ["Complex Regional Pain", "Fibromyalgia Protocol", "Central Sensitization", "Chronic Neuralgia"],
      image: "/images/chronic-pain.jpg"
    },
    {
      title: "Pain Associated with Aging",
      description: "Specialized geriatric orthopedic care focusing on degenerative disc disease and skeletal structural integrity.",
      conditions: ["Degenerative Disc Disease", "Spinal Stenosis", "Osteoporotic Care", "Geriatric Mobility"],
      image: "/images/aging-pain.jpg"
    },
    {
      title: "Back Pain",
      description: "Precision lumbar spine therapy targeting disc herniation, mechanical instability, and radicular syndromes.",
      conditions: ["Lumbar Herniation", "Spondylolisthesis", "Mechanical Back Pain", "Degenerative Instability"],
      image: "/images/back-pain.jpg"
    }
  ];

  const services = [
    {
      title: "Predict",
      subtitle: "Dive Deep Into Your Story",
      description: "Tackle a comprehensive exploration of your well-being at Southern Spine. Uncover the intricacies of your health, anticipate potential challenges, and reveal hidden strengths.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Prevent",
      subtitle: "Empowering You for a Lifetime of Well-Being",
      description: "Take a proactive approach to your well-being with our specialized care. Address the core of your condition through personalized exercises and injury-prevention strategies.",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Perform",
      subtitle: "Ignite Your Full Potential",
      description: "Experience tailored rehabilitation, collaborative goal-setting, and expert guidance. Navigate sport-specific training to unleash your complete potential.",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Southern Spine</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 9700575616</span>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`lg:hidden bg-white overflow-hidden border-t border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          initial={false}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                initial={{ x: -20, opacity: 0 }}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-3"
              initial={{ y: 20, opacity: 0 }}
              animate={isMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 9700575616</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Visit Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Spine & Joint
                </span>{" "}
                Clinic
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Helping you achieve your goals pain-free and enabling you to live an active lifestyle with expert care from Dr. Raghupathi Jadhav.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Clock className="w-5 h-5" />
                  <span>Book Appointment</span>
                </motion.button>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">5000+ Happy Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">11+ Years Experience</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-auto sm:min-h-[400px] lg:min-h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-2 opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl transform -rotate-2 opacity-10"></div>
                <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                    alt="Professional Medical Care"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Expert Spine & Joint Care</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Raghupathi Jadhav - Renowned healthcare professional with 11 years of experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] transform rotate-6 opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-[2.5rem] transform -rotate-3 opacity-10"></div>
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <img
                    src="/images/doctor.jpg"
                    alt="Dr. Raghupathi Jadhav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-8 text-white">
                    <h3 className="text-2xl font-bold">Dr. Raghupathi Jadhav</h3>
                    <p className="text-blue-200">Spine Adjustment Specialist</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Best Doctor</div>
                      <div className="text-sm font-bold text-gray-900">2018 Award</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Qualifications</h3>
                <div className="space-y-3">
                  {[
                    "MASTER OF CHIROPRACTIC (SWEDEN)",
                    "D.O OSTEOPATHY (CANADA)",
                    "FDM.FASCIAL DISTORTION MODEL (GERMANY)",
                    "BACHELOR OF PHYSIOTHERAPY"
                  ].map((qualification, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{qualification}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over a decade of experience, Dr. Jadhav provides hands-on spinal manipulation and holistic healing approaches.
                  The Best Doctors Award in 2018 recognized his commitment to patient well-being. His expertise includes specialized
                  treatments like chiropractic and physiotherapy interventions.
                </p>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">11+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2018</div>
                  <div className="text-gray-600">Best Doctor Award</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Patient <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Success Stories</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience the journey of recovery through the words of those who have regained their active lifestyles.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-12 -left-8 text-blue-100 opacity-50 hidden lg:block">
                <Quote size={120} fill="currentColor" />
              </div>

              <motion.div
                className="bg-white rounded-[3rem] shadow-2xl p-8 lg:p-16 border border-gray-100 relative overflow-hidden"
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-4 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg border-4 border-white">
                        <Star size={16} fill="white" className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-blue-600 font-medium">{testimonials[activeTestimonial].time}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="flex mb-6 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonials[activeTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-snug mb-8 relative">
                      <span className="text-blue-600 text-4xl leading-none font-serif absolute -left-6 -top-2">"</span>
                      {testimonials[activeTestimonial].content}
                      <span className="text-blue-600 text-4xl leading-none font-serif ml-1">"</span>
                    </blockquote>
                  </div>
                </div>

                <div className="mt-12 flex justify-center lg:justify-end space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${index === activeTestimonial
                        ? 'bg-blue-600 w-12'
                        : 'bg-gray-200 hover:bg-gray-300 w-2.5'
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Conditions Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Specialized Care</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Your Pain, <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Expertise</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide advanced clinical assessment and personalized treatment plans for a wide range of neuro-musculoskeletal conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ...painConditions[0], icon: <Users className="w-6 h-6" />, color: "blue" },
              { ...painConditions[1], icon: <Heart className="w-6 h-6" />, color: "cyan" },
              { ...painConditions[2], icon: <Award className="w-6 h-6" />, color: "purple" },
              { ...painConditions[3], icon: <Star className="w-6 h-6" />, color: "indigo" },
              { ...painConditions[4], icon: <CheckCircle className="w-6 h-6" />, color: "emerald" },
              { ...painConditions[5], icon: <Clock className="w-6 h-6" />, color: "orange" },
              { ...painConditions[6], icon: <Phone className="w-6 h-6" />, color: "rose" },
              { ...painConditions[7], icon: <Mail className="w-6 h-6" />, color: "sky" },
            ].map((condition, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg">
                      {condition.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{condition.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">{condition.description}</p>

                  <div className="space-y-2">
                    {condition.conditions.map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500 font-medium">
                        <ChevronRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-bold text-blue-600">View Details</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Journey to Better Health</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to spine and joint care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">{service.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <motion.button
                      className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey to a pain-free life? Contact us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 9700575616</div>
                      <div className="text-gray-600">+91 9464108108</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@southernspine.in</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Working Hours</div>
                      <div className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</div>
                      <div className="text-gray-600">Sunday: Closed</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Describe your condition..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Appointment
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Re-designed Professional Footer */}
      <footer className="bg-[#0f172a] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Southern Spine</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Premium specialized care for neuro-musculoskeletal conditions. We merge traditional expertise with modern treatments for optimal recovery.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ y: -4 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Success Stories', 'Book Appointment'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                      <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-lg font-bold mb-8 relative inline-block">
                Specialized Care
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {['Spine Adjustment', 'Joint Pain Treatment', 'Sciatica Care', 'Post-Op Rehab', 'Chronic Pain Management'].map((service) => (
                  <li key={service}>
                    <span className="text-slate-400 flex items-center">
                      <Zap className="w-4 h-4 text-cyan-500 mr-2" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-8 relative inline-block">
                Connect With Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Our Location</p>
                    <p className="text-white font-medium">Southern Spine Clinic, Hyderabad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Emergency Call</p>
                    <p className="text-white font-medium">+91 9700575616</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-12 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-slate-500 text-sm">
                <p>&copy; 2026 Southern Spine Clinic. All rights reserved.</p>
                <p className="mt-1">Powered by <span className="text-slate-300">Crow Medico</span></p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="text-slate-500 hover:text-blue-500 text-xs transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-blue-500 text-xs transition-colors underline-offset-4 hover:underline">Terms of Service</a>
                <a href="#" className="text-slate-500 hover:text-blue-500 text-xs transition-colors underline-offset-4 hover:underline">Patient Rights</a>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="mt-12 text-slate-600 text-[10px] text-center max-w-4xl mx-auto border border-white/5 p-4 rounded-xl bg-white/[0.02]">
              <p>Disclaimer: This website is for informational purposes only and does not constitute medical advice. Please consult with a healthcare professional before starting any treatment. Facebook™ Disclaimer: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
            </div>
          </div>
        </div>

        {/* Floating Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      </footer>
    </div>
  );
};

export default HomePage;
