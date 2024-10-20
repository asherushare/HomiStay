const mongoose = require("mongoose");
const initData = require("./data.js");  
const Listing = require("../models/listing.js");

const mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(mongo_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

  const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6711eaf68b896e9ef214f280"}));
    await Listing.insertMany(initData.data);
    console.log("data was initializes");
  };

  initDB();