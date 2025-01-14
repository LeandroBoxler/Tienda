import { Card } from "./card"
import { Search } from "./search";

const cards = Array(16).fill(null);

export const Home = () => {
  return (
    
    <div className="container mx-auto">
      <Search/>
    <div className="grid grid-cols-4 gap-4">
    {cards.map((_, index) => (
          <Card key={index} name="hola" detail="asdasdasd" />
        ))}
    </div>
    </div>
  )
}
