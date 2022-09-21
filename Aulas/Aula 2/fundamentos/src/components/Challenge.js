const Challenge = () => {

    const firstValue = 30;
    const secondValue = 20;

    const handleSomar = (e) => {
        console.log(firstValue + secondValue);
    }

    return (
        <div>
            <h2>Primeiro valor é {firstValue} e o Segundo valor é {secondValue}</h2>
            <button onClick={handleSomar}>Clique aqui para somar</button>
        </div>
    );
}

export default Challenge;