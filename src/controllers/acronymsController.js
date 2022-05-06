import mongoose from "mongoose";
import { AcronymSchema } from "../models/acronymModel.js";

const Acronym = mongoose.model('Acronym', AcronymSchema);

export const getAcronyms = (req, res) => {

  Acronym.find({}, (err, acronym) => {
    if (err) {
      res.send(err);
    }
    res.json(acronym);
  });
}

export const searchAcronyms = (req, res) => {
  const searchQuery = req.query;
  console.log(searchQuery);
  if (searchQuery['search']) {

    Acronym.find({ definition: { '$regex': searchQuery["search"], '$options': 'i' } }, (err, acronym) => {
      if (err) {
        res.send(err);
      }
      console.log('length: ', acronym.length);
      res.json(acronym);
    });
  } else {

    Acronym.find({}, (err, acronym) => {
      if (err) {
        res.send(err);
      }
      res.json(acronym);
    });

    // res.send('Not found');
  }
}

export const addAcronym = (req, res) => {
  let newAcronym = new Acronym(req.body);

  newAcronym.save((err, acronym) => {
    if (err) {
      res.send(err);
    }
    res.json(acronym);
  });
}

export const updateAcronym = (req, res) => {
  Acronym.findByIdAndUpdate({ _id: req.params.acronymID }, req.body, { new: true, useFindAndModify: false }, (err, acronym) => {
    if (err) {
      res.send(err);
    }
    res.json(acronym);
  });
}

// export const deleteAcronym = (req, res) => {
//   Acronym.remove({ _id: req.params.acronymID}, (err, acronym) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({message: 'record deleted!'});
//   });
// }

export const deleteAcronym = (req, res) => {
  Acronym.deleteOne({ _id: req.params.acronymID }, (err, acronym) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'record deleted!' });
  });
}