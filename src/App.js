import React, { Component } from 'react'

export class App extends Component {
  state = {
    Person : { fullName : "Safa Chaabane",bio: "i'm from Tunisia Bni Khalled", imgSrc:"/safsaf.jpg", profession:"i'm web developer "},
    shows :false,
    count : 0
    
  }
  toggle = () =>{
this.setState({Shows:!this.state.Shows})
}

  render() {
    const count = this.state.count
    return (
      <div>
         {
          this.state.Shows === true ?
          <div>
          <h1>{this.state.Person.fullName}</h1>
          <h1>{this.state.Person.profession}</h1>
          <div><img src={this.state.Person.imgSrc} alt={"safa"}style={{width:500}}></img></div>
          <h1>{this.state.Person.bio}</h1>
          <h1>Current Count : {count}</h1>
          <button onClick={()=>this.toggle()}>Hide</button>
        </div>
        : <div><h2>Show the counter </h2>
        <button onClick={()=>this.toggle()}>Show</button></div>
        }
   

         </div>)
    }
    componentDidMount() {
      this.myInterval = setInterval (()=>{
        this.setState(prevState => ({
          count: prevState.count + 1
      }))
    }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.myInterval)
    }
  }
export default App;
