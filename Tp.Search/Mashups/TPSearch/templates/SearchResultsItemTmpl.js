tau.mashups
.addModule("tau/mashups/TPSearch/SearchResultsItemTmpl", function () {
	return '<br><div>' +
	'<b>#${Id} ${Name}</b>' +
	'<div>{{html Description}}</div>' +
	'{{each Comments}}' +
		'<p>{{html $value.Description}}</p>' +
	'{{/each}}' +
	'</div>';
});
