import Recipe from "./RecipeItem.js";

const RecipeList = ({ recipes, onEdit, onDelete }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          recipe={recipe}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        ></Recipe>
      ))}
    </div>
  );
};

export default RecipeList;
