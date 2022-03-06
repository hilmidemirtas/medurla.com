

exports.getIndexPage = (req, res) => {
    res.status(200).render("index", {
        page_name: "index",
      });
};

exports.getAdrenalinPage = (req, res) => {
    res.render("adrenalin", {
        page_name: "adrenalin",
      });
};


exports.getAddPage = (req, res) => {
    res.render("add", {
        page_name: "add",
      });
};

exports.getIlaclarPage = (req, res) => {
    res.status(200).render("ilaclar", {
        page_name: "ilaclar",
      });
};

