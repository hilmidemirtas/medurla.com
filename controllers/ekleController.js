

const Addilac = require("../models/YeniAddilac");
const Category = require("../models/Category");



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

    
  const categorySlug = req.query.kategoriler;
  const category = await Category.findOne({slug:categorySlug});
  
  let filter = {};

  if(categorySlug) {
    filter = {category:category._id}
  } 
  const yenis = await Addilac.find(filter);
  const categorys = await Category.find();
    res.status(200).render("ekle", {
      yenis,
      categorys,
     /*  page_name: "/ekle?kategoriler=ilac" */
    });
  } catch(error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
}; 

exports.getIlac = async (req, res) => {
  try {
  const ilac = await Addilac.findOne({slug: req.params.slug})
    res.status(200).render("ilac", {
      ilac,
      page_name: "ilac"
    });
  } catch(error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
}; 

