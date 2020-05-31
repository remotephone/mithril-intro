var m = require("mithril")

var User = {
    // initialize an empty list
    list: [],
    // call an external resource to load that list
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            // using cookies, not necessarily user/pass
            withCredentials: true,
        })
        .then(function(result) {
            // mithril assumes data returned is json
            User.list = result.data
            console.log(result.data)
        })
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            User.current = result
        })
    },

    save: function() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            body: User.current,
            withCredentials: true,
        })
    }
}

module.exports = User
