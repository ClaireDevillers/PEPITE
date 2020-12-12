var express = require('express');
var router = express.Router();

const mongoose= require('mongoose');
const Schema= mongoose.Schema;
//création des colones ds le tableau:
const PepiteSchema= new Schema({
  photo: String,
  magasin: String,
  neighborhood: String,
});
let PepiteIndexModel= mongoose.model('PEPITE',PepiteSchema);



// pour page index

// gets users listing//
router.get ('/',async function(req,res,next){
  console.log ("la route fonctionne")


  let VisuelMag = await PepiteIndexModel.find()

  console.log (VisuelMag)

  res.render('index.ejs',{VisuelMag});
});

//route to add stuff to db, A ENLEVER APRES
router.get('/adddata',async function(req,res,next){
  let result= await PepiteIndexModel.insertMany (
    [{photo:"http://localhost:3000/images/mag1.jpeg", magasin:"Castello", neighborhood: "Lyton Park"},
    {photo:"mag2", magasin:"toys Shop", neighborhood: "Little Italy"},
    {photo:"mag3", magasin:"Harvard Book Shop", neighborhood: "Annex"},
    {photo:"mag4", magasin:"Ma Petite Etoile", neighborhood: "yorkville"},
  ]
  );
  res.send (result)
});

  // voir lapage detail PageMag

  router.get ('/:id',async function(req,res,next){
    try{
      let PageMag = await PepiteIndexModel.findById (req.params.id)
      res.render ('detailPageMag.ejs', {PageMag});
    } catch (error){
      res.send ("Sorry, your page is not found")
    }
  } );



module.exports = router;
