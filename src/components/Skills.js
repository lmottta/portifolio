import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Linguagens",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "VBA", level: 75 },
      ]
    },
    {
      category: "Frameworks & Bibliotecas",
      skills: [
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind", level: 80 },
      ]
    },
    {
      category: "Bancos de Dados & Cloud",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "DynamoDB", level: 75 },
        { name: "AWS", level: 85 },
        { name: "Azure", level: 75 },
        { name: "GCP", level: 70 },
        { name: "SQL Server", level: 85 },
      ]
    },
    {
      category: "DevOps & Ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "Selenium", level: 80 },
        { name: "PyAutoGUI", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Power BI", level: 90 },
      ]
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Minhas Habilidades</h2>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="bg-darkBlue/30 rounded-lg p-6 shadow-xl"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                  {category.category}
                </h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} variants={item}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-200">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-secondary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Tools and Technologies Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-100">
              Ferramentas & Tecnologias
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Python", "Django", "Flask", "JavaScript", "React", "Node.js",
                "AWS", "Docker", "Kubernetes", "Git", "PostgreSQL", "MySQL", 
                "Pandas", "NumPy", "PySpark", "Power BI", "Terraform", "Selenium"
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-darkBlue/20 rounded-lg p-4 text-center hover:bg-accent/10 transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-gray-200">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 