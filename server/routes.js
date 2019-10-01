const router = require('express').Router()
const controls = require('./controls.js')

router.route('/')
  .get(controls.getCows)
  .post(controls.saveCow)
  .put(controls.editCow)
  .delete(controls.deleteCow)
router.route('/all')
  .delete(controls.deleteAllCows)

module.exports = router