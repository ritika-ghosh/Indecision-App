//JSX- Javascript XML
const title = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;

    if(option){
        title.options.push(option);
        e.target.elements.option.value = '';
        renderJsx();
    }
}

const remove = () => {
    title.options = [];
    renderJsx();
} 

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * title.options.length);
    const option = title.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app');

const renderJsx = () => {
    const template = (
        <div>
            <h1>{title.title}</h1>
            {title.subtitle && <p> {title.subtitle}</p>}
            <p>{title.options.length > 0 ? 'Here are Your options' : 'No options'}</p>
            <button disabled={title.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>
               { title.options.map((opt) => {
                    return <li key = {opt}> {opt}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        
        </div>
        );
    
    ReactDOM.render(template, appRoot);
}

renderJsx();