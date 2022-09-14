import './App.css';
import SimpsonComponent from './components/Simpson/SimpsonsComponent'

function App() {
  return (
      <div className="wrap">
        <SimpsonComponent
            itemName={'bart'}
            pic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            text={'Bartholomew JoJo "Bart" Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.'}
        />
        <SimpsonComponent
            itemName={'homer'}
            pic={'https://i.pinimg.com/736x/71/ce/e1/71cee113237e9193098be86266bbde45.jpg'}
            text={'Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons.'}
        />
        <SimpsonComponent
            itemName={'Marge'}
            pic={'https://e7.pngegg.com/pngimages/400/900/png-clipart-marge-simpson-homer-simpson-bart-simpson-lisa-simpson-maggie-simpson-bart-simpson-marge-simpson-homer-simpson.png'}
            text={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is a character in the American animated sitcom The Simpsons and part of the eponymous family.'}
        />
        <SimpsonComponent
            itemName={'Lisa'}
            pic={'https://i.pinimg.com/originals/ff/f0/e7/fff0e76fb2c6ea822c7c8631f1e1c24e.png'}
            text={'Lisa Marie Simpson is a fictional character in the animated television series The Simpsons.'}
        />
        <SimpsonComponent
            itemName={'Meggie'}
            pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
            text={'Margaret Evelyn Lenny "Maggie" Simpson is a fictional character in the animated television series The Simpsons and a part of the Simpson family, notably the youngest member.'}
        />
      </div>
  );
}

export default App;
