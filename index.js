"use strict";
const express = require ("express");
const path = require("path");

const http    = require('http');

const app = express();
const fs = require("fs")
const mysql = require('mysql');
/*const config = JSON.parse(fs.readFileSync("config-secret.json"));
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port, 
  database: config.database
});*/

const product = {  
        "product_id": "1",
        "product_name": "hand-mande leather jacket",
        "product_story": {
            "section1": "A leather jacket is a jacket-length coat that is usually worn on top of other apparel or item of clothing, and made from the tanned hide of various animals. The leather material is typically dyed black, or various shades of brown, but a wide range of colors is possible. Leather jackets can be designed for many purposes, and specific styles have been associated with subcultures such as greasers, motorcyclists, military aviators, police, and music subcultures (punks, goths, metalheads, rivetheads), who have worn the garment for protective or fashionable reasons, and occasionally to create a potentially intimidating appearance.",
            "section2": "A leather jacket could be used to shape a character, providing an important ingredient used to define the very essence of 'cool'. Prime examples include the Perfecto motorcycle jacket worn by Marlon Brando's Johnny Strabler in The Wild One (1953), Honor Blackman as Cathy Gale on The Avengers, and Michael Pare in Eddie and the Cruisers duo (1983 and 1989). As such, these all served to popularize leather jackets in American and British youth from the 'greaser subculture' of the 1950s and early 1960s. Later depictions of this subculture are seen via The Fonz from the television series Happy Days, which was produced in the 1970s and 1980s, but shows life in the 1950s and 1960s (Fonzie's leather jacket is now housed in the Smithsonian Institution), and in the film duos Eddie and the Cruisers and Grease. Flight jackets, also (occasionally with fleece collars, as seen in the film Top Gun (1986), have remained fashionable for decades."
        },
        "product_images": {
            "p_image1": "files/images/products/pi1.jpg",
            "p_image2": "files/images/products/pi2.jpg",
            "p_image3": "files/images/products/pi3.jpg",
            "p_image4": "files/images/products/pi4.jpg"
        },
        "product_video": "youtube_video_link",
        "product_price": "9.99",
        "creation_date": "12-03-2017",
        "product_story_images": {
            "ps_image1": "files/images/products/psi1.jpg",
            "ps_image2": "files/images/products/psi1.jpg",
            "ps_image3": "files/images/products/psi1.jpg",
            "ps_image4": "files/images/products/psi1.jpg"
        }
};
app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
        res.sendFile(__dirname + '/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

app.get('/product', function(req,res){
    // make the select query then delete the product JSON object
    /*
    const sql = 'SELECT ..................;';
      connection.query(sql, (error, results, fields)=> {
        if (error) {
          console.log(error.message);
          res.status(500).json(error);
        }
        else{ 
          res.status(200).json(results);     
        }
      });*/ 
    res.status(200).json(product);
});


app.listen(3000,()=>{
  console.log("application is listining");  
});
