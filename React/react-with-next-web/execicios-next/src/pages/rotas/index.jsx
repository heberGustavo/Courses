import Link from "next/link";
import router from "next/router";

export default function rotas(){
    
    const UrlBuscar = "/rotas/123/buscar";
    const UrlParams = "/rotas/params?nomeCompleto=HeberGustavo&apelido=Gustavo";
    const UrlIdWithName = "/rotas/321/HEBER";

    const navegacaoSimples = (url) => {
        router.push(url);
    }

    const navegacaoComParams = () => {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: "Navegação Fixa"
            }
        });
    }
    return(
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href={UrlParams}>
                    <li>Redirect to Params</li>
                </Link>
                <Link href={UrlBuscar}>
                    <li>Redirect with ID</li>
                </Link>
                <Link href={UrlIdWithName}>
                    <li>Redirect with ID and NAME</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push(UrlBuscar)}>Buscar</button>
                <button onClick={() => navegacaoSimples(UrlIdWithName)}>ID with Name</button>
            </div>
        </div>
    );
}