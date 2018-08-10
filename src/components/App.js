import React, {PropTypes} from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <p>header here ...</p>
        {this.props.children}
      </div>
    )
  }

}

App.protoType = {
  children:PropTypes.object.isRequired
};

export default App;