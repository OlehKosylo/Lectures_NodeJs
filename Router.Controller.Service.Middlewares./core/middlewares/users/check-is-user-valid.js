module.exports = (req,res,next) => {
    try {
        const {name, id} = req.body;

        if(!name || !id) {
            throw new Error('Wrong data')
        }

    }catch (e) {
        res.json(e.message)
    }
}
