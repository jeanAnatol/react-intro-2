import {Component} from "react";

class ClassComponent extends Component{
    //Begin return with render()
    render() {
        const title: string = "Is a Class component";
        //return html <h1>{...}</h1>
        return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
    }
}
//Always export
export default ClassComponent;