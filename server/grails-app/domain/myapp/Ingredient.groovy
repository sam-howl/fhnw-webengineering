package myapp

import grails.rest.Resource

class Ingredient {
    String name
    String unit

    static constraints = {
        unit nullable: true
    }
}
