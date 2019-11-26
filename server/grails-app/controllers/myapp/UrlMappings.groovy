package myapp

class UrlMappings {

    static mappings = {
        /*
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")
        */
        get "/recipe"(controller: "recipe", action:"index")
        get "/recipe/$id"(controller: "recipe", action:"show")
        get "/ingredient"(controller: "ingredient", action:"index")
        get "/ingredient/$id"(controller: "ingredient", action:"show")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
