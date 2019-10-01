const methods = require('../db/models.js')

module.exports = {
  getCows: (req, res) => {
    return methods.getCowsFromDatabase((err, data) => {
      if(err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        res.send(data)
      }
    })
  },
  saveCow: (req, res) => {
    console.log(req)
    return methods.saveCowToDatabase(req.body.data, (err, data) => {
      if(err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        res.send(data)
      }
    })
  },
  editCow: (req, res) => {
    if(!req.body.id) {
      console.error('No request body sent.')
      res.sendStatus(500)
    } else {
      return methods.editCowInDatabase(req.body, (err, edited) => {
        if(err) {
          console.error(err)
          res.sendStatus(500)
        } else {
          if(edited) {
            res.send('Cow edited!')
          } else {
            res.sendStatus(500)
          }
        }
      })
    }
  },
  deleteCow: (req, res) => {
    if(!req.body) {
      console.error('No request body sent.')
    } else {
      return methods.deleteCowFromDatabase(req.body, (err, deleted) => {
        if(err) {
          console.error(err)
          res.sendStatus(500)
        } else {
          if(deleted) {
            res.send('Cow deleted!')
          } else {
            res.sendStatus(500)
          }
        }
      })
    }
  },
  deleteAllCows: (req, res) => {
    return methods.deleteAllCowsFromDatabase((err, deleted) => {
      if(err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        res.send(`${deleted} cows deleted!`)
      }
    })
  }
}