tau.mashups
.addDependency("tau/mashups/TPSearch/Commands")
.addDependency("tau/mashups/TPSearch/SearchResults")
.addDependency("tau/mashups/TPSearch/SearchResultsItem")	
.addDependency("libs/jquery/jquery.ui")
.addMashup(function (cmd, results, resultItem) {

    function TPSearch() { }

    TPSearch.prototype = {
        searchBox: null,
        timer: null,
        timeOut: 500,

        render: function () {

			$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: Application.baseUrl + "/JavaScript/Mashups/Searcher TPSearch/tpsearch.css"
			}).appendTo("head");
           	
            this.searchBox = $('.search').find('input[type="text"]');
            this.searchBox.keyup($.proxy(this.onSearchTextChange, this));
        },

        onSearchTextChange: function () {
            var str = this.searchBox.val();

        	if (this.timer != null) {
        		clearTimeout(this.timer);
        	}
        	
    		this.timer = setTimeout($.proxy(function() { this.timer = null; this.search(str); }, this), this.timeOut);

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