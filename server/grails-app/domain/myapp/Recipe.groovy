package myapp

class Recipe {
    String name
    String description
    String category
    Integer minutesToMake
    String pictureUrl

    static hasMany = [ingredients: Ingredient]

    static constraints = {
        ingredients nullable: true
        pictureUrl nullable: true
    }
}
