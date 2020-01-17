class Cliente{
    constructor(ClienteModel){
        this.cliente = ClienteModel;
    }

    async cadastrarCliente(req, res){
        try {
            const myCliente = new this.cliente(req.body); 
            await myCliente.save();
            res.status(201).json({msg: 'Cliente Cadastrado!'});
        } catch (error) {
            res.status(401).send(error);        }
    }

}

module.exports = Cliente;