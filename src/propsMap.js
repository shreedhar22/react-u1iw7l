import React from "react";
import { render } from "react-dom";

/* 
"Growing up with Looping and PropTypes" Exercise

OBJECTIVES:
1) Replace the <option> tags for the dropdown with your own list.

2) If the list is short, display a message asking for more items. If the list is long, show a message stating how long the list is.

3) Set up a default value for the prop you set up in step 1)

4) Set up the following PropTypes for <List />:
- array prop set up in 1) should be an array, and should be required
- "cfg" prop that takes an object with the shape: {color: 'red', size: 10}. This prop is optional.

*/

function List(props) {

  var dropdown_list = props.dropdown.map(function (item){
    return <option>{item}</option> ;
  })

  if (props.dropdown.size)  10(
    console.log("size of dropdown is greater")
  )
  return (
    <div>
      <h3>Q: Who do you want to be when you grow up?</h3>
      <select>
        {dropdown_list}
      </select>
    </div>
  );
}

var dropdown = ["Cool", "SpaceBoy", "Beehiver", "Astronaut", "CenterBackward", "QuiditchPlayer"] 

render(<List dropdown={dropdown} />, document.getElementById("my-app"));