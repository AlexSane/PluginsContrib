tau.mashups
.addDependency("tau/mashups/TPSearch/Commands")
.addDependency("tau/mashups/TPSearch/SearchResultsItemTmpl")
.addDependency("libs/jquery/jquery.tmpl")
.addDependency("tau/mashups/TPSearch/jquery/highlight")
.addModule("tau/mashups/TPSearch/SearchResultsItem", function (cmd, tmpl) {

	function SearchResultsItem(ID) {
		this._entityID = ID;
		this.element = $('<div>Loading...</div>');
		cmd.getEntity(this._entityID, $.proxy(this.entityLoaded, this))
	}

	SearchResultsItem.prototype = {
		_entityID: 0,
		element: null,

		getElement: function () {
			return this.element;
		},

		entityLoaded: function (data) {
			this.prepareData(data);
			this.element.empty();
			$.tmpl(tmpl, data).appendTo(this.element);
		},

		prepareData: function (data) {

			var keywords = ['Windows', 'Ubuntu', 'mac', 'chrome'];


			data.Description = this.shortenAndHighlight(data.Description, keywords);
			$.each(data.Comments, $.proxy(function (i, val) { val.Description = this.shortenAndHighlight(val.Description, keywords); }, this));
		},

		shortenAndHighlight: function (originText, keywords) {

			var newText = $('<div>' + $(originText).text() + '</div>');

			$.each(keywords, function (i, val) {
				newText.highlight(val);
			});

			var count = 0;
			newText.contents().filter(function () { var isText = this.nodeType == Node.TEXT_NODE; if (isText == false) { count = count + 1; }; return isText; }).each(
				function (i, val) {
					var X = 30;
					if (val) {
						var txt = val.textContent.replace(/\s+/g, " ");
						if (txt.length > 2 * X) {
							var start = txt.substring(0, X);
							var end = txt.substring(txt.length - X, txt.length);
							val.textContent = start + ' ... ' + end;
						}
					}
				}
			);

			if (count == 0) {
				return '';
			}
			return newText.html();
		},

		show: function () {

		},

		hide: function () {

		}

	}

	return SearchResultsItem;
});