tau.mashups
.addDependency("tau/mashups/TPSearch/SearchResultsTmpl")
.addDependency("libs/jquery/jquery.ui")
.addModule("tau/mashups/TPSearch/SearchResults", function (tmpl) {

	function SearchResults() {
		this._dialog = $(tmpl);
		$('body').append(this._dialog);
		this._dialog.dialog({ autoOpen: false, width: 900, height: 450 });
	}

	SearchResults.prototype = {
		_dialog: null,
		Add: function (item) {
			this._dialog.append(item.getElement());
			this._dialog.dialog('open');

		}
	}

	return new SearchResults();
});