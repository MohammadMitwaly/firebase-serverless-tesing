import * as functions from "firebase-functions";

exports.onAnimalAdded = functions.firestore
  .document("animals/{animalId}")
  .onCreate((animalSnapshot, context) => {
    const addedData = animalSnapshot.data;
    console.log(`Animal added to DB, with these details: ${addedData}`);
  });
