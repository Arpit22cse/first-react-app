import PropTypes from 'prop-types'
function Mybutton(props) {

  
  return <>
  <button onClick={(e)=>{console.log("hello")}}>click me</button>
  <h1>Hello {props.name}</h1>
  <h3>you are {props.age} years old</h3>
  </>


  
}
Mybutton.propTypes={
  name: PropTypes.string,
  age: PropTypes.number
}
Mybutton.defaultprops={
  name:"None",
  age:"None"
}
export default Mybutton;