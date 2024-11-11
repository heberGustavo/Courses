export default function handler(req, res){
    const id = +req.query.id;

    res.status(200).json({
        id,
        nome: `Heber Gustavo ${id}`,
        email: `heber.teste${id}@gmail.com`
    });
}