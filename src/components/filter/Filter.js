import "./filter.css";
import { subCategory, categorys } from "../../dummy/data";

const Filter = () => {
  return (
    <div className="filter-form-continer">
      <form className="form">
        <label for="category">Filter by a category:</label>
        <select name="category" id="category">
          {categorys.map((category) => {
            return <option value="volvo">{category}</option>;
          })}
        </select>
      </form>
      <form className="form">
        <label for="cars">Filter by a subcategory:</label>
        <select name="cars" id="cars">
          {subCategory.map((subCategory) => {
            return <option value="volvo">{subCategory}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default Filter;
