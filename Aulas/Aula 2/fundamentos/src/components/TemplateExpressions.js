const TemplateExpressions = () => {

    const data = {
        age: 20,
        name: "Gustavo"
    };

    return (
        <div>
            <h1>{data.name} tem {data.age} anos</h1>
        </div>
    )
}

export default TemplateExpressions;