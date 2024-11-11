/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({msg: "Você chamou o método GET"})
    }
    else{
        res.status(200).json({msg: "Você NÃO chamou o método GET"})
    }
}