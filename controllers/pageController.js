

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
    res.status(200).render("index", {
      page_name: "index"
      
      });
};

exports.getAdrenalinPage = (req, res) => {
    res.render("adrenalin", {
        page_name: "adrenalin",
      });
};


exports.getKayıtPage = (req, res) => {
    res.status(200).render("kayit", {
      });
};

exports.getIlaclarPage = (req, res) => {
    res.status(200).render("ilaclar", {
        page_name: "ilaclar",
      });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    });
};

/* exports.getProfilPage = (req, res) => {
  res.status(200).render("profil", {
    });
}; */