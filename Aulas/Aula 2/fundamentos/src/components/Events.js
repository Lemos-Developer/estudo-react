const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Rendezirando isso!</h1>;
        } else {
            return <h1>Renderizando aquilo!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log('clicou')}>Clique aqui também</button>
            </div>

            <button onClick={() => {
                if (true) {
                    console.log("Isso não deveria existir")
                }
            }}>Clique aqui, por favor</button>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;