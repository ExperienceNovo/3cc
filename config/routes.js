/**
 * Route Mappings
 * (sails.config.routes)
 *
 */

module.exports.routes = {

  'get /': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /artists': 'HomeController.index',
  'get /artist/:path': 'HomeController.index',
  'get /audiences': 'HomeController.index',
  'get /dashboard': 'HomeController.index',
  'get /events': 'HomeController.index',
  'get /event/:path': 'HomeController.index',
  'get /merch': 'HomeController.index',
  'get /merch/:path': 'HomeController.index',
  'get /venues': 'HomeController.index',
  'get /venue/:path': 'HomeController.index',

  'get /login': 'HomeController.index',
  'get /logout': 'AuthController.logout',
  'get /register': 'HomeController.index',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  /**
   * Entry routes
   */
  'get /api/entry': 'EntryController.getAll',
  'post /api/entry/update': 'EntryController.update',
  'post /api/entry': 'EntryController.create',
  'get /api/entry/:id': 'EntryController.getOne',

  /**
   * Merch routes
   */
  'get /api/merch': 'MerchController.getSome',
  'post /api/merch/update': 'MerchController.update',
  'post /api/merch': 'MerchController.create',
  'get /api/merch/:id': 'MerchController.getOne',
  'get /api/merch/url/:path': 'CommitteeController.getByUrl',


  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'post /api/user': 'UserController.create',

  /**
   * Venue routes
   */
  'get /api/venue': 'VenueController.getSome',
  'post /api/venue/update': 'VenueController.update',
  'post /api/venue': 'VenueController.create',
  'get /api/venue/:id': 'VenueController.getOne',

};
