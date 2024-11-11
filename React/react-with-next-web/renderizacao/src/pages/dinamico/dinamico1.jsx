/*
    - Quando esta consumindo API precisa seguir os passos:
        1) Exclua a pasta ./next
        2) Rode npm cache clean --force
        3) No terminal cmd 1 rode npm run dev
        4) APAGUE o arquivo ./next/trace
        5) No terminal cmd 2 rode npm run build (duas vezes)(na primeira pode dar um erro)
        6) No terminal cmd 1 pare o serviço (CRTL +C)
        7) No terminal cmd 2 execute npm start
*/

export function getServerSideProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props){
    return(
        <div>
            <h1>Dinamico #01</h1>
            <h3>{props.numero}</h3>
        </div>
    );
}