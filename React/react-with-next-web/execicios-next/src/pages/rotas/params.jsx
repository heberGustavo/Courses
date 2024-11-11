/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import ElementH1andSpan from "../../components/ElementH1andSpan";
import Link from "next/link";

export default function params(){
    return(
        <div>
            <h1>Params</h1>
            <h3>This page get info in URL dynamic</h3>
            <span>Example: [...]params?nome=heberGustavo&idade=25&peso=80</span>
            <br /><br />
            <div>
                {getElementsInQuery()}
            </div>

            <br /><br />
            <Link href="/rotas">
                <button>Redirect to Rotas</button>
            </Link>
        </div>
    );
}

const getElementsInQuery = () => {
    const params = useRouter().query;

    let arrayItems = Object.entries(params);
    return arrayItems.map((element, i) => <ElementH1andSpan key={i} e1={element[0]} e2={element[1]}  />)
}