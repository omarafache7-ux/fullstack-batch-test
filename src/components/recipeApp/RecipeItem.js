const Recipe = ({ recipe, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      <p>Preperation Time: {recipe.preperationTime}</p>
      <p>Cooking Time: {recipe.cookingTime}</p>
      <p>Difficulty: {recipe.difficulty}</p>

      <button onClick={onEdit}>Edit Recipe</button>
      <button onClick={onDelete}>Delete Recipe</button>
    </div>
  );
};

export default Recipe;
