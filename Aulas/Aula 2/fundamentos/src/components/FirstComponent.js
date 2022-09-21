import MyComponent from "./MyComponent";

const FirstComponent = () => {

    // Algum comentário
    return (
        <div>
            {/* Algum comentário */}
            <h1>Meu primeiro component</h1>
            <p className="p-class">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;