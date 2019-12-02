package myapp

class Ingredient {
    String name
    Double amount
    String unit

    static constraints = {
        name maxSize: 255
        unit nullable: true, maxSize: 255
    }
}
