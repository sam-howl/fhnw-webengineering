package myapp

import grails.rest.Resource

@Resource(uri = "/recipe")
class Recipe {
    String name
    String description
    Category category

    static hasMany = [recipeIngredients: RecipeIngredient]
    static fetchMode = [recipeIngredients: "eager"]

    //List<Tuple2<Integer,Ingredient>> ingredients
    //static hasMany = [ingredients: Tuple<Integer,Ingredient>]

    //static hasMany = [ingredients: Ingredient]

    static constraints = {
        recipeIngredients nullable: true
    }

    static mapping = {
        recipeIngredients lazy: false
    }
}
