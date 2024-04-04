import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "The Big Bang Theory",
    "I'm Just Ken",
  ]);

  const categoriesLowerCase = categories.map((category) =>
    category.toLowerCase()
  );

  const onAddCategory = (newCategory) => {
    const lowerCaseNewCategory = newCategory.toLowerCase();
    if (categoriesLowerCase.includes(lowerCaseNewCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Explorer</h1>
      <p className="phrase">
        Bring your projects to life with amazing gifs! 🚀✨
      </p>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
