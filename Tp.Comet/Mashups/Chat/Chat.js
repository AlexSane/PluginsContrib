tau.mashups
.addDependency("libs/Comet")
.addDependency("libs/jquery/jquery")
.addMashup(function (comet) {
	function Chat() { }

	Chat.prototype = {
		chatWindow: null,
		avatar: '',

		start: function () {
			console.log('Starting chat...');

			$('' +
			'<div style="position:absolute; right:0; bottom: 0; border: 1px solid black; background-color:#ffffff;">' +
				'<div id="chatContent" style="width: 300px; height: 300px; overflow: scroll"></div>' +
            '<input type="text" id="chatString" style="width: 250px">' +
            '<input type="button" id="chatButton" style="width: 50px" Value="Send"><br>' +
            '</div>'
			).appendTo('body');

			this.chatWindow = $('#chatContent');

			var sendMessage = $.proxy(this.sendMessage, this);
			$('#chatButton').click(sendMessage);
			$('#chatString').keypress(sendMessage);
			this.avatar = $('li.avatar').html();

			comet.subscribe($.proxy(this.addMessage, this));
		},

		sendMessage: function (event) {
			console.log(event.which);
			if (event && event.which != 13 && event.which != 1) {
				return;
			}

			if (event && event.which == 13) {
				event.preventDefault();
			}

			var chatString = $('#chatString');
			var text = chatString.val();

			comet.sendMessage(this.avatar + ' ' + text);

			chatString.val('');
		},

		addMessage: function (msg) {
			console.log('Chat: ' + msg.Messages.length);
			for (var i = 0; i < msg.Messages.length; i++) {
				$('<div>' + msg.Messages[i].Text + '</div>').appendTo(this.chatWindow);
			}
			this.chatWindow.animate({ scrollTop: 10000 });
		}
	}

	return new Chat().start();
});