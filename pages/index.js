import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Mota | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfolio profissional de Leonardo Mota, Desenvolvedor Full Stack com experiência em React, Node.js e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
} 