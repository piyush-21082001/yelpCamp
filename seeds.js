var mongoose = require('mongoose')
var Campground = require('./models/campground')
var Comment = require('./models/comment')

var data = [
  {
    name: "Cloud's Rest",
    image: '/images/1.jpg',
    price: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    name: 'Desert Mesa',
    image: '/images/2.jpg',
    price: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    name: 'Canyon Floor',
    image: '/images/3.jpg',
    price: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]
const seedDB = () => {
  //Remove all campgrounds
  Campground.deleteMany({}, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('removed campgrounds!')
    Comment.deleteMany({}, function (err) {
      if (err) {
        console.log(err)
      }
      console.log('removed comments!')
      //add a few campgrounds
      data.forEach(function (seed) {
        Campground.create(seed, function (err, campground) {
          if (err) {
            console.log(err)
          } else {
            console.log('added a campground')
            //create a comment
            Comment.create(
              {
                text: 'This place is great, but I wish there was internet',
                author: 'homer',
              },
              function (err, comment) {
                if (err) {
                  console.log(err)
                } else {
                  campground.comments.push(comment)
                  campground.save()
                  console.log('Created new comment')
                }
              }
            )
          }
        })
      })
    })
  })
}

module.exports = seedDB
