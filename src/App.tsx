import './App.css'
import SideMenu from "./components/side-menu.component.tsx";
import WishList from "./components/wishlist.component.tsx";
import {Key, useEffect, useState} from "react";
import axios from "axios";

type Item = {
  name: string;
  file: String;
  _id: Key
};

function App() {
  const [list, setList] = useState<string[]>([])
  const [edit, setEdit] = useState<boolean>(false)
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(response => {
        const values: string[][] = Object.values(response.data)
        const sliced: string[][] = values.slice(1)
        const flattened: string[] | Item[] = sliced.flat()

        if (flattened.length !== 0) {
          setItems(flattened)
        }
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <>
      <WishList list={list} edit={edit} setList={setList}/>
      <SideMenu setList={setList} setEdit={setEdit} edit={edit}/>
      <div>
        <h1>Items</h1>
        <ul>
          {
            items.map(item => {
                return <li key={item._id}>
                  <h3>{item.name}</h3>
                </li>
              }
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App
