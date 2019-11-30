package myapp

class BootStrap {

    def init = { servletContext ->

        def eggs = new Ingredient(name: "Eggs", amount: 3).save(flush: true)
        def salt = new Ingredient(name: "Salt", unit: "tsp", amount: 0.5).save(flush: true)
        def pepper = new Ingredient(name: "Pepper", unit: "tsp", amount: 0.5).save(flush: true)

        def scrambledEggs = new Recipe(name: "Scrambled Eggs",
                description: "Eggs in the frypan, add salt and pepper and scramble the eggs.",
                category: "breakfast",
                minutesToMake: 10,
                pictureUrl: "https://thestayathomechef.com/wp-content/uploads/2019/03/Scrambled-Eggs-3.jpg",
                ingredients: [eggs, salt, pepper]
        ).save(flush: true)

    }
    def destroy = {
    }
}
