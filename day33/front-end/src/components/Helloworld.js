import React,{Component} from "react";
//To maintain data of the state is challenging in class component
//class components is very rarely used in industry
class Helloworld extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello, Everyone"
        };
    }

    updateMessage = ()=>{
        this.setState({message : "Hello, codeBegun , I am doing Great",count:2});
    }

    render(){ //render method is the only difference between fun and class components
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.updateMessage}>Update Data</button>
            </div>
        )
    }
}

export default Helloworld;