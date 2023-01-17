module.exports.home = async function (req,res) {
    try {
        return res.render('home',{
            title: 'Home',
        });
    } catch (error) {
        console.log("Error in home",error);
        return;
    }
}

module.exports.menu = async function (req,res) {
    try {
        return res.render('menu',{
            title: 'Menu',
        });
    } catch (error) {
        console.log("Error in home",error);
        return;
    }
}