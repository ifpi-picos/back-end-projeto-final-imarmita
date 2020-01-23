class Login{
    constructor(clienteModel, fornecedorModel){
        this.cliente = clienteModel;
        this.fornecedor = fornecedorModel;
    };

    async login(req, res){
        console.log(req.body)
        const user = req.body;
        try {
            if(user.tipo === "cliente"){
                const usuario = await this.cliente.findOne({email: user.email});
                if(usuario){
                    if(usuario.senha === user.senha){
                        const usuarioLogado = {
                            msg: "Usuario logado",
                            usuario: {
                                id: usuario._id,
                                nome: usuario.nome,
                                tipo: "cliente",
                                email: usuario.email
                            }
                        }
                        res.status(200).send(usuarioLogado);
                    } else {
                        res.status(400).send({msg: "Senha incorreta"})
                    }
                } else {
                    res.status(400).send({ msg: 'Nenhum usuario encontrado'});
                }
                
            } else if(user.tipo === "fornecedor"){
                const fornecedor = await this.fornecedor.findOne({email: user.email});
                if(fornecedor){
                    if(fornecedor.senha === user.senha){
                        const usuarioLogado = {
                            msg: "Usuario logado",
                            usuario: {
                                id: fornecedor._id,
                                nome: fornecedor.nome,
                                tipo: "fornecedor",
                                email: fornecedor.email
                            }
                        }
                        res.status(200).send(usuarioLogado);
                    } else {
                        res.status(400).send({msg: "Senha incorreta"})
                    }
                } else {
                    res.status(400).send({ msg: 'Nenhum usuario encontrado'});
                }
            } else{
                res.status(400).send({
                    msg: "Informe o tipo de usuario"
                })
            }
        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    }
}

module.exports = Login;