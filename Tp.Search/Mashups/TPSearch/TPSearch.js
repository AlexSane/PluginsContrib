tau.mashups
.addDependency("libs/jquery/jquery.ui")
.addDependency("TPSearch/autocomplete")
.addMashup(function () {

    function TPSearch() { }

    TPSearch.prototype = {
        searchBox: null,
        timer: null,
        timeOut: $.browser.msie ? 200 : 100,

        render: function () {
            this.searchBox = $("#ctl00_hdr_txtSearch");
            this.searchBox.autocomplete({ source: [
                { label: '<b>h</b>ello', value: 1 },
                { label: '<i>w</i>orld', value: 2 }
                ],
                html:true
            });
        },

        onSearchTextChange: function (e) {
            var self = e.data.self;
            var str = self.searchBox.val();

        }
    }

    new TPSearch().render();
});