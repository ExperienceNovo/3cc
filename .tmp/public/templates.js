angular.module('templates-app', ['about/index.tpl.html', 'artist/index.tpl.html', 'artists/index.tpl.html', 'audiences/index.tpl.html', 'dashboard/index.tpl.html', 'event/index.tpl.html', 'footer/index.tpl.html', 'home/index.tpl.html', 'login/index.tpl.html', 'merch/index.tpl.html', 'nav/index.tpl.html', 'register/index.tpl.html', 'venue/index.tpl.html', 'venues/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <h2>Three Corners Collective</h2>\n" +
    "        <h3 style=\"color:black\">Our Mission</h3>\n" +
    "        <p>empower creators to find their highest excitment - engeder guidence and structural expertise: facilitate success</p>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"container\">\n" +
    "        <h3>Artists</h3>\n" +
    "        <h3>Audiences</h3>\n" +
    "        <h3>Venues</h3>\n" +
    "        <p>the three corners of our creative paradigm</p>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"\">\n" +
    "            <h2>The Team</h2>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\"><a href=\"artist/matt-phillips\">Matt Phillips</a></h3>\n" +
    "                <p>Music guy</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Trevor Overman</h3>\n" +
    "                <p>cre8</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Cameron Cook</h3>\n" +
    "                <p>tri-athlete<p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Gabriel Reynolds</h3>\n" +
    "                <p>Music Director</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Sarah Deweese</h3>\n" +
    "                <p>Cool Kat</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Maura Hartzman</h3>\n" +
    "                <p>Cat Mom</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Stephanie</h3>\n" +
    "                <p>Booking</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">CPA</h3>\n" +
    "                <p>CPA</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("artist/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("artist/index.tpl.html",
    "<style>\n" +
    "	.avatar {\n" +
    "		position:absolute;\n" +
    "		top:8.4em;\n" +
    "		margin: 0 auto;\n" +
    "		background: #fff;\n" +
    "		max-width: 15em;\n" +
    "		height: 15em;\n" +
    "		padding: 0.25em;\n" +
    "		border-radius: .7em;\n" +
    "	}\n" +
    "	.member-cover{\n" +
    "		max-height:17em;\n" +
    "		width: 100%;\n" +
    "		overflow: hidden;\n" +
    "	}\n" +
    "	.member-cover img{\n" +
    "		width: 100%;\n" +
    "		margin-top: -10%\n" +
    "	}\n" +
    "</style>	\n" +
    "\n" +
    "\n" +
    "<div class=\"profile-header\">\n" +
    "	<div class=\"member-cover\">\n" +
    "		<img src=\"images/3ccbg.jpg\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<div style=\"\">\n" +
    "			<img class=\"avatar\" ng-src=\"images/bg.png\"/>\n" +
    "			<div class=\"\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<h2>Artist</h2>\n" +
    "		<h5><span class=\"grey\">@artist-name</span></h5>\n" +
    "		<h5><span class=\"grey\">artist info</span></h5>\n" +
    "	</div>\n" +
    "	<div class=\"pull-right\">\n" +
    "		<a>facebook</a><br>\n" +
    "		<a>twitter</a><br>\n" +
    "		<a>google</a><br>\n" +
    "		<a>bandcamp</a><br>\n" +
    "		<a>soundcloud</a><br>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"venue/event\">venue</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"venue/event\">venue</a></h2>\n" +
    "	<h2>settlement sheet info</h2>\n" +
    "	<h2>settlement sheet info</h2>\n" +
    "	<h2>settlement sheet info</h2>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("artists/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("artists/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"\">\n" +
    "            <h2>Artists</h2>\n" +
    "            <p>Three Corners Collective</p>\n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"currentUser\" class=\"container\">\n" +
    "    <form role=\"form\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newArtist.title\" type=\"text\" placeholder= \"venue title\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.address\" type=\"text\" placeholder= \"venue address\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.facebook\" type=\"text\" placeholder= \"venue facebook\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.twitter\" type=\"text\" placeholder= \"venue twitter\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.google\" type=\"text\" placeholder= \"venue google\">\n" +
    "        <br><br>\n" +
    "        <textarea style=\"width:100%;height:250px\" ng-model=\"newVenue.description\" type=\"text\" placeholder= \"venue description\"></textarea>\n" +
    "        <br><br>\n" +
    "        <button ng-click=\"createArtist()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "    </form>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"\">\n" +
    "                <h2><a href=\"artist/matt-phillips\">Matt Phillips</a></h2>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("audiences/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("audiences/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"\">\n" +
    "            <h2>Audiences</h2>\n" +
    "            <p>Three Corners Collective</p>\n" +
    "            <p>discover</p>\n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"currentUser\" class=\"container\">\n" +
    "    <form role=\"form\">\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newMerch.title\" type=\"text\" placeholder= \"merch title\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newMerch.stock\" type=\"text\" placeholder= \"merch stock\"></div>\n" +
    "        <br><br>\n" +
    "        <textarea style=\"width:100%;height:250px\" ng-model=\"newMerch.description\" type=\"text\" placeholder= \"merch description\"></textarea>\n" +
    "        <br><br>\n" +
    "        <button style=\"width:100%\" ng-click=\"createMerch()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "    </form>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div ng-repeat=\"item in merch\" class=\"col-md-4\">\n" +
    "                <h2><a href=\"merch/{{item.urlTitle}}\">{{item.title}}</a></h2>\n" +
    "                <p style=\"color:white\">{{item.stock}}</p>\n" +
    "                <p style=\"color:white\">{{item.description}}</p>\n" +
    "                <p style=\"color:white\"><a href=\"member/{{item.user.username}}\">{{item.user.username}}</a></p>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "            <p>Dashboard</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>artist</h2>\n" +
    "            <h2>credibility (settlement sheet - CPA) - $8.88</h2>\n" +
    "            <h2>growth - $88.88</h2>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "            \n" +
    "        </div>\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>admin</h2>\n" +
    "            <h2>create merch</h2>\n" +
    "            <form role=\"form\">\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newMerch.title\" type=\"text\" placeholder= \"merch title\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newMerch.stock\" type=\"text\" placeholder= \"merch stock\"></div>\n" +
    "                <br><br>\n" +
    "                <textarea style=\"width:100%;height:250px\" ng-model=\"newMerch.description\" type=\"text\" placeholder= \"merch description\"></textarea>\n" +
    "                <br><br>\n" +
    "                <button style=\"width:100%\" ng-click=\"createMerch()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "            </form>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "            <h2>create venue</h2>\n" +
    "            <form role=\"form\">\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.title\" type=\"text\" placeholder= \"venue title\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.address\" type=\"text\" placeholder= \"venue address\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.facebook\" type=\"text\" placeholder= \"venue facebook\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.twitter\" type=\"text\" placeholder= \"venue twitter\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.google\" type=\"text\" placeholder= \"venue google\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.booking\" type=\"text\" placeholder= \"venue booking\"></div>\n" +
    "                <br><br>\n" +
    "                <textarea style=\"width:100%;height:250px\" ng-model=\"newVenue.description\" type=\"text\" placeholder= \"venue description\"></textarea>\n" +
    "                <br><br>\n" +
    "                <button style=\"width:100%\" ng-click=\"createVenue()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "            </form>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "            <h2>create event</h2>\n" +
    "            <form role=\"form\">\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newEvent.title\" type=\"text\" placeholder= \"event title\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newEvent.artists\" type=\"text\" placeholder= \"event artists\"></div>\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newEvent.venue\" type=\"text\" placeholder= \"event venue\"></div>\n" +
    "                <br><br>\n" +
    "                <textarea style=\"width:100%;height:250px\" ng-model=\"newEvent.description\" type=\"text\" placeholder= \"event description\"></textarea>\n" +
    "                <br><br>\n" +
    "                <button style=\"width:100%\" ng-click=\"createEvent()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "            </form>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "            <h2>create artist</h2>\n" +
    "            <form role=\"form\">\n" +
    "                <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newArtist.title\" type=\"text\" placeholder= \"artist title\"></div>\n" +
    "                <br><br>\n" +
    "                <textarea style=\"width:100%;height:250px\" ng-model=\"newArtist.description\" type=\"text\" placeholder= \"artist description\"></textarea>\n" +
    "                <br><br>\n" +
    "                <button style=\"width:100%\" ng-click=\"createArtist()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "            </form>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("event/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("event/index.tpl.html",
    "<style>\n" +
    "	.avatar {\n" +
    "		position:absolute;\n" +
    "		top:8.4em;\n" +
    "		margin: 0 auto;\n" +
    "		background: #fff;\n" +
    "		max-width: 15em;\n" +
    "		height: 15em;\n" +
    "		padding: 0.25em;\n" +
    "		border-radius: .7em;\n" +
    "	}\n" +
    "	.member-cover{\n" +
    "		max-height:17em;\n" +
    "		width: 100%;\n" +
    "		overflow: hidden;\n" +
    "	}\n" +
    "	.member-cover img{\n" +
    "		width: 100%;\n" +
    "		margin-top: -10%\n" +
    "	}\n" +
    "</style>	\n" +
    "\n" +
    "\n" +
    "<div class=\"profile-header\">\n" +
    "	<div class=\"member-cover\">\n" +
    "		<img src=\"images/3ccbg.jpg\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<div style=\"\">\n" +
    "			<img class=\"avatar\" ng-src=\"images/bg.png\"/>\n" +
    "			<div class=\"\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<h2><a href=\"venue/event\">Venue</a></h2>\n" +
    "	<h2><a href=\"artist/event\">Artists</a></h2>\n" +
    "	<h2><a href=\"event/event\">Audience</a></h2>\n" +
    "	<h2><a href=\"event/event\">Content</a></h2>\n" +
    "	<h2><a href=\"event/event\">Stats</a></h2>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<section id=\"about-2\" class=\"content-section\" style=\"text-align:left\" ng-controller=\"FooterCtrl\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"\">\n" +
    "                <h4>{{date | date: 'yyyy'}} <a href=\"/\">Three Corners Collective</a></h4>\n" +
    "                <img style=\"height:50px\" src=\"images/clear_logo.png\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<header class=\"intro\">\n" +
    "    <div class=\"intro-body\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                    <img class=\"intro-img\" src=\"images/logo.png\">\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p class=\"intro-text\">Three Corners Collective</p>\n" +
    "                    <!--play video-->\n" +
    "                    <a href=\"#about\" class=\"btn btn-circle page-scroll\" du-smooth-scroll>\n" +
    "                        <i class=\"fa fa-angle-double-down animated\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<section id=\"about\" class=\"container content-section text-center\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2></h2>\n" +
    "                <p></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Artists</h1>\n" +
    "                <p></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Audiences</h1>\n" +
    "                <p></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Venues</h1>\n" +
    "                <p></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <a href=\"/about\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Learn More</h1></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"\">\n" +
    "                <h2><a href=\"register\">Sign with us</a></h2>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/artists\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Artists</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/audiences\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Audiences</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/venues\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Venues</h1></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1 class=\"blue-title\">Login</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <h2 class=\"post-title\">\n" +
    "                        Welcome back!\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\" method=\"post\" action=\"/auth/local\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"username\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign in</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a class=\"btn btn-social btn-facebook\" href=\"\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" href=\"\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n" +
    "                        <a class=\"btn btn-social btn-google\" href=\"\"><i class=\"fa fa-google\"></i> Google</a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\">Need an account?</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("merch/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("merch/index.tpl.html",
    "<style>\n" +
    "	.avatar {\n" +
    "		position:absolute;\n" +
    "		top:8.4em;\n" +
    "		margin: 0 auto;\n" +
    "		background: #fff;\n" +
    "		max-width: 15em;\n" +
    "		height: 15em;\n" +
    "		padding: 0.25em;\n" +
    "		border-radius: .7em;\n" +
    "	}\n" +
    "	.member-cover{\n" +
    "		max-height:17em;\n" +
    "		width: 100%;\n" +
    "		overflow: hidden;\n" +
    "	}\n" +
    "	.member-cover img{\n" +
    "		width: 100%;\n" +
    "		margin-top: -10%\n" +
    "	}\n" +
    "</style>	\n" +
    "\n" +
    "\n" +
    "<div class=\"profile-header\">\n" +
    "	<div class=\"member-cover\">\n" +
    "		<img src=\"images/3ccbg.jpg\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<div style=\"\">\n" +
    "			<img class=\"avatar\" ng-src=\"images/bg.png\"/>\n" +
    "			<div class=\"\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<h2>Merch</h2>\n" +
    "		<h5><span class=\"grey\"><a href=\"artist/1\">merch owner</a></span></h5>\n" +
    "		<h5><span class=\"grey\"></span>88 in stock</h5>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<p>merch description merch description merch description merch description merch description merch description merch description merch description </p>\n" +
    "\n" +
    "	<button style=\"width:100%\" ng-click=\"purchase()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> purchase</button>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<div ng-controller=\"NavCtrl\" class=\"navbar navbar-fixed-top\" role=\"navigation\" style=\"background-color:white\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"/\">Three Corners Collective</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ng-show=\"!currentUser\"><a href=\"/about\">About</a></li>\n" +
    "                <li ng-show=\"currentUser\"><a href=\"/dashboard\">Dashboard</a></li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li><a href=\"/artists\">Artists</a></li>\n" +
    "                <li><a href=\"/audiences\">Audiences</a></li>\n" +
    "                <li><a href=\"/venues\">Venues</a></li>\n" +
    "                <li ng-show=\"!currentUser\" ><a href=\"/login\">Login</a></li>\n" +
    "                <li ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1 class=\"blue-title\">Create an Account</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <h2 class=\"post-title\">\n" +
    "                        Welcome!\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"email\" placeholder=\"email\" title=\"email\" type=\"email\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"username\" placeholder=\"username\" title=\"username\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"firstName\" placeholder=\"first name\" title=\"firstName\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"lastName\" placeholder=\"last name\" title=\"lastName\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" name=\"password\" placeholder=\"password\" title=\"password\" type=\"password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n" +
    "                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><i class=\"fa fa-google\"></i> Google</a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\">Already have an account?</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("venue/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("venue/index.tpl.html",
    "<style>\n" +
    "	.avatar {\n" +
    "		position:absolute;\n" +
    "		top:8.4em;\n" +
    "		margin: 0 auto;\n" +
    "		background: #fff;\n" +
    "		max-width: 15em;\n" +
    "		height: 15em;\n" +
    "		padding: 0.25em;\n" +
    "		border-radius: .7em;\n" +
    "	}\n" +
    "	.member-cover{\n" +
    "		max-height:17em;\n" +
    "		width: 100%;\n" +
    "		overflow: hidden;\n" +
    "	}\n" +
    "	.member-cover img{\n" +
    "		width: 100%;\n" +
    "		margin-top: -10%\n" +
    "	}\n" +
    "</style>	\n" +
    "\n" +
    "\n" +
    "<div class=\"profile-header\">\n" +
    "	<div class=\"member-cover\">\n" +
    "		<img src=\"images/3ccbg.jpg\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<div style=\"\">\n" +
    "			<img class=\"avatar\" ng-src=\"images/bg.png\"/>\n" +
    "			<div class=\"\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<div class=\"pull-left\">\n" +
    "		<h2>Venue</h2>\n" +
    "		<h5><span class=\"grey\">@venue-name</span></h5>\n" +
    "		<h5><span class=\"grey\">venue info</span></h5>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	<h2><a href=\"event/event\">event</a></h2>\n" +
    "	\n" +
    "	<h2><a href=\"artist/artist\">artist</a></h2>\n" +
    "	<h2><a href=\"artist/artist\">artist</a></h2>\n" +
    "	<h2><a href=\"artist/artist\">artist</a></h2>\n" +
    "	<h2><a href=\"artist/artist\">artist</a></h2>\n" +
    "\n" +
    "	<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "	<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("venues/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("venues/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"\">\n" +
    "            <h2>Venues</h2>\n" +
    "            <p>Three Corners Collective</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section ng-show=\"currentUser\" class=\"container\">\n" +
    "\n" +
    "    <form role=\"form\">\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.title\" type=\"text\" placeholder= \"venue title\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.address\" type=\"text\" placeholder= \"venue address\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.facebook\" type=\"text\" placeholder= \"venue facebook\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.twitter\" type=\"text\" placeholder= \"venue twitter\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.google\" type=\"text\" placeholder= \"venue google\"></div>\n" +
    "        <div class=\"form-group\"><input class=\"col-md-12 form-control\" ng-model=\"newVenue.booking\" type=\"text\" placeholder= \"venue booking\"></div>\n" +
    "        <br><br>\n" +
    "        <textarea style=\"width:100%;height:250px\" ng-model=\"newVenue.description\" type=\"text\" placeholder= \"venue description\"></textarea>\n" +
    "        <br><br>\n" +
    "        <button style=\"width:100%\" ng-click=\"createVenue()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "    </form>\n" +
    "    \n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div ng-repeat=\"venue in venues\" class=\"\">\n" +
    "                <h2><a href=\"venue/{{venue.title}}\">{{venue.title}}</a></h2>\n" +
    "                <p style=\"color:white\">{{venue.address}}</p>\n" +
    "                <p style=\"color:white\">{{venue.description}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);
