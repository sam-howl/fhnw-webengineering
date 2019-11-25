package myapp

class BootStrap {

    def init = { servletContext ->
        //Units
        def tsp = new Unit(name: "tsp").save()
        def cup = new Unit(name: "cup").save()

        //Ingredients
        def eggs = new Ingredient(name: "Eggs").save()
        def salt = new Ingredient(name: "Salt", unit: tsp).save()
        def pepper = new Ingredient(name: "Pepper", unit: tsp).save()

        //Categories
        def breakfast = new Category(name: "Breakfast").save()
        def lunch = new Category(name: "Lunch").save()

        //Recipes
        def scrambledEggs = new Recipe(name: "Scrambled Eggs",
                description: "Eggs in the frypan, add salt and pepper and scramble the eggs.",
                category: breakfast)
                .save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: eggs, amount: 2).save()).save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: salt, amount: 0.25).save()).save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: pepper, amount: 0.25).save()).save()

        def friedEggs = new Recipe(name: "Fried Eggs",
                description: "Eggs in the frypan, add salt and pepper and do not scramble the eggs.",
                category: lunch,
                ingredients: [eggs, salt, pepper]).save()
        friedEggs.addToRecipeIngredients(new RecipeIngredient(recipe: friedEggs, ingredient: eggs, amount: 2).save()).save()
        friedEggs.addToRecipeIngredients(new RecipeIngredient(recipe: friedEggs, ingredient: salt, amount: 0.25).save()).save()
        friedEggs.addToRecipeIngredients(new RecipeIngredient(recipe: friedEggs, ingredient: pepper, amount: 0.25).save()).save()
    }
    def destroy = {
    }
}
