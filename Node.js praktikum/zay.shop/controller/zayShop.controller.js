
// Desc           Get Home page
// Route          GET /
// Access         Public

const getHomePage = (req, res) => {
    res.render("shops/zayShop",{
        title : "Zay Shop"
    })
}

module.exports = {
    getHomePage
}