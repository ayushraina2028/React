import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
    const [items,setItems] = useState([
      {
          id: 1,
          checked: false,
          item: "Paneer Noodles"
      },
      {
          id: 2,
          checked: false,
          item: "Veg Biryani",
      },
      {
          id: 3,
          checked: false,
          item: "Dosa"
      },
      {
          id: 4,
          checked: false,
          item: "Rajma Chawal"
      }
  ]);

  const handleCheck = (id)=>{
    const newList = items.map((thing)=>(
        thing.id === id ? { ...thing, checked: !thing.checked} : thing
    ));
    setItems(newList)
  }

  const handleDelete = (id)=>{
    const newList = items.filter((thing)=>thing.id !== id)
    setItems(newList)
  }

  return (
    <div className="App"> 
      <Header/>
      <Content 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer 
      length={items.length}

      />
    </div>
  );
}

export default App;
