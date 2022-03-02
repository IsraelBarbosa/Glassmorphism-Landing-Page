import "./ContainerHeaderEHero.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import Circle from "../Circle/Circle";

function ContainerHeaderEHero() {
  return (
    <div className="container-header-e-hero">
      <Circle />
      <Container>
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default ContainerHeaderEHero;
