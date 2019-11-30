package myapp

import grails.gorm.transactions.Transactional

import static org.springframework.http.HttpStatus.CREATED

class RecipeController {
	static responseFormats = ['json', 'xml']
	
    def index() {
        respond Recipe.list()
    }

    def show(Recipe recipe){
        respond recipe
    }

    def save(){
        def jsonObject = request.JSON
        def name = jsonObject.name
        def description = jsonObject.description
        def category = jsonObject.category
        def minutesToMake = jsonObject.minutesToMake
        def ingredientsJson = jsonObject.ingredients

        Recipe recipe = new Recipe(name: name,
                description: description,
                category: category,
                minutesToMake: minutesToMake
        ).save(flush: true)

        for (def ingredient in ingredientsJson){
            def tempIngredient = new Ingredient(name: ingredient.name, unit: ingredient.unit).save(flush: true)
            recipe.addToIngredients(tempIngredient).save(flush: true)
        }

        respond recipe, [formats: ['json'], status: CREATED]
    }

    def delete(Recipe recipe) {
        def ingredients = recipe.ingredients
        for (def ingredient in ingredients){
            ingredient.delete()
        }
        recipe.delete(flush: true)
        response.status = 204
    }
}