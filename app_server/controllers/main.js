module.exports.index = function(req, res, next) {
  res.render('index', {
    title: 'Express',
    albumList: [
        {
          img: "img/albums/TryingToMakeALiving.jpg",
          altText: "Trying To Make A Living Playing My Guitar",
          description: "Sam is back with his signature groove, a tight rhythm section, and an in-your-face horn section. The Chicago Blues Hall of Famer has put together an album that you can't listen to sitting down.",
          iTunesLink: "https://itunes.apple.com/us/album/trying-to-make-living-playing/id983058047",
          CDBabyLink: "https://store.cdbaby.com/cd/samcockrell1"
        },
        {
          img: "img/albums/Colorblind.jpg",
          altText: "Colorblind",
          description: "The horn infused R&B selections on Colorblind are sure to make you get up and dance!  The album features the world famous Memphis Horns (Elvis, Otis Redding, B.B. King, Robert Cray)",
          iTunesLink: "https://itunes.apple.com/us/album/colorblind/id911008480",
          CDBabyLink: "https://store.cdbaby.com/cd/samcockrell"
        },
        {
          img: "img/albums/I'mInTheBusiness.jpg",
          altText: "I'm In the Business",
          description: "This blues oriented collection features many of Sam's friends making guest appearances including:  Carl Weathersby, Jimmy Johnson, Michael Coleman, Maurice John Vaughn, Billy Branch, and others.",
          iTunesLink: "https://itunes.apple.com/us/album/im-in-the-business/id695863573",
          CDBabyLink: "http://www.cdbaby.com/cd/samcockrell2"
        }
    ]
  });
};
