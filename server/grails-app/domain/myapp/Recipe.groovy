package myapp

import grails.rest.Resource

class Recipe {
    String name
    String description
    Category category

    static hasMany = [recipeIngredients: RecipeIngredient]
    static fetchMode = [recipeIngredients: "eager"]

    static constraints = {
        recipeIngredients nullable: true
    }

    static mapping = {
        recipeIngredients lazy: false
    }
}
