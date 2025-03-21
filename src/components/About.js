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
            {/* Bio Info */}
            <div className="bg-darkBlue/50 rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Quem Sou Eu</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sou um apaixonado por tecnologia, e quem não é? Tenho 21 anos de experiência em TI 
                onde os últimos 10 anos venho me dedicando à performance de negócios, utilizando 
                BI/Python/No-code/Cloud Computing.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Com experiência em desenvolvimento fullstack, tenho trabalhado
                com diversas tecnologias e frameworks para entregar aplicações de alta qualidade.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Minha abordagem é focada na resolução de problemas, com forte ênfase em qualidade, 
                escalabilidade e experiência do usuário.
              </p>
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-100">Interesses Pessoais</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> Novas Tecnologias
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> Desenvolvimento Ágil
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> UI/UX Design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> Open Source
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> Arquitetura de Software
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-accent mr-2">▹</span> Cloud Computing
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Details */}
            <div className="bg-darkBlue/50 rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Detalhes Pessoais</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 mb-1">Nome:</p>
                  <p className="text-gray-100 font-medium">Leonardo Mota</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Localização:</p>
                  <p className="text-gray-100 font-medium">Feira de Santana - BA</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Email:</p>
                  <p className="text-gray-100 font-medium">dev.lamota@gmail.com</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Telefone:</p>
                  <p className="text-gray-100 font-medium">(47) 99202-2771</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">LinkedIn:</p>
                  <p className="text-gray-100 font-medium">@devmota</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Portfólio:</p>
                  <p className="text-gray-100 font-medium">www.attonweb.com.br</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-100">Educação</h4>
                <div className="mb-4">
                  <p className="text-gray-100 font-medium">Bacharel em Sistemas de Informação</p>
                  <p className="text-gray-400">Universidade Presbiteriana Mackenzie</p>
                  <p className="text-gray-400 text-sm">2004 - 2009</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-100 font-medium">Pós-Graduação em Segurança da Informação</p>
                  <p className="text-gray-400">Instituto de Gestão e Tecnologia da Informação</p>
                  <p className="text-gray-400 text-sm">2011 - 2012</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-100 font-medium">MBA em Gestão de Projetos</p>
                  <p className="text-gray-400">Fundação Getúlio Vargas</p>
                  <p className="text-gray-400 text-sm">2013 - 2015</p>
                </div>
                
                <div>
                  <p className="text-gray-100 font-medium">Mestrado em Análise de Dados</p>
                  <p className="text-gray-400">Universidade Estadual de Feira de Santana</p>
                  <p className="text-gray-400 text-sm">2016 - 2018</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="/images/profile/Leonardo_Mota-2.pdf" 
                  target="_blank"
                  className="inline-block btn-primary"
                >
                  Download CV
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