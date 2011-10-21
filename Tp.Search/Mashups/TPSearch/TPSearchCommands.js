tau.mashups
.addDependency("libs/jquery/jquery")
.addModule("tau/mashups/TPSearch/Commands", function () {

    function TpSearchCommands() {

    }

    TpSearchCommands.prototype = {
        enable: function () {
            $.ajax({
                url: "/tp/api/v1/Plugins/Searcher/Commands/Enable",
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
                url: "/tp/api/v1/Plugins/Searcher/Commands/Disable",
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
        }

    }

    return new TpSearchCommands();
});