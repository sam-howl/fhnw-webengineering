package myapp


import grails.rest.*
import grails.converters.*

class UnitController {
	static responseFormats = ['json', 'xml']

    def show(Unit unit){
        respond unit
    }
}
