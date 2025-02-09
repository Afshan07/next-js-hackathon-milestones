import Link from 'next/link'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>
        {`I'm`} a passionate web developer creating amazing digital experiences.
      </p>
      <Link href="#contact" className="cta-button">Get in Touch</Link>
    </section>
  )
}


