export default function questao(req, res) {
    if(req.method === "GET"){
        get(req, res)
    }
    else{
        res.status(405).send();
    }
}

const get = (req, res) => {
    const id = req.query.id;

    res.status(200).json({
        id,
        enunciado: "Qual a sua cor favorita?",
        respostas: ['Branca', 'Vermelha', 'Preta' ]
    });
}