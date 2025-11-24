import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  return (
    <>
      <Navbar />

      <h1>My Cards</h1>

      <Card 
        image="https://via.placeholder.com/150"
        title="Card One"
        description="This is the first card"
      />

      <Card 
        image="https://via.placeholder.com/150"
        title="Card Two"
        description="This is the second card"
      />
    </>
  );
}
