const Usuario = require('../../models').Usuario;
const Token   = require('../../models').Token;
const encrypt = require('../encryptController');

module.exports = {
    async show(req, res){
        let object = {};
        //pagando pagination params from url e setando default
        let {page =  0, perPage =  10} = req.query;
        //configurando page inserida na url
        if(page > 0){
            page = page - 1;
        }
        //convertando pra integer
        page = parseInt(page);
        perPage = parseInt(perPage);
        //select com pagination com token
        if(req.body.token == true){
            await Usuario.findAndCountAll({offset: page, limit: perPage,include: [Token]}).then(u => res.send(u));
        //select com pagination sem token
        }else{
            await Usuario.findAndCountAll({offset: page, limit: perPage}).then(u => res.send(u));
        }
    },
    async create(req, res){
        const body = req.body;
        //encriptando senha
        body.senha = encrypt(body.senha);

        //função para criar token pro usuario novo
        addToken = (usuarioId) =>{
            usuarioId = usuarioId.toString();
            const token = encrypt(usuarioId);
            Token.create({
                "token": token,
                "usuarioId" : usuarioId
            }).then( res.send(200));
        }

        await Usuario.create(body).then(usuario => addToken(usuario.id));
    },
}