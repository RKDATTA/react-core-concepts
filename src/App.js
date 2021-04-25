import React,  { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Dr. Mahfuzur Rahman ATN"

  var person = {
    name : "Dr. Mahfuzur Rahman",
    job : "Singer"
  }
  const products=[
    {name : 'photoshop', price : '90.99'},
    {name : 'illustrator', price : '60.99'},
    {name : 'pdfWriter', price : '9.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done todoto<code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>My Heading {2+3} </h1>
        <Users> </Users>
      
        <Counter></Counter>
        <p>My First React Paragraph. </p>
        <p>My Second React Paragraph</p>            
        <Person name="Rubel" profession="Merchandiser"></Person>
        <Person name="Srabani" profession="Teacher"></Person>
        <Person> </Person>
        <Product name={products[0].name} price={products[0].price}> </Product>
        <Product name={products[1].name} price={products[1].price}> </Product>
        <Product name={products[2].name} price={products[2].price}> </Product>
        
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h2> My Name : {props.name} </h2>
      <h3> My Profession :{props.profession} </h3>
    </div>
  )
}

function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius :'5px',
    backgroundColor : 'lightgray',
    height :'200px',
    width : '500px',
  }
return(
  <div style={productStyle}>
    <h3> Product Name : {props.name} </h3>
    <h1> Price : {props.price} </h1>
    <button>Buy Now : </button>
  </div>

)
}

function Counter(){
  const[count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  } 

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  } 

  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleIncrease}>Increase : </button>
      <button onClick={handleDecrease}>Decrease : </button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users :{users.name} </h3>
      <ul>
         {
          users.map(user=> <li>{user.email}</li>)
         }
    </ul>
    </div>

    

  )

}



export default App;
