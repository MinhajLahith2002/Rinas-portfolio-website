import { Briefcase, GraduationCap, Users, Calendar, CheckCircle } from 'lucide-react'

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: 'work' | 'teaching' | 'ongoing';
  responsibilities: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Mechanic Unit (Trainee)",
      company: "Lootah Garments (PVT) Ltd.",
      period: "Jul 2024 - Jan 2025",
      type: 'work',
      responsibilities: [
        "Maintained and troubleshot automated garment machinery",
        "Calibrated sensors and supported motor control setups",
        "Gained exposure to industrial safety and lean manufacturing",
        "Operated automated garment machinery to support daily production"
      ]
    },
    {
      title: "Workshop Instructor",
      company: "Vidatha Resource Centre",
      period: "Aug 2023 (2-day workshop)",
      type: 'teaching',
      responsibilities: [
        "Conducted 2-day workshop on STEM Education program",
        "Taught Robotics, Arduino programming and AI in Tamil medium",
        "Distributed participation certificates to all students",
        "Organized by Divisional Secretary for School A/L Engineering Technology Students"
      ]
    },
    {
      title: "Robotics & STEM Instructor",
      company: "Current Position",
      period: "Grades 5-9 (Ongoing)",
      type: 'ongoing',
      responsibilities: [
        "Conducting practical robotics classes for students",
        "Teaching basic electricity and electronics concepts",
        "Guiding students through hydraulic-based projects",
        "Introducing Arduino programming and sensor integration"
      ]
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="text-blue-600" size={20} />
      case 'teaching': return <GraduationCap className="text-green-600" size={20} />
      case 'ongoing': return <Users className="text-purple-600" size={20} />
      default: return <Briefcase className="text-blue-600" size={20} />
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-100 text-blue-800'
      case 'teaching': return 'bg-green-100 text-green-800'
      case 'ongoing': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Industrial Training'
      case 'teaching': return 'Workshop Instruction'
      case 'ongoing': return 'Current Position'
      default: return 'Experience'
    }
  }

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase size={16} />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in automation, engineering, and STEM education
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>
          
          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                
                {/* Experience Card */}
                <div className="ml-0 md:ml-16">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                    {/* Card Header */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${exp.type === 'work' ? 'bg-blue-50' : exp.type === 'teaching' ? 'bg-green-50' : 'bg-purple-50'}`}>
                            {getIcon(exp.type)}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(exp.type)}`}>
                                {getTypeLabel(exp.type)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <span className="font-medium">{exp.company}</span>
                              <span className="text-gray-400">•</span>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Calendar size={14} />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="flex md:flex-col items-center gap-2">
                          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">
                            {exp.type === 'ongoing' ? 'Present' : exp.period.split(' - ')[1]}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="p-6 md:p-8 bg-gray-50/50">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle size={18} className="text-blue-600" />
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills Used */}
                    <div className="p-4 bg-white border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {exp.type === 'work' && (
                          <>
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Industrial Automation</span>
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Sensor Calibration</span>
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Lean Manufacturing</span>
                          </>
                        )}
                        {exp.type === 'teaching' && (
                          <>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">STEM Education</span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Arduino Programming</span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Robotics</span>
                          </>
                        )}
                        {exp.type === 'ongoing' && (
                          <>
                            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Practical Teaching</span>
                            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Electronics Concepts</span>
                            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Hydraulic Systems</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">6+</p>
            <p className="text-gray-600">Months Industrial Experience</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">100+</p>
            <p className="text-gray-600">Students Trained</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">2</p>
            <p className="text-gray-600">Workshops Conducted</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-gray-600">Professional Roles</p>
          </div>
        </div>
      </div>
    </section>
  )
}