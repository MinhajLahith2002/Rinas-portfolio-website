'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Send, Mail, Phone, MapPin, User, MessageSquare, Linkedin, Github } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with more spacing */}
        <div className="text-center mb-20">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Create Something Amazing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have an automation or embedded systems project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Contact Form with spacing */}
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <MessageSquare className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send me a message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and I'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold" htmlFor="name">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="text-blue-600" size={18} />
                    <span>Your Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
                  placeholder="John Smith"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold" htmlFor="email">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="text-blue-600" size={18} />
                    <span>Email Address</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label className="block text-gray-700 font-semibold" htmlFor="message">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="text-blue-600" size={18} />
                  <span>Your Message</span>
                </div>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 resize-none"
                placeholder="Tell me about your project, timeline, and requirements..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-8 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3 text-lg group"
              >
                <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-6">
                I'll respond to your message within 24 hours on business days
              </p>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 text-lg">Or connect with me on</p>
          <div className="flex justify-center gap-8">
            <a 
              href="#" 
              className="p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-blue-700 group-hover:text-blue-800" size={28} />
            </a>
            <a 
              href="#" 
              className="p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="text-gray-900 group-hover:text-gray-800" size={28} />
            </a>
            <a 
              href="mailto:rinasmohamed840@gmail.com"
              className="p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="text-blue-700 group-hover:text-blue-800" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}