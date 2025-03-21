import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Ecossistema de Pesquisa Científica',
      description: 'Desenvolvimento de plataforma para gerenciamento e análise de pesquisas científicas, integrando ferramentas de machine learning para processamento de dados.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop',
      tags: ['python', 'django', 'docker'],
      link: 'https://github.com/lmottta/scientific-research-platform',
      category: 'backend'
    },
    {
      id: 2,
      title: 'Sistema de Análise de Crédito',
      description: 'API para análise automatizada de crédito utilizando algoritmos de scoring e integração com bureaus de crédito externos.',
      image: 'https://images.unsplash.com/photo-1579225663317-c0251b4369bc?q=80&w=1000&auto=format&fit=crop',
      tags: ['python', 'fastapi', 'aws'],
      link: 'https://github.com/lmottta/credit-analysis-system',
      category: 'backend'
    },
    {
      id: 3,
      title: 'Dashboard Financeiro',
      description: 'Interface interativa para visualização de dados financeiros e métricas de desempenho de negócios com gráficos dinâmicos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      tags: ['react', 'typescript', 'chartjs'],
      link: 'https://github.com/lmottta/financial-dashboard',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Pipeline ETL para DataWarehouse',
      description: 'Sistema de extração, transformação e carga de dados para alimentar um data warehouse corporativo, com processamento distribuído.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop',
      tags: ['python', 'airflow', 'aws'],
      link: 'https://github.com/lmottta/etl-pipeline',
      category: 'data'
    },
    {
      id: 5,
      title: 'API Rest para Automação Comercial',
      description: 'Backend para sistema de automação comercial, com funcionalidades de controle de estoque, vendas e relatórios gerenciais.',
      image: 'https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=1000&auto=format&fit=crop',
      tags: ['python', 'flask', 'mongodb'],
      link: 'https://github.com/lmottta/retail-automation-api',
      category: 'backend'
    },
    {
      id: 6,
      title: 'Aplicativo Web para Gestão de Postos',
      description: 'Sistema completo para gerenciamento de rede de postos de combustíveis, incluindo controle de vendas, estoque e relatórios.',
      image: 'https://images.unsplash.com/photo-1582486225644-dff13eeb04ff?q=80&w=1000&auto=format&fit=crop',
      tags: ['react', 'nodejs', 'mysql'],
      link: 'https://github.com/lmottta/gas-station-management',
      category: 'fullstack'
    }
  ];
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'data', label: 'Data' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Projetos</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-white'
                    : 'bg-darkBlue/30 text-gray-300 hover:bg-darkBlue/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-darkBlue/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-shadow group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBlue to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={`${project.id}-${tag}`}
                            className="px-2 py-1 bg-darkBlue/80 text-xs rounded text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-secondary to-accent rounded text-white font-medium hover:from-accent hover:to-secondary transition-all"
                    >
                      Ver Projeto
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/lmottta?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-darkBlue/50 hover:bg-darkBlue/70 rounded-lg text-white font-medium transition-colors"
            >
              Ver Mais no GitHub
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 