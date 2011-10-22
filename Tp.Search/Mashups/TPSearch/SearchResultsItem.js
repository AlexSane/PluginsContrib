tau.mashups
.addDependency("tau/mashups/TPSearch/Commands")
.addDependency("libs/jquery/jquery")
.addModule("tau/mashups/TPSearch/SearchResultsItem", function (cmd) {

    function SearchResultsItem(ID) {
    	this._entityID = ID;
    }

    SearchResultsItem.prototype = {
    	_entityID: 0,
    		
        show: function () {

        },
        
        hide: function () {

        }

    }

    return SearchResultsItem;
});