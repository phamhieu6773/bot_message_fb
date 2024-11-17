let getHomepage = (req, res) => {
    // return res.render("homepage.ejs");
    return res.send("Hello World");
};

module.exports = {
    getHomepage: getHomepage
};
