const usuarios = [];

export default function form(req, res){
    if(req.method === "POST"){
        post(req, res);
    }
    else if(req.method === "GET") {
        get(req, res);
    }
    else {
        res.status(405).send();
    }
}

const post = (req, res) => {
    if(req.body != null){
        usuarios.push(JSON.parse(req.body));
        res.status(200).send();
    }
}

const get = (req, res) => {
    res.status(200).json(usuarios)
}