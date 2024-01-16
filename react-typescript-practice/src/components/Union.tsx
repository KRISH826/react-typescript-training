/** @format */

type StatusMode = {
    status: "success" | "error" | "loading";
};

const Union = ({ status }: StatusMode) => {
    if (status === "success") {
        return <h2>Data is Sucessful</h2>;
    } else if (status === "error") {
        return <h2>Data is Error</h2>;
    } else {
        return <h2>Data is Loading....</h2>;
    }

    return <div></div>;
};

export default Union;
