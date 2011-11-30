tau.mashups.addModule("libs/Comet", function () {
    function Comet() { }

    Comet.prototype = {
        callbacks: null,
        subscriber: null,
        timer: null,

        subscribe: function (callback) {

            if (this.callbacks == null) {
                this.callbacks = [];
            }

            this.callbacks.push(callback);

            if (this.subscriber == null) {
                $.ajax({
                    url: Application.baseUrl + "/api/v1/Plugins/Tp.Comet/Commands/Subscribe",
                    data: "Eugene",
                    dataType: "json",

                    success: $.proxy(this._onSubscribe, this),

                    error: function (e, r, t) {
                        alert("Can't subscribe");
                    },

                    type: 'POST',
                });
            }

        },

        _onSubscribe: function (subscriber) {
            this.subscriber = subscriber;
            console.log(this.subscriber.Name + ':' + this.subscriber.SubscriberId);
            this._startRefresh();
         },

        _startRefresh: function () {
            this.timer = setTimeout($.proxy(this._refresh, this), 1000);
        },

        _refresh : function() {
                $.ajax({
                    url: Application.baseUrl + "/api/v1/Plugins/Tp.Comet/Commands/Refresh",

                    data: this.subscriber.SubscriberId,
                    dataType: "json",

                    success: $.proxy(this._onRefresh, this),

                    error: function (e, r, t) {
                        console.log("Can't refresh");
                    },

                    type: 'POST',
                });
            

        },
        
        _onRefresh: function (result) {
            console.log('Msg recieved: ' + result);
            for(var i = 0; i < this.callbacks.length; i++) {
                if (this.callbacks[i]) {
                    this.callbacks[i](result);
                }
            }
            this._startRefresh();
        },

        sendMessage: function (message) {

        }
    }

    return new Comet();
});