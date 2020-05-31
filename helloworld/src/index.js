var m = require("mithril")

var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")

// This makes a simple page with no routes
// we're going to comment thi sout so we can use routes
// m.mount(document.body, UserList)

// routes allow us to define a default route, "list", that the user goes to if they dont go anywhere

// mithril function dot route(render the document.body, default route is /list {
// routes we want to define: the var
// })
m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm,
})
