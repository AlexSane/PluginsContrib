tau.mashups.addModule("libs/Comet", function () {
    function Comet() { }

    Comet.prototype = {
        subscribers: null,
        subscriberId: null,

        subscribe: function (callback) {

            if (subscribers == null) {
                subscribers = [];
            }

            subscribers.push(callback);

            if (subscriberId == null) {
                $.ajax({
                    url: Application.baseUrl + "/api/v1/Plugins/Tp.Comet/Commands/Subscribe",
                    data: "",

                    success: function (result) {
                        subscriberId = result;
                    },

                    error: function (e, r, t) {
                        alert("Can't subscribe");
                    },

                    type: 'GET',
                    dataType: "json"
                });
            }
        },

        sendMessage: function (message) {

        }
    }

    return new Comet();
});