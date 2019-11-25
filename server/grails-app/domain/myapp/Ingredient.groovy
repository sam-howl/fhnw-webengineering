package myapp

import grails.rest.Resource

class Ingredient {
    String name
    Unit unit

    static hasMany = [recipeIngredients: RecipeIngredient]

    static constraints = {
        unit nullable: true
    }
}
