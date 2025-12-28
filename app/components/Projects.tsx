'use client'

import { useState } from 'react'
import { Lock, FlaskConical, Hand, Camera, Cpu, CircuitBoard, Search, Filter, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
  technologies: string[];
  category: 'automation' | 'iot' | 'education' | 'embedded';
  status: 'completed' | 'ongoing';
  githubUrl?: string;
  demoUrl?: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Face Detection Lock System",
      description: "AI-based smart access control",
      detailedDescription: "Implemented facial recognition using OpenCV with Arduino for secure door access. Features real-time detection and logging capabilities.",
      icon: <Lock className="text-blue-600" />,
      technologies: ["Arduino", "OpenCV", "Python", "AI/ML", "ESP32-CAM"],
      category: 'iot',
      status: 'completed',
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "PLC Bottle Filling System",
      description: "Industrial automation simulation",
      detailedDescription: "Developed a complete bottle filling line simulation using Siemens PLC with ladder logic and Factory I/O visualization.",
      icon: <FlaskConical className="text-green-600" />,
      technologies: ["Siemens PLC", "Factory I/O", "Ladder Logic", "HMI Design"],
      category: 'automation',
      status: 'completed'
    },
    {
      id: 3,
      title: "Hydraulic Robotic Arm",
      description: "STEM education project",
      detailedDescription: "Designed and built a hydraulic-powered robotic arm for STEM workshops. Used syringe-based actuation for precision control.",
      icon: <Hand className="text-purple-600" />,
      technologies: ["Hydraulics", "Mechanical Design", "STEM", "3D Modeling"],
      category: 'education',
      status: 'completed'
    },
    {
      id: 4,
      title: "ESP32-CAM Surveillance",
      description: "Smart object detection system",
      detailedDescription: "Created a smart surveillance system with ESP32-CAM for real-time object detection and remote monitoring via web interface.",
      icon: <Camera className="text-red-600" />,
      technologies: ["ESP32", "IoT", "Object Detection", "Web Interface", "MQTT"],
      category: 'iot',
      status: 'completed'
    },
    {
      id: 5,
      title: "Motor Control System",
      description: "Industrial motor control setup",
      detailedDescription: "Implemented forward/reverse motor control using contactors and safety switches. Includes overload protection and manual controls.",
      icon: <Cpu className="text-orange-600" />,
      technologies: ["Motor Control", "Contactors", "Safety Circuits", "Wiring"],
      category: 'automation',
      status: 'completed'
    },
    {
      id: 6,
      title: "Smart Home Automation",
      description: "IoT-based home control system",
      detailedDescription: "Developing a comprehensive home automation system with remote control, scheduling, and energy monitoring features.",
      icon: <CircuitBoard className="text-teal-600" />,
      technologies: ["NodeMCU", "Home Assistant", "MQTT", "Mobile App"],
      category: 'iot',
      status: 'ongoing'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'automation', label: 'Industrial Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'iot', label: 'IoT & Embedded', count: projects.filter(p => p.category === 'iot').length },
    { id: 'education', label: 'STEM Education', count: projects.filter(p => p.category === 'education').length },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CircuitBoard size={16} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hands-on projects showcasing expertise in automation, embedded systems, and IoT solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter size={18} />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-full md:w-auto">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="outline-none w-full bg-transparent"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    project.category === 'automation' ? 'bg-blue-50' :
                    project.category === 'iot' ? 'bg-green-50' :
                    project.category === 'education' ? 'bg-purple-50' : 'bg-gray-50'
                  }`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Project Details:</p>
                  <p className="text-gray-700 text-sm">{project.detailedDescription}</p>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="px-6 pb-6 flex gap-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {!project.demoUrl && !project.githubUrl && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                )}
              </div>
              
              {/* Category Badge */}
              <div className={`px-6 py-3 border-t border-gray-100 ${
                project.category === 'automation' ? 'bg-blue-50' :
                project.category === 'iot' ? 'bg-green-50' :
                project.category === 'education' ? 'bg-purple-50' : 'bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {project.category === 'automation' ? 'Industrial Automation' :
                     project.category === 'iot' ? 'IoT & Embedded' :
                     project.category === 'education' ? 'STEM Education' : 'Project'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{project.technologies.length} technologies</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <p className="text-3xl font-bold text-blue-600">
              {projects.filter(p => p.category === 'automation').length}
            </p>
            <p className="text-gray-600">Automation Projects</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <p className="text-3xl font-bold text-blue-600">
              {projects.filter(p => p.category === 'iot').length}
            </p>
            <p className="text-gray-600">IoT Projects</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <p className="text-3xl font-bold text-blue-600">
              {projects.filter(p => p.status === 'completed').length}
            </p>
            <p className="text-gray-600">Completed</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Interested in seeing more details about any project?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Contact Me for Project Details</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}