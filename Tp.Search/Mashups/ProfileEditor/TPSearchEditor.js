tau.mashups
.addDependency("tau/mashups/TPSearch/tmpl")
.addDependency("tau/mashups/TPSearch/Commands")
.addDependency("libs/jquery/jquery.tmpl")
.addMashup(function (tmpl, cmd, jqueryTmpl, config) {

    $.tmpl(tmpl).appendTo($("#" + config.placeholderId));

    $(".enable_search").click(function () { cmd.enable(); });
    $(".disable_search").click(function () { cmd.disable(); });

});