import Hero from "@/components/hero";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";


function Home () {
  return(
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}
export default Home;