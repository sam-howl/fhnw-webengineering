package myapp

class UrlMappings {

    static mappings = {
        get "/recipe"(controller: "recipe", action:"index")
        get "/recipe/$id"(controller: "recipe", action:"show")
        get "/ingredient"(controller: "ingredient", action:"index")
        get "/ingredient/$id"(controller: "ingredient", action:"show")
        post "/recipe"(controller: "recipe", action: "save")
        delete "/recipe/$id"(controller: "recipe", action: "delete")
        put "/recipe/$id"(controller: "recipe", action: "update")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
