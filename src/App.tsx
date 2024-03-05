import './App.css'
import SideMenu from "./components/side-menu.component.tsx";
import WishList from "./components/wishlist.component.tsx";
import {useState} from "react";

function App() {

  const [list, setList] = useState<string[]>([])
  const [edit, setEdit] = useState<boolean>(false)

  return (
    <>
      <WishList list={list} edit={edit}/>
      <SideMenu setList={setList} setEdit={setEdit} edit={edit}/>
    </>
  )
}

export default App
