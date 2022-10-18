import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifApp = () => {
  

  const [categorias, setCategorias] = useState(["Batman"]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categorias.map((category) => (
        <GifGrid key = { category }  category={ category } /> 
        ))
      }

    </>
  );
};
