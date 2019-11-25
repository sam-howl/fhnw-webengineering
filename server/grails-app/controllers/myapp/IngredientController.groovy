package myapp


import grails.rest.*
import grails.converters.*

class IngredientController {
	static responseFormats = ['json', 'xml']

    def index() {
        respond Ingredient.list()
    }

    def show(Ingredient ingredient){
        respond ingredient
    }
}
