import React from "react";
import classnames from "classnames";
import { TagsFactory } from "../common/Tag";

const CateogyFilter: React.FC<CateogyFilterProps> = (props) => {
  return (
    <div className="filter-container">
      {props.categories.map((category) => (
        <div
          className={classnames("category", {
            disabled: !category.active,
          })}
          onClick={() => {
            props.onCategoryStateChange(category.name, !category.active);
          }}
        >
          {TagsFactory.create({
            name: category.name,
            category: true,
          })}
        </div>
      ))}
      <style jsx>{`
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .category {
          flex-shrink: none;
          margin-bottom: 5px;
          max-width: 500px;
        }
        .category.disabled {
          opacity: 0.7;
        }
        .category:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CateogyFilter;

export interface CateogyFilterProps {
  categories: {
    name: string;
    active: boolean;
  }[];
  onCategoryStateChange: (name: string, active: boolean) => void;
}