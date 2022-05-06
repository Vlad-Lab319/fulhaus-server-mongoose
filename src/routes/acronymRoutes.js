import {
  addAcronym,
  getAcronyms,
  updateAcronym,
  deleteAcronym,
  searchAcronyms,
} from '../controllers/acronymsController.js'

const routes = (app) => {

  // 
  // All acronyms
  //

  app.route('/acronym')

  // GET endpoint
    // .get(getAcronyms)
    .get(searchAcronyms)
  //POST endpoint
    .post(addAcronym);


  // 
  // Specific acronym
  //

  app.route('/acronym/:acronymID')
    // Update endpoint
    .patch(updateAcronym)
    // Delete endpoint
    .delete(deleteAcronym);

  //
  // Search acronyms
  //

  app.route('/acronym/search')
    .get(searchAcronyms);
}

export default routes;