import React, { useState, Component } from 'react';
import './index.css';


class ChangeButton extends Component{
    constructor(props){
        super(props);
        this.state={
            zoom:1
        }
    }

render(){

const {}=this.state;
return(
<div id="zjl_react-zoom" className="zjl_zoom_wrapper">
    <div className="zjl_zoom_btn_wrap">
        <button className="zjl_zoom_btn" onClick={()=>{
            let {zoom}=this.state;
            this.setState({zoom:zoom+0.1})
            }}> +
        </button>test2.2.0
        <button className="zjl_zoom_btn" onClick={()=>{
            let {zoom}=this.state;
            this.setState({zoom:zoom-0.1})
            }}> -
        </button>
    </div>
    <div className="zjl_zoom_container" style={{transformOrigin:'0 0',transform:`scale(${this.state.zoom})`}}>
        {this.props.children}
    </div>
</div>
)
}
}

export default ChangeButton;