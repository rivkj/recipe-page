import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  marination: string,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
       <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <Card key={recipe.id}>
            <CardHeader>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
                <CardContent>
                  <p>{recipe.description}</p>
                </CardContent>
                <CardFooter>
                  <button>View Recipe</button>
                  {recipe.marination && <p>Marination time not added to actual recipe time!</p>}
                </CardFooter>
              </div>
            </CardHeader>
          </Card>
        ))}
       </div>
    </main>
  );
}
