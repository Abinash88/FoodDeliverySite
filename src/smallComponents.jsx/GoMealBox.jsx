import React from "react";
import GoMailSingleItem from "./GoMailSingleItem";

const GoMealBox = ({ MealBox }) => {
  return (
    <div className="gomailboxContainer">
      <div className="GomealBox">
        {MealBox?.slice(0, 3).map((item) => {
          return (
            <>
              <div className="singlegomeal">
                <GoMailSingleItem key={item.id} item={item} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GoMealBox;
