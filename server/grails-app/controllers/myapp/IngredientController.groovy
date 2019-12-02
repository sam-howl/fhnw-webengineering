package myapp

class IngredientController {
	static responseFormats = ['json', 'xml']

    def index() {
        respond Ingredient.list()
    }

    def show(Ingredient ingredient){
        respond ingredient
    }
}
