const TokenModal = require("../../dataBase/models/Token");

module.exports = {
    createTokens:  (tokens) => {
        return TokenModal.create(tokens)
    },

    deleteByParams: async (params) => {
        return  TokenModal.destroy({
            where: params
        })
    },

    getTokensByParams: (params) => {
        return TokenModal.findOne({
            where: params
        })
    }
}
