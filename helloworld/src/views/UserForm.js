var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault()
                    User.save()
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: function (e) {User.current.firstName = e.target.value},
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placebholder=Last name]", {
                oninput: function (e) {User.current.lastName =  e.target.value},
                value: User.current.lastName
            }),
            m("button.button[type=button]", "Save"),
        ])
    }
}
