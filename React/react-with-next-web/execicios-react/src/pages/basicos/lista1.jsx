export default function lista1(){
    return(
        <>
        <div>
            {
                gerarLista(15)
            }
        </div>
        <div>
            {
                gerarLista(20)
            }
        </div>
        </>
    );
}

function gerarLista(final = 10){
    let array = [];
    let addComma = true;
    for (let i = 0; i <= final; i++) {
        if(i == final) addComma = false;
        
        array.push(<span>{i}{addComma ? "," : ""}</span>)
    }

    return array;
}