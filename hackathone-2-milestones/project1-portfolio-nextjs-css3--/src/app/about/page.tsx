import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <Image src="/pp.png" alt="profile-image" className="profile-image" width={200} height={200} />
        <p className='about-paragraph'>
          Hello! {`I'm`} <span className="span1">Afshan Iftikhar</span> & {`I'm a  `}
          <span className="span1"> Frontend Developer & UI/UX designer </span> with a passion for creating beautiful
          and functional websites. With expertise in Html, Css,
          TypeScript, Next.js and Tailwind. I strive to deliver high-quality web solutions that
          exceed client expectations.
        </p>
      </div>
    </section>
  )
}

