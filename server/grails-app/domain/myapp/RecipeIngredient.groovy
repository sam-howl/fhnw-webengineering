package myapp

import grails.rest.Resource

class RecipeIngredient {
    static belongsTo = [recipe: Recipe, ingredient: Ingredient]
    Double amount

    static constraints = {
    }
}
