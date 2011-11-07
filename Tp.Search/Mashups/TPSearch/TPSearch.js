tau.mashups
.addCSS('style.css')
.addDependency("tau/mashups/TPSearch/Commands")
.addDependency("tau/mashups/TPSearch/SearchResults")
.addDependency("tau/mashups/TPSearch/SearchResultsItem")
.addDependency("libs/jquery/jquery.ui")
.addMashup(function (cmd, results, resultItem) {

	function TPSearch() { }

	TPSearch.prototype = {
		searchPanel: null,
		searchBox: null,
		timer: null,
		timeOut: 500,

		render: function () {

			var searchProxy = $.proxy(this.onSearchTextChange, this);

			this.searchBox = $('.search').find('input[type="text"]');
			//this.searchBox.keyup(searchProxy);

			this.searchPanel = $('#ctl00_hdr_Panel1');
			this.searchPanel.attr('onkeypress', null);
			this.searchPanel.keypress(searchProxy);
		},

		onSearchTextChange: function (e) {

			if (e.which != 13) return true;

			var str = this.searchBox.val();
			this.search(str);

			return false;
		},

		search: function (text) {
			var keywords = this.getKeywords(text);
			cmd.search(keywords, $.proxy(this.searchSuccess, this), $.proxy(this.searchFail, this))
		},

		getKeywords: function (text) {
			var validKeywords = [];
			var keywords = text.replace(/\W+/g, " ").split(' ');
			$.each(keywords, function (i, v) {
				if (v) {
					console.log(v);
					validKeywords.push(v);
				}
			});

			return validKeywords;
		},

		searchSuccess: function (res) {
			var keywords = res.Keywords;
			$.each(res.Items, function (i, val) {
				results.Add(new resultItem(val, keywords));
			});
		},

		searchFail: function () {

		}
	}

	new TPSearch().render();
});