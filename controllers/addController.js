

const Addilac = require("../models/YeniAddilac");




exports.createYeniAddilac = async (req, res) => {
  try {
  const yeni = await Addilac.create(req.body);

  
    res.status(201).json({
      status: "succes",
      yeni,
    });
  } catch(error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
}; 

exports.getAllYeniAddilaclar = async (req, res) => {
  try {
  const yenis = await Addilac.find();
    res.status(200).json({
      status: "succes",
      yenis,
    });
  } catch(error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
}; 