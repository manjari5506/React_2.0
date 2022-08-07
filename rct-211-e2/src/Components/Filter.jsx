import React ,{useState,useEffect}from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const urlCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(urlCategory || []);

  const handleCheckbox = (e) => {
    const opt = e.target.value;
    let newCategory = [...category];
    if (category.includes(opt)) {
      newCategory.splice(newCategory.indexOf(opt), 1);
    } else {
      newCategory.push(opt);
    }

    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      setSearchParams({ category });
    }
  }, [category, dispatch, setSearchParams]);


  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" 
          onChange={handleCheckbox}
          checked={category.includes("Sneakers")}/>
          <label htmlFor="">Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"
          onChange={handleCheckbox}
          checked={category.includes("Loafers")} />
          <label htmlFor="">Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" 
          onChange={handleCheckbox}
          checked={category.includes("Canvas")}/>
          <label htmlFor="">Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" 
          onChange={handleCheckbox}
          checked={category.includes("Boots")}/>
          <label htmlFor="">Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
