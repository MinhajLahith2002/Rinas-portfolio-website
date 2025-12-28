'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin, Download, Award, Users, Code, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true)
      
      // CV file path in public folder
      const cvPath = '/cv/Sahabdeen_Mohamed_Rinas_CV.pdf'
      
      // Create a link element
      const link = document.createElement('a')
      link.href = cvPath
      link.download = 'Sahabdeen_Mohamed_Rinas_CV.pdf'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // If file doesn't exist, show an alert
      const response = await fetch(cvPath)
      if (!response.ok) {
        alert('CV file not found. Please ensure the CV file is in the public/cv/ folder.')
      }
      
    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('Error downloading CV. Please try again or contact me directly.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section id="home" className="relative pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              <span>Licensed Mechatronics Engineer</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I&apos;m <span className="text-blue-600">Rinas</span>
              <br />
              <span className="text-gray-700">Mechatronics Engineer</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Automation Specialist & Embedded Systems Developer
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Passionate Mechatronics graduate with hands-on expertise in PLC programming, 
              industrial automation, and STEM education. Transforming complex challenges 
              into innovative solutions through technology and continuous learning.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="btn-primary flex items-center gap-2 group"
              >
                <span>Get in Touch</span>
                <Phone size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://linkedin.com/in/mohamed-rinas-9ab9312a6" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Linkedin size={18} />
                <span>View LinkedIn</span>
              </a>
              
              <button 
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors ${
                  isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    <span>Download CV</span>
                  </>
                )}
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Students Trained</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Globe className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-600">Languages</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Photo & Contact Card */}
          <div className="relative">
            {/* Profile Photo Container */}
            <div className="relative mb-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Photo frame with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-3"></div>
                
                {/* Profile Photo */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white transform -rotate-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image 
                      src="/rinas.jpeg" 
                      alt="Sahabdeen Mohamed Rinas"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating element 1 */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="text-blue-600" size={20} />
                </div>
              </div>
              
              {/* Floating element 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="text-green-600" size={20} />
                </div>
              </div>
            </div>
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Phone size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+94754323659" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                      +94 75 432 3659
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:rinasmohamed840@gmail.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                      rinasmohamed840@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">Valaichenai, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Linkedin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/mohamed-rinas-9ab9312a6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-gray-600">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}