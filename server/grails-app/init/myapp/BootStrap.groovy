package myapp

class BootStrap {

    def init = { servletContext ->

        def eggs = new Ingredient(name: "Eggs", amount: 3).save(flush: true)
        def salt = new Ingredient(name: "Salt", unit: "tsp", amount: 0.5).save(flush: true)
        def pepper = new Ingredient(name: "Pepper", unit: "tsp", amount: 0.5).save(flush: true)

        def scrambledEggs = new Recipe(name: "Scrambled Eggs",
                description: "Eggs in the frypan, add salt and pepper and scramble the eggs.",
                category: "Breakfast",
                minutesToMake: 10,
                pictureUrl: "https://thestayathomechef.com/wp-content/uploads/2019/03/Scrambled-Eggs-3.jpg",
                ingredients: [eggs, salt, pepper]
        ).save(flush: true)

        def gin = new Ingredient(name: "gin", unit: "ounces", amount: 2).save(flush: true)
        def greenChartreuse = new Ingredient(name: "Green Chartreuse", unit: "ounces", amount: 0.5).save(flush: true)
        def limeJuice = new Ingredient(name: "fresh lime juice", unit: "ounces", amount: 0.5).save(flush: true)

        def greenGhost = new Recipe(name: "Green Ghost",
                description: "Fill a cocktail shaker with ice. Add gin, Chartreuse, and lime juice. Shake until well chilled, about 15 seconds. Strain into cocktail glass and serve.",
                category: "Drinks",
                minutesToMake: 10,
                pictureUrl: "https://www.seriouseats.com/recipes/images/2015/06/20150618-three-ingredient-cocktails-green-ghost-vicky-wasik.jpg",
                ingredients: [gin, greenChartreuse, limeJuice]
        ).save(flush: true)
    }
    def destroy = {
    }
}
