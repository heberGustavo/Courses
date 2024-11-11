/*
    EM PRODUÇÃO: Quando usa essa função, é chamado somente uma vez a renderização da propriedade
    npm run build
    npm start
*/
export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props){
    return(
        <div>
            <h1>Estatico #02</h1>
            <h2>{props.numero}</h2>
        </div>
    );
}