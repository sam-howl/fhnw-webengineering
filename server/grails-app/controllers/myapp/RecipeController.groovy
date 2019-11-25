package myapp


import grails.rest.*
import grails.converters.*

class RecipeController {
	static responseFormats = ['json', 'xml']
	
    def index() {
        respond Recipe.list()
    }

    def show(Recipe recipe){
        respond recipe
    }
}
