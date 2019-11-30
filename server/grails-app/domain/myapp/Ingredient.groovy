package myapp

class Ingredient {
    String name
    Double amount
    String unit

    static constraints = {
        unit nullable: true
    }
}
