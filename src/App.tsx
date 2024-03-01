import './App.css'
import SideMenu from "./components/side-menu.component.tsx";
import WishList from "./components/wishlist.component.tsx";
import {useState} from "react";

function App() {
  const [list, setList] = useState<string[]>([])

  return (
    <>
      <WishList list={list}/>
      <SideMenu setList={setList}/>
    </>
  )
}

export default App
