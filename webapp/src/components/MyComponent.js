import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(){
       super();

        this.state = {
            name: null,
            city: null
        };
    }

    componentDidMount(){
        fetch('/api/')
         .then(response => response.json()
         .then(data => {
                            this.setState({ name : data.name });
                            this.setState({ city : data.city });
                        }
               ));
    }

    render() {
       return (
       <div>
       <div> {this.state.name} </div>
       <div> {this.state.city}  </div>
       </div>
       );
    }
}

export default MyComponent;