export async function getStaticPaths() {
    const req = await fetch("http://localhost:3000/api/alunos/tutores");
    const idsTutores = await req.json();

    const paths = idsTutores.map(id => {
        return { params: { id: `${id}` } }
    });

    return {
        fallback: true, // false => 404
        paths
    }
}

export async function getStaticProps(context) {
    const req = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`);
    const aluno = await req.json();

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props;

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {
                aluno ?
                    <ul>
                        <li>{aluno.id}</li>
                        <li>{aluno.nome}</li>
                        <li>{aluno.email}</li>
                    </ul>
                : false
            }
        </div>
    );
}