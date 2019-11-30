package myapp

class BootStrap {

    def init = { servletContext ->

        def eggs = new Ingredient(name: "Eggs").save(flush: true)
        def salt = new Ingredient(name: "Salt", unit: "tsp").save(flush: true)
        def pepper = new Ingredient(name: "Pepper", unit: "tsp").save(flush: true)

        def scrambledEggs = new Recipe(name: "Scrambled Eggs",
                description: "Eggs in the frypan, add salt and pepper and scramble the eggs.",
                category: "breakfast",
                minutesToMake: 10,
                ingredients: [eggs, salt, pepper]
        ).save(flush: true)

//        scrambledEggs.addToIngredients(eggs).save(flush: true)
//        scrambledEggs.addToIngredients(salt).save(flush: true)
//        scrambledEggs.addToIngredients(pepper).save(flush: true)

//        scrambledEggs.addToIngredients(eggs).save()
//        scrambledEggs.addToIngredients(salt).save()
//        scrambledEggs.addToIngredients(pepper).save()

        //prints a list with ingredients: [myapp.Ingredient : 1, myapp.Ingredient : 2, myapp.Ingredient : 3]
        //when visiting http://localhost:8080/recipe the list is []
        //println(scrambledEggs.getIngredients())


/*

        // Zwischentabelle ohne Irgendwas
        def eggs = new Ingredient(name: "Eggs").save()
        def salt = new Ingredient(name: "Salt", unit: "tsp").save()
        def pepper = new Ingredient(name: "Pepper", unit: "tsp").save()

        //Recipes
        def scrambledEggs = new Recipe(name: "Scrambled Eggs",
                description: "Eggs in the frypan, add salt and pepper and scramble the eggs.",
                category: "breakfast")
                .save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: eggs, amount: 2).save()).save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: salt, amount: 0.25).save()).save()
        scrambledEggs.addToRecipeIngredients(new RecipeIngredient(recipe: scrambledEggs, ingredient: pepper, amount: 0.25).save()).save()
*/

        /*
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
        */
    }
    def destroy = {
    }
}
