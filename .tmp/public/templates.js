angular.module('templates-app', ['about/index.tpl.html', 'artist/index.tpl.html', 'artists/index.tpl.html', 'home/index.tpl.html']);

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
    "");
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
    "            <a href=\"#\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Venues</h1></a>\n" +
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
