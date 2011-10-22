tau.mashups
.addDependency("libs/jquery/jquery")
.addModule("tau/mashups/TPSearch/Commands", function () {

    function Commands() {
		
    }

    Commands.prototype = {
        enable: function () {
            $.ajax({
                url: Application.baseUrl + "/api/v1/Plugins/Searcher/Commands/Enable",
                data: "dada",
                success: function (result) {
                    alert('Enabled');
                },

                error: function (e, r, t) {
                    alert('Error');
                },
                type: 'GET',
                dataType: "json"
            });
        },
        
        disable: function () {
            $.ajax({
                url: Application.baseUrl + "/api/v1/Plugins/Searcher/Commands/Disable",
                data: "dada",
                success: function (result) {
                    alert('Disabled');
                },

                error: function (e, r, t) {
                    alert('Error');
                },
                type: 'GET',
                dataType: "json"
            });
        },
        
        search: function (keyword, success, fail) {
        	// this wil make a call to plugin
        	if (success) {
        		success([2305, 3831]);
        	}
        }

    }

    return new Commands();
});