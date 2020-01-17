class Fornecedor{

    constructor(Fornecedor){
        this.fornecedor = Fornecedor;
    }

    async cadastrarFornecedor(req, res){
        
        try {
            const fornecedor = new this.fornecedor(req.body);
            await fornecedor.save();
            res.status(201).json({msg: 'Fornecedor cadastrado'}); 
        } catch (error) {
            console.log(error)
            res.status(401).send(error);
        }
        
    }

}

module.exports = Fornecedor;