package myapp


import grails.rest.*
import grails.converters.*

class CategoryController {
	static responseFormats = ['json', 'xml']

    def show(Category category){
        respond category
    }
}
