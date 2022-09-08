import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";

import JokesData from "./components/JokesData";
import Data from "./components/Data";

const cardElements = Data.map((card) => {
  return (
    <Card
      image={card.image}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.country}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
    />
  );
});

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;

/*function App() {
  const jokeElements = JokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{jokeElements}</div>;
}

export default App;

/*function App() {
  return (
    <div className="App">
      <Prac />
      <Card
        image="https://images.unsplash.com/photo-1657648098817-0b36eb60c904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        rating={5.0}
        reviewCount={6}
        country="Eswatini"
        title="Life lessons with Katie"
        price={136}
      />
    </div>
  );
}

export default App;*/
