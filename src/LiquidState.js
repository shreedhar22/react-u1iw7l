import React from "react";
import ReactDom from "react-dom"
import {render} from "react-dom"
import {useState} from "react"

function LiquidState (props) {

  var [state, setState] = useState(0)

  function handleChange(e) {
    console.log("We are converting gallons to litres", e.target)
    var gallon_value = litresToGallons(e.target.value)
    setState(gallon_value)
  }

  function litresToGallons(e) {
    // gallons = value*0.264172
    // useState(gallons)
    var litres = e.target.value
    setState(litres * 0.264172)
  }

  function gallonsToLitres (e){
    // litres = state*3.78541
    // useState(litres)
    var gallons = e.target.value
    setState(gallons* 3.78541)
  }

  return (
    <div>
      <p>Volume in  Litres </p>
      <input value = {state} onChange = {litresToGallons}/>
      <br/>
      <p>Volume in  Gallons </p>
      <input onChange = {gallonsToLitres}/>


    </div>
  )
}

function App () {
  return (

    <div>
      <h2>We are gonna change states of the Liquid</h2>
      <LiquidState />
    </div>
  )
}

export default App;
render(<App />, document.getElementById("root"))