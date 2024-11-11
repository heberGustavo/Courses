/*
    EM PRODUÇÃO: Quando usa essa função, é chamado somente uma vez a renderização da propriedade.
        - Quando esta consumindo API precisa seguir os passos:
            1) Exclua a pasta ./next
            2) Rode npm cache clean --force
            3) No terminal cmd 1 rode npm run dev
            4) APAGUE o arquivo ./next/trace
            5) No terminal cmd 2 rode npm run build (duas vezes)(na primeira pode dar um erro)
            6) No terminal cmd 1 pare o serviço (CRTL +C)
            7) No terminal cmd 2 execute npm start
*/

export async function getStaticProps() {
    const resp = await fetch("http://localhost:3000/api/produtos");
    const produtos = await resp.json();

    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {

    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>{produto.nome} tem preço de R$ {produto.preco}</li>
        });
    }

    return (
        <div>
            <h1>Estatico #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    );
}