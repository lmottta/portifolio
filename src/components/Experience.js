import { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Stefanini Brasil",
      position: "Desenvolvedor Python (Fullstack)",
      period: "Experiência anterior",
      website: "#",
      responsibilities: [
        "Desenvolvimento de aplicações para análise de risco no time de RSS do Itaú",
        "Criação de fluxos e pipeline de dados com AWS Glue",
        "Desenvolvimento de componentes de ETLs Robustos utilizando Python com Pyspark, NumPy, Pandas",
        "Construção de todo ambiente utilizando AWS (Athena, Glue, S3 e Quicksight)",
        "Implementação de práticas de CI/CD e DevOps para melhorar a entrega contínua"
      ]
    },
    {
      company: "First Decision",
      position: "Desenvolvedor Python (Fullstack)",
      period: "Nov 2023 - Ago 2024",
      website: "#",
      responsibilities: [
        "Alocado no Laboratório Nacional de Computação Científica (LNCC - MCTI)",
        "Responsável no desenvolvimento e arquitetura e sustentação para migração ecossistema de pesquisa científica",
        "Utilizo Python, Django, Bootstrap, CSS, Tailwind, HTML, JS para interface e backend Pgsql",
        "Biophyton, Pymol e Openbabel para tratamento e estudos moleculares",
        "Docker para volatilizar o projeto e permitir fácil implementação para os pesquisadores envolvidos"
      ]
    },
    {
      company: "Neocredit",
      position: "Desenvolvedor Python (Backend)",
      period: "Jun 2023 - Nov 2023",
      website: "#",
      responsibilities: [
        "Desenvolvimento de scripts e definição de políticas para processos de análise de crédito",
        "Parametrização de funções de análises existentes para novas funcionalidades",
        "Desenvolvimento de endpoints utilizando bibliotecas como Fastapi e Flask",
        "Utilização de Postgres, SQL Server e Dynamodb em projetos de Data Lake",
        "Criação de customizações full stack na plataforma de crédito utilizando React, Node.js, Angular",
        "Utilização de microserviços AWS, como CodeCommit, Route 53, CloudWatch, ElasticSearch"
      ]
    },
    {
      company: "BP Investimentos",
      position: "Analista de Sistemas SR",
      period: "Mar 2020 - Dez 2021",
      website: "#",
      responsibilities: [
        "Prestação de Serviço de Desenvolvimento de aplicação web interna Fullstack",
        "Desenvolvimento de Dashboards robustos e tangíveis",
        "Auxílio das análises de tomadas de decisão das áreas de negócio: Câmbio, Planejamento Patrimonial e Crédito & Mercado de Capitais",
        "Power Query para processo de transformação dos dados",
        "Implementação de processo de ETL da área de Câmbio para migrar dados para o Data Warehouse corporativo",
        "Arquitetura em Data Lake baseado nos serviços da AWS, Automatização de estruturas de ETL/ELT utilizando Terraform"
      ]
    },
    {
      company: "Rede de Postos Grupo BP",
      position: "Analista de Sistemas / Arquiteto de Soluções",
      period: "Mar 2020 - Dez 2021",
      website: "#",
      responsibilities: [
        "Atualização de Performances de Postos de Combustíveis e Lojas de Conveniência",
        "Criação e automatização de relatórios e dashboards utilizando Python, Excel, SQL Server e Power BI",
        "Elaboração de painéis de KPI para as áreas comerciais e administrativo-financeira",
        "Elaboração de análises de vendas, estoque, DRE, Fluxo de Caixa, Balanço Patrimonial",
        "Webscraping e automatização de processos usando bibliotecas Python como Selenium, Pyautogui, Pandas"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-darkBlue/50 to-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Experiência Profissional</h2>
          
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all ${
                    activeTab === index
                      ? 'bg-accent/10 text-accent border-l-4 border-accent'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border-l-4 border-transparent'
                  }`}
                >
                  {experience.company}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="md:w-3/4 bg-darkBlue/30 p-6 rounded-lg">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                    display: activeTab === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-100">
                    {experience.position}
                    <span className="text-accent"> @ </span>
                    <a 
                      href={experience.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {experience.company}
                    </a>
                  </h3>
                  
                  <p className="text-gray-400 mt-1 mb-4">{experience.period}</p>
                  
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex text-gray-300">
                        <span className="text-accent mr-2 flex-shrink-0">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 