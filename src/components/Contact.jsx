import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate database submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'madhugangwar23@gmail.com',
      href: 'mailto:madhugangwar23@gmail.com',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available on Request',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
      color: 'from-green-500 to-teal-500'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-green-500/20">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
              <p className="text-gray-300 text-lg mb-6">
                Thank you for reaching out! Your message has been submitted .
                I'll get back to you as soon as possible.
              </p>
              <div className="inline-block bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-400 px-6 py-3 rounded-full border border-green-500/30">
                Redirecting back to contact form...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or potential collaborations.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-xl border border-purple-500/20">
              <h4 className="text-white font-semibold mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                {/* <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Fast and reliable delivery
                </li> */}
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Modern and responsive designs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Clean and maintainable code
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    Good Communication
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Your Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      <span>Submitting to Database...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;