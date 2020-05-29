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
    }
}

module.exports = User
