var React = require('react');

const inputParsers = {
    date(input) {
        const split = input.split('/');
        const day = split[1]
        const month = split[0];
        const year = split[2];
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class ShakingError extends React.Component {
    constructor() { super(); this.state = { key: 0 }; }

    componentWillReceiveProps() {
        // update key to rerender the component to rerun the animation
        this.setState({ key: ++this.state.key });
    }

    render() {
        return <div key={this.state.key} className="bounce">{this.props.text}</div>;
    }
}

class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({ invalid: true });
            return;
        }
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;
            console.log('parser name is', parserName);
            if (parserName) {
                const parsedValue = inputParsers[parserName](data.get(name))
                data.set(name, parsedValue);
            }
        }

        this.setState({
            res: stringifyFormData(data),
            invalid: false,
        });

        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }

    render() {
        const { res, invalid } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        data-parse="uppercase"
                    />
                    <br />

                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" />
                    <br />

                    <label htmlFor="birthdate">Birthdate:</label>
                    <input
                        id="birthdate"
                        name="birthdate"
                        type="text"
                        data-parse="date"
                        placeholder="MM/DD//YYYY"
                        pattern="\d{2}\/\d{2}/\d{4}"
                        required
                    />
                    <br />

                    <button>Send data!</button>
                </form>



                <div className="res-block">
                    {invalid && (
                        <ShakingError text="Form is not valid" />
                    )}
                    {!invalid && res && (
                        <div>
                            <h3>Transformed data to be sent:</h3>
                            <pre>FormData {res}</pre>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

/*
ReactDOM.render(
    <MyForm />,
    document.getElementById('app')
);
*/


function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

module.exports= MyForm;