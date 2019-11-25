package myapp

import grails.rest.Resource

@Resource(uri = "/unit")
class Unit {
    String name

    static constraints = {
    }
}
