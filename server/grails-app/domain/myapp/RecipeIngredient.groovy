package myapp

import grails.rest.Resource

@Resource(uri = "/recipeingredient")
class RecipeIngredient {
    static belongsTo = [recipe: Recipe, ingredient: Ingredient]
    Double amount

    static constraints = {
    }
}
