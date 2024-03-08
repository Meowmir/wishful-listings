import "./App.css";
import SideMenu from "./components/side-menu.component.tsx";
import WishList from "./components/wishlist.component.tsx";
import { useState } from "react";
import { Item } from "./shared/types.ts";

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      <WishList list={list} edit={edit} setList={setList} />
      <SideMenu setList={setList} setEdit={setEdit} edit={edit} />
    </>
  );
}

export default App;
