import { useState } from "react";
import '../styles/seat.css'


export default function Seat () {
  const [checkedItems, setCheckedItems] = useState(Array(38).fill(false));

  const handleCheckboxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="checkbox-grid">
      {checkedItems.map((isChecked, index) => (
        <label key={index} className={`custom-checkbox ${isChecked ? 'checked' : ''}`} onClick={() => handleCheckboxClick(index)}>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  );
}

