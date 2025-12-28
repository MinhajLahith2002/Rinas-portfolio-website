import { Calendar, Globe, User, MapPin, Flag, Languages, Target, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get to Know <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate engineer dedicated to innovation in automation and embedded systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Profile</h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Motivated Mechatronics graduate with hands-on experience in embedded systems, 
                  PLC programming, and STEM education. Skilled in microcontroller development, 
                  sensor integration, and computer vision.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Passionate about solving real-world problems through innovation, teamwork, 
                  and continuous learning. Adept at transforming complex challenges into 
                  practical solutions through technical expertise and collaborative approach.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Seeking a technical role where I can grow through practical challenges and 
                  contribute to high-impact projects in automation, robotics, or sustainable engineering.
                </p>
              </div>
            </div>

            {/* Career Objectives */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Career Objectives</h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Secure a challenging role in automation/robotics engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Contribute to sustainable engineering solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Continue professional development in industrial automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Mentor and train upcoming engineers in STEM fields</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar - Personal Details */}
          <div className="space-y-8">
            {/* Personal Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                Personal Details
              </h3>
              
              <div className="space-y-6">
                {/* Date of Birth */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium text-gray-900">25 November 2002</p>
                  </div>
                </div>
                
                {/* Nationality */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Flag className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-medium text-gray-900">Sri Lankan</p>
                  </div>
                </div>
                
                {/* Languages */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Languages className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Tamil (Native)</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">English (Fluent)</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Sinhala (Intermediate)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Globe className="text-blue-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <MapPin className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-700">
                    581, Viyapariyar Road<br />
                    Brainthuraichenai<br />
                    Valaichenai<br />
                    Sri Lanka
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-600">Open to relocation opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Brief */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="text-blue-600" size={18} />
                </div>
                <h3 className="font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Diploma in Mechatronics</p>
                <p className="text-sm text-gray-600">University College of Jaffna</p>
                <p className="text-xs text-blue-600 font-medium">2023 - 2025 (Completed)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <p className="text-2xl font-bold text-blue-600">PLC</p>
            <p className="text-sm text-gray-600">Programming</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <p className="text-2xl font-bold text-blue-600">Embedded</p>
            <p className="text-sm text-gray-600">Systems</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <p className="text-2xl font-bold text-blue-600">Automation</p>
            <p className="text-sm text-gray-600">Design</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <p className="text-2xl font-bold text-blue-600">STEM</p>
            <p className="text-sm text-gray-600">Education</p>
          </div>
        </div>
      </div>
    </section>
  )
}