import React, {Component} from "react";
import Input from "./Input"

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef()
  }
  handleClick = () => {
    this.componentRef.current.focusInput()
    console.log(this.componentRef.current)
  }
  render() { 
    return ( 
      <>
        <Input ref={this.componentRef}/>
        <button onClick={this.handleClick}> Click to focus</button>
      </>
    );
  }
}
 
export default FocusInput;