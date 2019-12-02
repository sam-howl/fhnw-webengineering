package myapp

class Recipe {
    String name
    String description
    String category
    Integer minutesToMake
    String pictureUrl

    static hasMany = [ingredients: Ingredient]

    static constraints = {
        name maxSize: 255
        description maxSize: 255
        category maxSize: 255
        ingredients nullable: true
        pictureUrl nullable: true, maxSize: 255
    }
}
