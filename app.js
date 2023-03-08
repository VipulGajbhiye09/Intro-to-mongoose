//require the Mongoose package after npm installing it
const mongoose = require("mongoose");

//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/FruitsDB");
  }

 //create a SCHEMA that sets out the fields each document will have and their datatypes
 const fruitSchema = new mongoose.Schema ({
 	name: {
    type:String,
    required:[true]
  },
 	rating: {
    type:Number,
    min:0,
    max:10,
    required:[true]
  },
 	review: {
    type:String,
    required:[true]
  },
 })

 //create a MODEL (basically collection)
 const Fruit = new mongoose.model ("Fruit", fruitSchema)

 //create a DOCUMENT
 const fruit1 = new Fruit ({
 	name: "Apple",
 	rating: 7,
 	review: "Great fruit!"
 })

 //save the document (it'll be saved into the db everytime the file is run)
 //fruit1.save()
 const watermelon = new Fruit ({
   	name: "Watermelon",
   	rating: 8,
   	review: "Great summer fruit!"
  });
 const banana = new Fruit ({
  	name: "Banana",
  	rating: 9,
  	review: "Great fruit!"
  });
  const orange = new Fruit ({
   	name: "Orange",
   	rating: 6,
   	review: "Okayish Fruit"
  });

   //Fruit.insertMany([watermelon,banana,orange]);

   Fruit.find()
  .then(function(fruits) {
    console.log(fruits);
  })
  .catch(function(err) {
    console.log(err);
  });

  Fruit.find()
    .then(function (fruits) {
        // fruits.forEach(function (fru) {
        //     console.log(fru.name);
        // });
        console.log(fruits.map((fru) => fru.name ));  //returns names in array
        // mongoose.connection.close(); //close connection after use
    })
    .catch(function (err) {
        console.log(err);
    });

    Fruit.updateOne({_id:"6402e213dbb826c6d4285ced"}, {name: "Mango Fruit"})
      .then(result => {
        console.log(result);
        // mongoose.connection.close()
      })
      .catch(err => {
        console.log(err);
      })
