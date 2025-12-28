import { Cpu, Code, Settings, Wrench, Users, MessageSquare, Lightbulb, BookOpen, Globe, Brain, Zap, Target } from 'lucide-react'

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
  level?: number; // 1-5 for proficiency
}

export default function Skills() {
  const technicalSkills: SkillCategory[] = [
    {
      title: "PLC Programming",
      icon: <Settings className="text-blue-600" />,
      color: "bg-blue-50 text-blue-700",
      skills: ["Siemens PLC", "Omron PLC", "Ladder Logic", "PLCsim", "Factory I/O"],
      level: 5
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="text-green-600" />,
      color: "bg-green-50 text-green-700",
      skills: ["Arduino", "ESP32", "ESP8266", "Microcontrollers", "Sensor Integration"],
      level: 5
    },
    {
      title: "Programming",
      icon: <Code className="text-purple-600" />,
      color: "bg-purple-50 text-purple-700",
      skills: ["Python", "Arduino IDE", "OpenCV", "C++ Basics", "MATLAB"],
      level: 4
    },
    {
      title: "Industrial Automation",
      icon: <Wrench className="text-orange-600" />,
      color: "bg-orange-50 text-orange-700",
      skills: ["HMI Design", "Sensor Calibration", "PWM Control", "Motor Control", "VFD"],
      level: 4
    },
    {
      title: "IoT & Communication",
      icon: <Zap className="text-red-600" />,
      color: "bg-red-50 text-red-700",
      skills: ["MQTT", "HTTP", "WiFi", "Bluetooth", "Serial Communication"],
      level: 4
    },
    {
      title: "Design & Modeling",
      icon: <BookOpen className="text-teal-600" />,
      color: "bg-teal-50 text-teal-700",
      skills: ["TinkerCAD", "3D Design", "Technical Drawing", "Circuit Design"],
      level: 3
    }
  ]

  const learningSkills: SkillCategory[] = [
    {
      title: "Advanced Protocols",
      icon: <Target className="text-indigo-600" />,
      color: "bg-indigo-50 text-indigo-700",
      skills: ["Modbus", "Profibus", "Ethernet/IP", "Industrial Networking"]
    },
    {
      title: "Advanced Control",
      icon: <Brain className="text-pink-600" />,
      color: "bg-pink-50 text-pink-700",
      skills: ["SCADA Systems", "PID Control", "VFD Integration", "Motion Control"]
    }
  ]

  const softSkills: { title: string; description: string; icon: React.ReactNode }[] = [
    {
      title: "Problem Solving",
      description: "Analytical thinking and systematic troubleshooting",
      icon: <Lightbulb className="text-blue-600" />
    },
    {
      title: "Communication",
      description: "Clear technical explanations and teaching abilities",
      icon: <MessageSquare className="text-green-600" />
    },
    {
      title: "Team Collaboration",
      description: "Effective in both independent and team environments",
      icon: <Users className="text-purple-600" />
    },
    {
      title: "Adaptability",
      description: "Quick learning and adjustment to new technologies",
      icon: <Brain className="text-orange-600" />
    }
  ]

  const languages = [
    { name: "Tamil", level: "Native", percentage: 100, color: "bg-blue-600" },
    { name: "English", level: "Fluent", percentage: 90, color: "bg-green-600" },
    { name: "Sinhala", level: "Intermediate", percentage: 75, color: "bg-purple-600" }
  ]

  const renderProficiencyDots = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Cpu size={16} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="text-blue-600">Proficiencies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical skills combined with strong soft skills for effective engineering solutions
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Cpu className="text-blue-600" />
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-50">
                    {category.icon}
                  </div>
                  {category.level && renderProficiencyDots(category.level)}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h4>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                    {category.level === 5 ? 'Advanced' : 
                     category.level === 4 ? 'Proficient' : 
                     category.level === 3 ? 'Intermediate' : 'Basic'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Soft Skills - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Currently Learning */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-600" />
              Currently Learning
            </h3>
            
            <div className="space-y-4">
              {learningSkills.map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="text-green-600" />
              Soft Skills
            </h3>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gray-50">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages & Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe className="text-blue-600" />
              Languages
            </h3>
            
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium text-gray-900">{lang.name}</span>
                      <span className="ml-2 text-sm text-gray-600">({lang.level})</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${lang.color} transition-all duration-1000`}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Tamil - Native language, perfect proficiency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>English - Professional working proficiency</span>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Automation</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg">Siemens PLC</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg">Factory I/O</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-lg">Arduino IDE</span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-lg">VS Code</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Design</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg">TinkerCAD</span>
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg">Fusion 360</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Communication</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-sm rounded-lg">MQTT</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-sm rounded-lg">HTTP/REST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">{technicalSkills.length + learningSkills.length}</p>
            <p className="text-gray-600">Skill Categories</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">{languages.length}</p>
            <p className="text-gray-600">Languages</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">5+</p>
            <p className="text-gray-600">Years Learning</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <p className="text-3xl font-bold text-blue-600">20+</p>
            <p className="text-gray-600">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}