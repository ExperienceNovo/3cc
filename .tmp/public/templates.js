angular.module('templates-app', ['about/index.tpl.html', 'artist/index.tpl.html', 'artists/index.tpl.html', 'dashboard/index.tpl.html', 'home/index.tpl.html', 'login/index.tpl.html', 'register/index.tpl.html', 'venue/index.tpl.html', 'venues/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<section id=\"about\" class=\"container content-section text-center\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "            <p>yo</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h2 style=\"color:black\">Our Mission:</h2>\n" +
    "            <p>suh</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2>Three Corners Collective</h2>\n" +
    "                <p style=\"color:white\">suh</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section text-center\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "            <h2>The Team</h2>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">deed</h3>\n" +
    "                <p>1234</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">deedz</h3>\n" +
    "                <p>1234</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">deedz</h3>\n" +
    "                <p>1234</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "              <h4>{{date | date: 'yyyy'}} <a href=\"/\">Three Corners Collective</a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("artist/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("artist/index.tpl.html",
    "<h1>Artist</h1>");
}]);

angular.module("artists/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("artists/index.tpl.html",
    "<section id=\"about\" class=\"container content-section text-center\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "            <p>Artists</p>\n" +
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
    "        <button ng-click=\"createVenue()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "    </form>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2>Matt Phillips</h2>\n" +
    "                <p style=\"color:white\">yo</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<section id=\"about\" class=\"container content-section text-center\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "            <p>Artists</p>\n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2>Matt Phillips</h2>\n" +
    "                <p style=\"color:white\">yo</p>\n" +
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
    "                <h2>Three Corners Collective</h2>\n" +
    "                <p></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Artists</h1>\n" +
    "                <p>ArtistsArtistsArtistsArtists</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Venues</h1>\n" +
    "                <p>VenuesVenuesVenuesVenues</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h1 style=\"color:black\">Audiences</h1>\n" +
    "                <p>AudiencesAudiencesAudiencesAudiences</p>\n" +
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
    "<section id=\"about-1\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2>Music Label</h2>\n" +
    "                <p style=\"color:white\">Sign with us</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section text-center\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "            <h2>Call to Action</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/artists\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Artists</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"#\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Audiences</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/venues\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Venues</h1></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section text-center\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h4>{{date | date: 'yyyy'}} <a href=\"/\">Three Corners Collective</a></h4>\n" +
    "                <img style=\"height:50px\" src=\"images/clear_logo.png\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
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
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h1 style=\"color:black\">Venue Profile Page</h1>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "<h2>past shows - artists who have played here in the 3cc network</h2>\n" +
    "");
}]);

angular.module("venues/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("venues/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\" style=\"text-align:left\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"\">\n" +
    "            <h2>Three Corners Collective</h2>\n" +
    "            <p>Venues</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"currentUser\" class=\"container\">\n" +
    "    <form role=\"form\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.title\" type=\"text\" placeholder= \"venue title\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.address\" type=\"text\" placeholder= \"venue address\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.facebook\" type=\"text\" placeholder= \"venue facebook\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.twitter\" type=\"text\" placeholder= \"venue twitter\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.google\" type=\"text\" placeholder= \"venue google\">\n" +
    "        <input class=\"col-md-12\" ng-model=\"newVenue.booking\" type=\"text\" placeholder= \"venue booking\">\n" +
    "        <br><br>\n" +
    "        <textarea style=\"width:100%;height:250px\" ng-model=\"newVenue.description\" type=\"text\" placeholder= \"venue description\"></textarea>\n" +
    "        <br><br>\n" +
    "        <button ng-click=\"createVenue()\" type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-paper-plane\"></i> Submit</button>\n" +
    "    </form>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\" style=\"text-align:left\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div ng-repeat=\"venue in venues\" class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <h2><a href=\"venue/{{venue.title}}\">{{venue.title}}</a></h2>\n" +
    "                <p style=\"color:white\">{{venue.address}}</p>\n" +
    "                <p style=\"color:white\">{{venue.description}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);
