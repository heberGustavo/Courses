import Line from "@/components/Line/Line";

export default function Tabuleiro(props) {
    return (
        <>
            {
                ContainerStartWhite(props.x, props.y)
            }
        </>
    );
}

function ContainerStartWhite(x, y) {
    var rows = [];

    for (let i = 0; i < x; i++) {
        let divivelPorDois = i % 2 == 0;
        rows.push(
            <div>
                <Line y={y} color={divivelPorDois ? "white" : "black"} />
            </div>
        );
    }
    return rows;
}