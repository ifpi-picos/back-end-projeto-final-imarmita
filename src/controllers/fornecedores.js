class Fornecedor{

    constructor(Fornecedor){
        this.fornecedor = Fornecedor;
    }

    async cadastrarFornecedor(req, res){

        try {
            const fornecedor = new this.fornecedor(req.body);
            await fornecedor.save();
            res.status(200).send("Fornecedor Cadastrado!"); 
        } catch (error) {
            res.status(400).send(error);
        }
        
    }

}

module.exports = Fornecedor;