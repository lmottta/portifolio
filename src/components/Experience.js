import { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Qintess",
      position: "Engenheiro de Dados",
      period: "mai de 2024 - o momento",
      website: "#",
      responsibilities: [
        "Contexto: alocação na SPU/MGI, atuando em Engenharia e Ciência de Dados para processos públicos críticos",
        "Stack: Python, Pandas, NumPy, SQLAlchemy, FastAPI, Streamlit, Apache Airflow, PostgreSQL, SQL Server, Pentaho PDI e GitLab",
        "Entregas: construção de pipelines ETL escaláveis, APIs de dados e dashboards analíticos para operação e gestão",
        "Impacto: aumento de governança e qualidade dos dados, com menor dependência de legado e baixo impacto em produção"
      ]
    },
    {
      company: "Stefanini Brasil",
      position: "Desenvolvedor Python (Fullstack)",
      period: "set de 2024 - jan de 2026",
      website: "#",
      responsibilities: [
        "Contexto: alocação no time de RSS do Itaú, com foco em análise de risco e confiabilidade de dados",
        "Stack: Python, PySpark, NumPy, Pandas e ecossistema AWS com Glue, Athena, S3 e QuickSight",
        "Entregas: implementação de pipelines e componentes de ETL robustos para ingestão, transformação e análise",
        "Impacto: maior previsibilidade de entrega com práticas de CI/CD e DevOps aplicadas ao ciclo de dados"
      ]
    },
    {
      company: "First Decision",
      position: "Desenvolvedor Python (Fullstack)",
      period: "nov de 2023 - ago de 2024",
      website: "#",
      responsibilities: [
        "Contexto: alocação no LNCC/MCTI para modernização de ecossistema de pesquisa científica",
        "Stack: Python, Django, JavaScript, HTML, Tailwind, PostgreSQL, Docker, Biopython, PyMOL e Open Babel",
        "Entregas: desenvolvimento full stack, arquitetura de migração e sustentação de plataforma científica",
        "Impacto: implantação reproduzível e maior eficiência dos fluxos de pesquisa molecular"
      ]
    },
    {
      company: "Neocredit",
      position: "Desenvolvedor Python (Backend)",
      period: "jul de 2023 - nov de 2023",
      website: "#",
      responsibilities: [
        "Contexto: atuação em produtos de crédito com foco em automação e evolução de regras analíticas",
        "Stack: Python, FastAPI, Flask, PostgreSQL, SQL Server, DynamoDB, React, Node.js, Angular e AWS",
        "Entregas: APIs, parametrização de motores analíticos e customizações full stack em plataforma de crédito",
        "Impacto: aceleração de análises e maior estabilidade operacional em fluxos de decisão"
      ]
    },
    {
      company: "SONDA",
      position: "Administrador de Sistemas Sênior (Transpetro)",
      period: "dez de 2022 - mai de 2023",
      website: "#",
      responsibilities: [
        "Contexto: sustentação de ambientes corporativos complexos no cliente Transpetro",
        "Stack: Azure, GCP, AWS, AKS, Docker, VMware, Hyper-V, Jenkins, Nginx, Terraform, Ansible e PowerShell",
        "Entregas: administração de infraestrutura, containers, serviços críticos e bancos em ambientes híbridos",
        "Impacto: maior estabilidade, padronização operacional e automação de rotinas de infraestrutura"
      ]
    },
    {
      company: "BP Investimentos",
      position: "Analista de Sistemas SR",
      period: "mar de 2020 - dez de 2021",
      website: "#",
      responsibilities: [
        "Contexto: atuação em operações de investimento, câmbio e mercado de capitais com forte demanda analítica",
        "Stack: Python, Power Query, AWS, Terraform, Data Warehouse e práticas de ETL/ELT",
        "Entregas: aplicações internas, dashboards executivos e pipeline de migração de câmbio para o DW corporativo",
        "Impacto: suporte mais rápido à decisão e estruturação da transição de arquitetura para Data Lake em cloud"
      ]
    },
    {
      company: "Rede de Postos Grupo BP",
      position: "Engenheiro de Dados",
      period: "jan de 2016 - jan de 2020",
      website: "#",
      responsibilities: [
        "Contexto: operação de BI e engenharia de dados para rede de postos e lojas de conveniência",
        "Stack: Python, SQL Server, Power BI, Excel, Selenium, PyAutoGUI e Pandas",
        "Entregas: automação de relatórios, painéis de KPI e análises de vendas, estoque e indicadores financeiros",
        "Impacto: ganho de performance operacional e redução de esforço manual em rotinas recorrentes"
      ]
    },
    {
      company: "Attom web sistemas",
      position: "Desenvolvedor Nocode Freelancer",
      period: "jul de 2019 - o momento",
      website: "#",
      responsibilities: [
        "Contexto: projetos freelancers para empresas de pequeno e médio porte em digitalização e automação de processos",
        "Stack: Power Platform, Bubble, Adalo, FlutterFlow, Xano, Supabase, AWS e práticas de CI/CD",
        "Entregas: apps e plataformas com integrações de pagamento, busca e automações operacionais por domínio",
        "Impacto: redução do tempo de entrega de soluções e melhoria de eficiência para equipes de negócio"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-darkBlue/50 to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Experiência Profissional</h2>
          <p className="text-center text-slate-300 mt-4 max-w-3xl mx-auto">
            Resumo executivo por contexto, stack, entregas e impacto.
            Cada experiência destaca tecnologia aplicada e resultado de negócio.
          </p>
          
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide surface-panel-soft p-2">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all ${
                    activeTab === index
                      ? 'bg-neon/10 text-neon border-l-4 border-neon rounded-r-lg'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border-l-4 border-transparent rounded-r-lg'
                  }`}
                >
                  {experience.company}
                </button>
              ))}
            </div>
            
            <div className="md:w-3/4 surface-panel p-7">
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
                  <h3 className="text-xl font-semibold text-slate-100">
                    {experience.position}
                    <span className="text-neon"> @ </span>
                    <a 
                      href={experience.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      {experience.company}
                    </a>
                  </h3>
                  
                  <p className="text-slate-400 mt-1 mb-4">{experience.period}</p>
                  
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex text-slate-300">
                        <span className="text-neon mr-2 flex-shrink-0">▹</span>
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
