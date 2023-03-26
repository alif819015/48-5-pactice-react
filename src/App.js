import logo from './logo.svg';
import './App.css';
import './blogs/Blog.css'
import './components/Mobile.jsx'
import { useState } from 'react';
import Mobile from './components/Mobile.jsx';

function App() {
  return (
    <div className="Blog">
      <Practice></Practice>
      <Blog name="Mahmud Hasan Alif" address="Kushtia"></Blog>
      <Blog2 name ="Hazrot Mohammad Solelahialaihiuassallam" address="Mokka" profesion="Din pochar"></Blog2>
      <Blog3 name="Mahmud Hasan" id="20183290492" study="Yunnan University"></Blog3>
      <Mobile></Mobile>
    </div>
  );
}

const displayStyle={
  backgroundColor: 'yellow',
  border: '2px solid blue',
  padding: '20px',
  borderRadius: '20px',
  margin: '20px'
}
function Practice(){
  return(
    <div>
      <h1 style={displayStyle}>Welcome React World</h1>
      <p style={{color: 'red', backgroundColor: 'skyBlue', border: '3px solid blue', borderRadius: '20px', padding: '10px'}}>I am from Bangladeshi</p>
    </div>
  )
} 

function Blog(props){
  return(
    <div>
      <h3>Blog Component</h3>
      <p>Name: {props.name}</p>
      <p><small>Address: {props.address}</small></p>
    </div>
  )
}

function Blog2(props){
  return(
    <div className='Blog2'>
      <h1>Rasul: {props.name}</h1>
      <p>Location: {props.address}</p>
      <p>Profession: {props.profesion}</p>
    </div>
  )
}

function Blog3(props){
  const [power, setPower] = useState(1);
  const count = ()=>setPower(power * 2);
  // {
  //   const newCount = power * 2;
  //   setPower(newCount);
  // }
  return(
    <div className='Blog3'>
      <h1>Name: {props.name}</h1>
      <h3>Id: {props.id}</h3>
      <p>Study: {props.study}</p>
      <h3>Power: {power}</h3>
      <button onClick={count}>Click me</button>
    </div>
  )
}

export default App;
