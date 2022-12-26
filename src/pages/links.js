import React from "react";
function1 = () => {
    console.log(this);

    var param1 = 10;

    const function2 = () => {
      console.log(this);

      var a = param1*2;

      this.setState({ a }); 
    }

    function2(); // inkove the function
};
 export default function1;
 

