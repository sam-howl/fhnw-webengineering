package myapp

import grails.rest.Resource

class Recipe {
    String name
    String description
    String category

    // 1 to many connection to Ingredients
    static hasMany = [ingredients: Ingredient]

    //static hasMany = [recipeIngredients: RecipeIngredient]
    //static fetchMode = [ingredients: "eager"]

    static constraints = {
        ingredients nullable: true
    }

    /*
    static mapping = {
        ingredients lazy: false
    }
     */
}
