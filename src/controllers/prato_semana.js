class Prato_Semana{
    constructor(Prato_SemanaModel){
        this.prato_semana = Prato_SemanaModel;
    }

    async cadastrarPrato_Semana(req, res){
        try {
            const myPrato_semana = new this.prato_semana(req.body); 
            await myPrato_semana.save();
            res.status(201).json({msg: 'Prato da Semana Cadastrado!'});
        } catch (error) {
            res.status(401).send(error);        
        }
    }

}

module.exports = Prato_Semana;