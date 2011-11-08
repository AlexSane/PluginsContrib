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

		search: function (searchString, success, fail) {
			$.ajax({
				url: Application.baseUrl + "/api/v1/Plugins/Searcher/Commands/Search",
				data: searchString,
				success: success,
				error: fail,
				type: 'POST',
				dataType: "json"
			});
		},

		getEntity: function (ID, success, fail) {
			$.ajax({
				url: Application.baseUrl + "/api/v1/Generals/" + ID + "?Include=[Name,Description,EntityType,Comments[Description]]",
				success: function (result) {
					success(result);
				},

				error: function (e, r, t) {
					fail(e, r, t);
				},
				type: 'GET',
				dataType: "json"
			});
		}

	}

	return new Commands();
});