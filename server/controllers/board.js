const path = require('path');
const model = require('./model');

const expires = new Date()
expires.setDate(expires.getDate() + 1)

// const salt = require(path.join(__dirname, 'config', 'db.json'))
//  .salt

// const hashing = require(path.join(__dirname, 'config', 'hashing.js'))

  module.exports = {
    

    add : {
      board : (req, res) => {
        const body = req.body;

        model.add.board(body, result => {
          if(result) {
            res.send(true);
          }
        })
      },
    },

    update : {
      view_cnt : (req, res) => {
        const body = req.body;

        const expires = new Date()
        expires.setDate(expires.getDate() + 1)

        const cookie_name = 'board_' + body.id
        const exist_cookie = req.cookies[cookie_name]

        if(!exist_cookie) {
          res.cookie(cookie_name, true, {
            expires: expires
          });
          
          
          model.update.view_cnt(body, result => {
            if(result) {
              res.send(true);
            }
          })
        }
      }
    },
    
    delete : {
      category : (req, res) => {
        const body = req.body;

        model.delete.category(body, result => {
          if(result) {
            res.send(result);
          }
        })
      },

      board : (req, res) => {
        const body = req.body;

        model.delete.board(body, () => {
          res.send(true)
        })
      }
    },


    get : {
      board : (req, res) => {
        const body = req.body;
        
        model.get.board(body, result => {
          if(result) {
            res.send(result);
          }
        })
      },

      board_cnt : (req, res) => {
        const body = req.body;

        model.get.board_cnt(body, cnt => {
          const result = { cnt : cnt }
          res.send(result)
        })
      },

      board_data : (req, res) => {
        const body = req.body;

        model.get.board_data(body, data => {
          res.send(data)
        })
      }
    },
    
    
  }