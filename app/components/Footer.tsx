import { Mail, Linkedin, Github, Home, User, Folder, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Folder },
    { name: 'Contact', href: '#contact', icon: Phone }
  ]

  const socialLinks = [
    { 
      name: 'Email', 
      href: 'mailto:rinasmohamed840@gmail.com', 
      icon: Mail,
      text: 'rinasmohamed840@gmail.com'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/mohamed-rinas-9ab9312a6', 
      icon: Linkedin,
      text: 'mohamed-rinas-9ab9312a6'
    },
    { 
      name: 'GitHub', 
      href: '#', 
      icon: Github,
      text: 'GitHub Profile'
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Sahabdeen Mohamed Rinas
                </h2>
                <p className="text-gray-300 mt-2">Mechatronics Engineer</p>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Specializing in industrial automation, embedded systems, 
                and control systems with hands-on experience in PLC programming 
                and system integration.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
                Navigation
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                      <link.icon size={16} />
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : '_self'}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : ''}
                    className="flex items-start gap-4 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-700/50 transition-colors">
                      <link.icon size={18} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white group-hover:text-blue-300 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-gray-400 text-sm truncate">{link.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                © {currentYear} Sahabdeen Mohamed Rinas. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <div className="w-px h-4 bg-gray-700"></div>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors text-sm"
              >
                Back to Top ↑
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Designed with expertise in mind • Mechatronics & Automation Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}