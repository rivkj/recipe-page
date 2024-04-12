interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
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
          
        ))}
       </div>
    </main>
  );
}
