package myapp

class Recipe {
    String name
    String description
    String category
    Integer minutesToMake
    String pictureUrl

    static hasMany = [ingredients: Ingredient]

    static constraints = {
        name maxSize: 255, blank: false
        description maxSize: 255, blank: false
        category maxSize: 255, blank: false
        ingredients nullable: true
        pictureUrl nullable: true, maxSize: 255, blank: false
    }
}
