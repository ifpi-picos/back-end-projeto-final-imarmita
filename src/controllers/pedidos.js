class Pedido{
    constructor(PedidoModel){
        this.pedido = PedidoModel;
    }

    async efetuarPedido(req, res){
        try {
            const myPedido = new this.pedido(req.body); 
            await myPedido.save();
            res.status(201).json({msg: 'Pedido Efetuado!'});
        } catch (error) {
            console.log(error);
            res.status(401).send(error);        
        }
    }
}

module.exports = Pedido;