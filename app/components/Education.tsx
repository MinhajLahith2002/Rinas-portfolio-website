import { GraduationCap, BookOpen, Users, Award, Calendar, Building } from 'lucide-react'

export default function Education() {
  const courses: string[] = [
    "Applied Electronics",
    "Applied Electricity", 
    "PLC & Control Systems",
    "Pneumatics & Electro-Pneumatics",
    "Hydraulics & Electro-Hydraulics"
  ]

  const references = [
    {
      name: "Mr. S. Paheerathan",
      title: "Head of Department",
      department: "Mechatronics Technology",
      institution: "University College of Jaffna",
      phone: "0776464353",
      email: "paheerathan82@gmail.com"
    },
    {
      name: "Mr. V. Hiroshan",
      title: "Senior Lecturer & Head of Academic",
      department: "Mechatronics",
      institution: "University College of Jaffna",
      phone: "0771665123",
      email: "Hiroshanm@gmail.com"
    }
  ]

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
            <GraduationCap className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Qualifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey in Mechatronics with hands-on training in industrial automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Education Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200 mb-8">
              <div className="flex items-start gap-8 mb-10">
                <div className="p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex-shrink-0">
                  <GraduationCap className="text-white" size={36} />
                </div>
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Diploma in Mechatronics
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-lg">
                      <span className="flex items-center gap-2">
                        <Building size={18} />
                        University College of Jaffna
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={18} />
                        2023 - 2025
                      </span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-100 text-green-800 rounded-full text-lg">
                    <Award size={18} />
                    <span className="font-semibold">Completed</span>
                  </div>
                </div>
              </div>

              {/* Course Focus */}
              <div className="pt-10 border-t border-gray-200 mb-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BookOpen className="text-blue-600" size={22} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Core Subjects & Specializations</h4>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="group relative p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="absolute -top-3 -right-3 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          <Award size={18} className="text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{course}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="pt-10 border-t border-gray-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Acquired Skills</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-md transition-all">
                    <div className="text-blue-600 font-bold text-3xl mb-3">PLC</div>
                    <p className="text-gray-700 font-medium">Programming</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-xl hover:shadow-md transition-all">
                    <div className="text-indigo-600 font-bold text-3xl mb-3">Auto</div>
                    <p className="text-gray-700 font-medium">Automation</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-md transition-all">
                    <div className="text-blue-600 font-bold text-3xl mb-3">Embed</div>
                    <p className="text-gray-700 font-medium">Systems</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-xl hover:shadow-md transition-all">
                    <div className="text-indigo-600 font-bold text-3xl mb-3">Control</div>
                    <p className="text-gray-700 font-medium">Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* References Sidebar */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-white/10 rounded-xl">
                  <Users className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold">Academic References</h3>
              </div>
              
              <div className="space-y-8">
                {references.map((ref, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="mb-6">
                      <h4 className="font-bold text-xl mb-2">{ref.name}</h4>
                      <p className="text-blue-200 text-base mb-2">{ref.title}</p>
                      <p className="text-gray-300">{ref.department}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <Building size={16} className="text-blue-200" />
                        </div>
                        <span className="text-blue-100">{ref.institution}</span>
                      </div>
                      
                      <a 
                        href={`tel:${ref.phone}`}
                        className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors group"
                      >
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-lg">{ref.phone}</span>
                      </a>
                      
                      <a 
                        href={`mailto:${ref.email}`}
                        className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors group"
                      >
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="truncate text-lg">{ref.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Program Timeline</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-900">Program Start</span>
                      <span className="text-blue-600 font-semibold text-lg">2023</span>
                    </div>
                    <div className="h-3 bg-blue-100 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full w-0"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mr-5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-900">Core Training</span>
                      <span className="text-blue-600 font-semibold text-lg">2024</span>
                    </div>
                    <div className="h-3 bg-blue-100 rounded-full">
                      <div className="h-full bg-blue-400 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-900">Program Completion</span>
                      <span className="text-green-600 font-semibold text-lg">2025</span>
                    </div>
                    <div className="h-3 bg-blue-100 rounded-full">
                      <div className="h-full bg-green-500 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-3">2 Years</div>
                  <p className="text-gray-600 text-lg">Intensive Technical Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}