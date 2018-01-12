var React = require('react');

class Base extends React.Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        )
    }
}

module.exports = Base;