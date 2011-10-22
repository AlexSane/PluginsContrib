tau.mashups
.addDependency("libs/jquery/jquery.ui")
.addModule("tau/mashups/TPSearch/SearchResults", function () {

    function SearchResults() {
    	this._dialog = $('<div title="Search Results"></div>');
    	$('body').append(this._dialog);
    	this._dialog.dialog({ autoOpen: false });
    }

    SearchResults.prototype = {
    	_dialog : null,
        Add: function (item) {
        	this._dialog.dialog('open');
			
        }
    }

    return new SearchResults();
});