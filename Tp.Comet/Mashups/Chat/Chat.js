tau.mashups
.addDependency("libs/Comet")
.addDependency("libs/jquery/jquery")
.addMashup(function (comet) {
    function Chat() { }

    Chat.prototype = {
        chatWindow: null,

        start: function () {
            console.log('Starting chat...');

            this.chatWindow = $('<div style="position:absolute; width: 400px; height: 600px; right:0; top:0; border: 1px solid black; background-color:#ffffff; overflow: scroll-y">' +
                '<input type="text" id="chatString">' +
                '<input type="button" id="chatButton"><br>' + 
                '</div>');
            $('body').append(this.chatWindow);

            comet.subscribe($.proxy(this.addMessage, this));
        },

        addMessage: function (msg) {
            console.log('Chat: ' + msg);
            for (var i = 0; i < msg.Messages.length; i++) {
                $('<div>' + msg.Messages[i] + '</div>').appendTo(this.chatWindow);
            }
        }
    }

    return new Chat().start();
});