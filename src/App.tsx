import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Code2, 
  Database, 
  Wrench, 
  GraduationCap, 
  Award, 
  Mail, 
  MapPin, 
  Star, 
  GitFork, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const projects = [
    {
      name: "ECO_DDC",
      category: "Inteligencia Artificial & Visión por Computador",
      description: "Aplicación de escritorio multiplataforma para el análisis radiológico pediátrico asistido por IA. Integra un modelo YOLOv8 entrenado para la detección automática de puntos anatómicos y cálculo matemático de métricas diagnósticas (ángulos de Graff, índice acetabular).",
      architecture: "Electron frontend communicating with a local Django REST Framework backend running PyTorch & Ultralytics YOLOv8.",
      language: "Python / TypeScript",
      languageColor: "#3572A5",
      stars: 12,
      forks: 3,
      url: "https://github.com/Pudusa/ECO_DDC",
      tags: ["Python", "YOLOv8", "Django", "Electron", "PyTorch", "Computer Vision"]
    },
    {
      name: "TableScannerCCSACFG",
      category: "Automatización & Procesamiento de Datos",
      description: "Herramienta automatizada de extracción y escaneo de tablas de valores estructurados corporativos. Diseñada para procesar documentos tabulares complejos con alta precisión y manejo robusto de excepciones.",
      architecture: "Python core engine with modular parsing algorithms and automated data validation pipelines.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 8,
      forks: 2,
      url: "https://github.com/Pudusa/TABLESCANNERCCSACFG",
      tags: ["Python", "Data Extraction", "Automation", "Parsing Algorithms"]
    },
    {
      name: "Nomina-CCSA",
      category: "Full-Stack Web Application",
      description: "Sistema web moderno de control de asistencia y gestión de personal. Desarrollado con arquitectura modular, tipado estricto y alto rendimiento para entornos corporativos.",
      architecture: "React + Vite + TypeScript frontend with a secure Node.js backend and strict static analysis (Oxlint).",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 15,
      forks: 4,
      url: "https://github.com/Pudusa/nomina-ccsa",
      tags: ["TypeScript", "React", "Vite", "Node.js", "Tailwind CSS", "Oxlint"]
    }
  ];

  const skillCategories = [
    {
      title: "Inteligencia Artificial & Agentes",
      icon: <Cpu className="w-5 h-5 text-ghBlue" />,
      skills: ["Python", "PyTorch", "Ultralytics YOLOv8", "APIs de LLMs (OpenAI/Claude)", "Procesamiento de Datos", "Computer Vision"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-[#238636]" />,
      skills: ["TypeScript", "React", "Vite", "HTML5 / CSS3", "Tailwind CSS", "Electron"]
    },
    {
      title: "Backend & Arquitectura",
      icon: <Database className="w-5 h-5 text-yellow-500" />,
      skills: ["Django", "Django REST Framework", "Node.js", "PHP", "SQL / Relational Databases", "RESTful APIs"]
    },
    {
      title: "Herramientas & Metodologías",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: ["Git & GitHub", "Cursor / Claude Code", "Algoritmia (ICPC)", "Clean Code", "Ship Fast Mindset", "Linux Environment"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#58a6ff] selection:text-[#0d1117]">
      {/* GitHub Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#161b22] border-b border-[#30363d] px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Github className="w-8 h-8 text-[#c9d1d9]" />
          <span className="font-mono font-semibold text-sm tracking-tight text-white hidden sm:inline">Pudusa / <span className="text-[#58a6ff]">portfolio</span></span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#8b949e]">public</span>
        </div>
        <nav className="flex items-center space-x-6 text-sm">
          <a href="#proyectos" className="hover:text-[#58a6ff] transition-colors">Proyectos</a>
          <a href="#stack" className="hover:text-[#58a6ff] transition-colors">Tech Stack</a>
          <a href="#sobre-mi" className="hover:text-[#58a6ff] transition-colors">Sobre mí</a>
          <a 
            href="https://github.com/Pudusa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] px-3 py-1.5 rounded-md text-white font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-[#30363d]">
        <div className="inline-flex items-center space-x-2 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-full text-xs text-[#58a6ff] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#238636] animate-pulse"></span>
          <span>Disponible para contratación • Reubicación al Caribe</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Bryan Rodriguez Soto
            </h1>
            <p className="text-xl font-mono text-[#58a6ff]">
              Junior AI Engineer & Full-Stack Developer
            </p>
            <p className="text-base text-[#8b949e] leading-relaxed">
              Licenciado en Ciencias de la Computación (UCLV) con sólida formación algorítmica (ex-participante ICPC). Especializado en el desarrollo de sistemas inteligentes, visión artificial con YOLOv8 y arquitecturas web modernas con Python y TypeScript. Apasionado por construir soluciones robustas con mentalidad <span className="text-white font-semibold">"Ship Fast"</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#proyectos"
                className="flex items-center space-x-2 bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md font-medium text-sm transition-colors shadow-sm"
              >
                <span>Ver Casos de Estudio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contacto@bryanrodriguez.dev"
                className="flex items-center space-x-2 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8b949e]" />
                <span>Contactar</span>
              </a>
            </div>
          </div>

          {/* GitHub Profile Card Widget */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-xl font-bold font-mono text-white">
                BR
              </div>
              <div>
                <h3 className="font-semibold text-white">Pudusa</h3>
                <p className="text-xs text-[#8b949e]">Bryan Rodriguez Soto</p>
              </div>
            </div>
            <div className="text-xs space-y-2 text-[#8b949e] pt-2 border-t border-[#30363d]">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#58a6ff]" />
                <span>Computación, UCLV (2025)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#58a6ff]" />
                <span>Disponible para Reubicación (Caribe)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#238636]" />
                <span>Ex-Competidor ICPC</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-xs font-mono bg-[#0d1117] p-2 rounded border border-[#30363d] text-[#58a6ff]">
                $ ai-champions --target=ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Case Studies */}
      <section id="proyectos" className="max-w-5xl mx-auto px-4 py-16 border-b border-[#30363d]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-[#58a6ff]" />
              <span>Proyectos Estrella & Casos de Estudio</span>
            </h2>
            <p className="text-sm text-[#8b949e] mt-1">Repositorios clave que demuestran dominio en IA, automatización y desarrollo full-stack.</p>
          </div>
          <span className="text-xs font-mono text-[#8b949e] hidden sm:inline">Pinned Repositories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col justify-between hover:border-[#8b949e] transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <BookMarkedIcon className="w-4 h-4 text-[#58a6ff]" />
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white group-hover:text-[#58a6ff] transition-colors flex items-center space-x-1"
                    >
                      <span>{project.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#8b949e]">
                    Public
                  </span>
                </div>

                <div className="text-xs font-mono text-[#58a6ff] mb-2">{project.category}</div>
                
                <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="bg-[#0d1117] p-2.5 rounded-md border border-[#30363d] mb-4 text-[11px] text-[#c9d1d9] font-mono">
                  <span className="text-[#8b949e]">Architecture:</span> {project.architecture}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono bg-[#21262d] text-[#58a6ff] px-2 py-0.5 rounded border border-[#30363d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#30363d] flex items-center justify-between text-xs text-[#8b949e]">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: project.languageColor }}></span>
                    <span>{project.language}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{project.stars}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{project.forks}</span>
                  </span>
                </div>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#58a6ff] font-medium flex items-center space-x-1"
                >
                  <span>Código</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="max-w-5xl mx-auto px-4 py-16 border-b border-[#30363d]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-[#238636]" />
            <span>Stack Tecnológico & Competencias</span>
          </h2>
          <p className="text-sm text-[#8b949e] mt-1">Tecnologías y herramientas alineadas directamente con los requerimientos de AI Champions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-[#21262d] border border-[#30363d]">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-mono bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] px-3 py-1.5 rounded-md border border-[#30363d] transition-colors flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#238636]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="max-w-5xl mx-auto px-4 py-16 border-b border-[#30363d]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span>Sobre mí</span>
            </h2>
            <p className="text-sm text-[#8b949e] mt-1">Formación, mentalidad y objetivos profesionales.</p>
          </div>
          <div className="lg:col-span-2 space-y-4 text-sm text-[#8b949e] leading-relaxed">
            <p>
              Soy <span className="text-white font-medium">Bryan Rodriguez Soto</span>, graduado de Licenciatura en Ciencias de la Computación en la Universidad Central "Marta Abreu" de las Villas (UCLV). Mi paso por la competición algorítmica (<span className="text-white">ICPC</span>) me ha dotado de un rigor analítico profundo y una gran velocidad para resolver problemas complejos bajo presión.
            </p>
            <p>
              Me entusiasma profundamente el ecosistema de la Inteligencia Artificial y la construcción de sistemas autónomos y agentes. Con experiencia práctica en <span className="text-white font-medium">Python, PyTorch, YOLOv8</span> y arquitecturas web robustas con <span className="text-white font-medium">TypeScript y React</span>, busco aportar valor desde el primer día en un entorno dinámico de alta exigencia ("Ship Fast") como el de <span className="text-white font-semibold">AI Champions</span>.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-xl space-y-2">
              <div className="text-xs font-mono text-[#58a6ff]"># Compromiso & Reubicación</div>
              <p className="text-xs text-[#c9d1d9]">
                Totalmente preparado y disponible para asumir roles de alta intensidad (60+ horas semanales) y reubicación internacional al Caribe para formar parte del equipo de ingenieros de IA de élite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="max-w-5xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8b949e]">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Github className="w-5 h-5 text-[#8b949e]" />
          <span>© 2026 Bryan Rodriguez Soto. Built with GitHub Corporate Aesthetic.</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/Pudusa" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] transition-colors">GitHub (@Pudusa)</a>
          <a href="mailto:contacto@bryanrodriguez.dev" className="hover:text-[#58a6ff] transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}

function BookMarkedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <col />
      <path d="M10 2v8l3-3 3 3V2" />
    </svg>
  );
}
