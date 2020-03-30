const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    //Método para listar ongs
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs)
    },

    //método para criar ongs no banco
    async create(request, response) {
        //Criando entidade
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        //Conectando com o banco

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};