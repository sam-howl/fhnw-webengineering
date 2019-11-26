package myapp

import grails.rest.Resource

@Resource(uri = "/ingredient")
class Ingredient {
    String name
    String unit


    //static hasMany = [recipeIngredients: RecipeIngredient]

    static constraints = {
        unit nullable: true
    }
}
