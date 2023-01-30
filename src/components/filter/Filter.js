import { useContext, useState } from "react";
import "./filter.css";
import { subCategory, categorys, productsData } from "../../dummy/data";
import DataContext from "../../context/DataContext";

const Filter = () => {
  const { products, setProducts } = useContext(DataContext);
  const [categores, setCategores] = useState();
  const [subCategores, subSetCategores] = useState();

  //*filter by category
  const getCatagory = (e) => {
    setCategores(e.target.value);
    if (e.target.value !== "All") {
      const filtered = productsData.filter(
        (product) => product.category === e.target.value
      );
      setProducts(filtered);
      console.log(products);
    } else {
      setProducts(productsData);
    }
  };
  //*filter by sub category
  const getSubCatagory = (e) => {
    subSetCategores(e.target.value);
    if (e.target.value !== "All") {
      const filtered = products.filter(
        (product) => product.subCategory === e.target.value
      );
      setProducts(filtered);
      console.log(products);
    } else {
      setProducts(productsData);
    }
  };
  return (
    <div className="filter-form-continer">
      <form className="form" onChange={(e) => getCatagory(e)}>
        <label for="category">Filter by a category:</label>
        <select name="category" id="category">
          {categorys.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </form>
      <form className="form" onChange={(e) => getSubCatagory(e)}>
        <label for="cars">Filter by a subcategory:</label>
        <select name="cars" id="cars">
          {subCategory.map((subCategory) => {
            return <option value={subCategores}>{subCategory}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default Filter;
