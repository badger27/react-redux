import React from 'react';


class AboutPage extends React.Component{
  render(){
    return (

    <div className = "jumbotron">
      <h1>About</h1>
      <p>react</p>
      <Link to="about" className="btn btn-primary btn-lg" >Learn more</Link>
    </div>
    )
  }

}

export default AboutPage;
