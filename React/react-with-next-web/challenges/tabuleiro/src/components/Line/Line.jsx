import Block from "@/components/Block/Block";

export default function Line(props) {
    return (
        <>
            {Blocks(props.y, props.color)}
        </>
    );
}

function Blocks(size, colorStart) {
    var viewBlocks = [];
    let lastColor = colorStart;

    for (let i = 0; i < size; i++) {
        viewBlocks.push(<Block key={i} color={lastColor} />);
        lastColor = lastColor === "white" ? "black" : "white";
    }

    return viewBlocks;
}