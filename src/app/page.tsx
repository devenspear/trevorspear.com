import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="whyme">
          <WhyMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
