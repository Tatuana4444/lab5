import React, {Component} from 'react';
import './style.css';

export default class BaseButton extends Component {
     render(){
          return(
               <input type = "text" id = {this.props.id} onKeyUp = {this.props.KeyUp}></input>
          );
     }
}