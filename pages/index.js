import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Mota | Engenheiro de Sistemas & Python Full Stack</title>
        <meta name="description" content="Portfólio profissional de Leonardo Mota com foco em engenharia de sistemas, arquitetura de dados, cloud e automação." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
} 
