import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Sobre Mim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="surface-panel p-8">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">Posicionamento Profissional</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Atuo na interseção entre engenharia de software, arquitetura de dados e automação.
                Meu foco é construir soluções que suportem decisão de negócio com segurança,
                governança e desempenho.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Minha entrega combina visão de arquitetura com execução prática em Python,
                backend web, integração cloud e design de pipelines para ambientes críticos.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Priorizo soluções legíveis, observáveis e sustentáveis ao longo do tempo,
                sempre com responsabilidade sobre qualidade e privacidade dos dados.
              </p>
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2 text-slate-100">Frentes de Atuação</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> Arquitetura de Software
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> Python Full Stack
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> Engenharia de Dados
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> Cloud AWS
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> RPA sob demanda
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-neon mr-2">▹</span> BI e Analytics
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="surface-panel-soft p-8">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">Dados de Perfil</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 mb-1">Nome</p>
                  <p className="text-slate-100 font-medium">Leonardo Mota</p>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-1">Localização</p>
                  <p className="text-slate-100 font-medium">Feira de Santana - BA</p>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-1">Email</p>
                  <p className="text-slate-100 font-medium">dev.lamota@gmail.com</p>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-1">Telefone</p>
                  <p className="text-slate-100 font-medium">(47) 99202-2771</p>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-1">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/devmota/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-100 font-medium hover:text-neon transition-colors"
                  >
                    @devmota
                  </a>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-1">Portfólio</p>
                  <a 
                    href="https://devlamota.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-100 font-medium hover:text-neon transition-colors"
                  >
                    devlamota
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4 text-slate-100">Formação</h4>
                <div className="mb-4">
                  <p className="text-slate-100 font-medium">Bacharel em Sistemas de Informação</p>
                  <p className="text-slate-400">Universidade Presbiteriana Mackenzie</p>
                  <p className="text-slate-400 text-sm">2004 - 2009</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-slate-100 font-medium">Pós-Graduação em Segurança da Informação</p>
                  <p className="text-slate-400">Instituto de Gestão e Tecnologia da Informação</p>
                  <p className="text-slate-400 text-sm">2011 - 2012</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-slate-100 font-medium">MBA em Gestão de Projetos</p>
                  <p className="text-slate-400">Fundação Getúlio Vargas</p>
                  <p className="text-slate-400 text-sm">2013 - 2015</p>
                </div>
                
                <div>
                  <p className="text-slate-100 font-medium">Mestrado em Análise de Dados</p>
                  <p className="text-slate-400">Universidade Estadual de Feira de Santana</p>
                  <p className="text-slate-400 text-sm">2016 - 2018</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="/images/profile/Leonardo_Mota-2.pdf" 
                  target="_blank"
                  className="inline-block btn-primary"
                >
                  Download do CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
