import "./globals.css";
import Header from './components/header';
import Hero from './components/hero';
import About from './about/page';
import Skills from './skills/page';
import Contact from './contact/page';
import Footer from './components/footer';



export default function Home() {
  return (
     <div>
       <Header />
         <main>
           <Hero />
           <About />
           <Skills />
           <Contact />
         </main>
       <Footer />
     </div>
  )
}
