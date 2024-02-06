
// Desc           Get Dashboard page
// Route          GET /dash/
// Access         Private

const getDashboardPage = (req, res) => {
    res.render("dashboard/dashboard")
}

module.exports = {
    getDashboardPage
}