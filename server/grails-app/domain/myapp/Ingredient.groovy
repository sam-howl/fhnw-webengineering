package myapp

import grails.rest.Resource

@Resource(uri = "/ingredient")
class Ingredient {
    String name
    Unit unit

    static hasMany = [recipeIngredients: RecipeIngredient]

    //static belongsTo = [Recipe]
    //static hasMany = [recipes: Recipe]

    static constraints = {
        unit nullable: true
    }
}
