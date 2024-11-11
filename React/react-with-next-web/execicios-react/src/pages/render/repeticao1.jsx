export default function Repeticao1(){
    const listaAprovados = [
        'Heber',
        'Gustavo',
        'Priscila',
        'Marques',
        'Adeilson',
        'Rosimar',
    ];

    function renderizarListaAprovados(listaAprovados){
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return(
        <ul>
            { renderizarListaAprovados(listaAprovados) }
        </ul>
    );
}