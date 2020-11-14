const {usersService} = require("../../services");

module.exports = (req,res,next) => {
    try {
        const {name} = req.body;

        let user = usersService.getUserByName(name)

        if(user) {
            throw new Error('User already exist')
        }

        next();
    } catch (e) {
        res.json(e.message)
    }
}
