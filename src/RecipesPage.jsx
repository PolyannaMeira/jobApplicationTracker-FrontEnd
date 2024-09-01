import { useEffect, useState } from "react";
import Api from "./Api";
import { Container, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Api.getRecipes().then((data) => setRecipes(data));
  }, []);

  return (
    <Container>
      <h1>Recipes</h1>
      <ListGroup>
        {recipes.map((recipe) => (
          <ListGroup.Item key={recipe.id}>
            <Icon.EggFried className="mx-2" />
            {recipe.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
