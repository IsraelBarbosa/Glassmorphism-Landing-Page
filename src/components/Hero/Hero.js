import Container from "../Container/Container";
import "./Hero.scss";
import heroImg from "../../image/Hero/heroImg.png";
import HeroLayout from "../../layout/HeroLayout/HeroLayout";

function Hero() {
  return (
    <HeroLayout>
      <Container>
        <div className="hero">
          <div className="hero-container-titulo-e-botao">
            <div className="hero-container-titulo">
              <h1 className="hero__titulo">Lorem ipsum dolor sit amet!</h1>
              <p className="hero__paragrafo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                maecenas mattis tellus tristique non. Enim dictum rhoncus
                feugiat purus fringilla dictum est quam aenean.
              </p>
            </div>
            <a className="hero__link" href="./getStarted">
              Get Started
            </a>
          </div>
          <div className="hero-container-img-hero">
            <img
              className="hero__img-hero"
              src={heroImg}
              alt="hero background"
            />
          </div>
        </div>
      </Container>
    </HeroLayout>
  );
}

export default Hero;
