import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  marination: boolean,
  id: string,
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4001/recipes', { cache: "no-cache"})

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()
  console.log("Recipes array:", recipes);
  return (
    <main>
       <div className="grid grid-cols-3 gap-4">
       {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar> 
                <AvatarImage src={` /img/${recipe.image}`} alt="Recipe image"/>
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
                <CardContent>
                  <p>{recipe.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <button>View Recipe</button>
                  {recipe.marination && <p>Marination needed!</p>}
                </CardFooter>
              </div>
            </CardHeader>
          </Card>
        ))}
       </div>
    </main>
  );
}
