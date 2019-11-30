package myapp

import grails.rest.Resource

class Ingredient {
    String name
    String amount
    String unit

    static constraints = {
        unit nullable: true
    }
}
