class Prato{
    constructor(PratoModel){
        this.prato = PratoModel;
    }

    async cadastrarPrato(req, res){
        try {
            const myPrato = new this.prato(req.body); 
            await myPrato.save();
            res.status(201).json({msg: 'Prato Cadastrado!'});
        } catch (error) {
            res.status(401).send(error);        
        }
    }

}

module.exports = Prato;