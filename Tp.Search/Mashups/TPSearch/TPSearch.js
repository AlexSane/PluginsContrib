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

		search: function (keyword) {
			cmd.search(keyword, $.proxy(this.searchSuccess, this), $.proxy(this.searchFail, this))
		},

		searchSuccess: function (res) {
			$.each(res, function (i, val) {
				results.Add(new resultItem(val));
			});
		},

		searchFail: function () {

		}
	}

	new TPSearch().render();
});