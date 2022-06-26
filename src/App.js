import './App.css';
import Shoes from './shoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shoes name="Adidas" size={40} price="325$" img="https://www.sneakerfiles.com/wp-content/uploads/2021/03/adidas-superstar-light-purple-gx2538-release-date-info.jpg" />
        <Shoes name="Nike" size={39} price="250$" img="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F05%2Fnike-dunk-low-purple-pulse-yellow-strike-details-release-tw.jpg?w=960&cbr=1&q=90&fit=max" />
        <Shoes name="Reebok" size={39.5} price="200$" img="https://images.stockx.com/images/Reebok-Club-C-85-Eric-Emanuel-White-Purple-Yellow.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1613351778&q=75" />
        <Shoes name="New balance" size={38} price="140$" img="https://m.media-amazon.com/images/I/81rCjJ9U0UL._AC_SR255,340_.jpg" />
        <Shoes name="diadora" size={37.25} price="123$" img="https://images.stockx.com/images/Diadora-N-9000-Packer-Raekwon-Purple-Tape.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606318036" />
       
      </header>

    </div>
  );
}

export default App;
