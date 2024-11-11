/*
    EM PRODUÇÃO: Quando usa essa função, é chamado somente uma vez a renderização da propriedade
    npm run build
    npm start
*/
export function getStaticProps(){
    return {
        revalidate: 7, /*Faz nova buscar após 7s */
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props){
    return(
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    );
}