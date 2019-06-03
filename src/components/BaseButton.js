import React, {Component} from 'react';
import './style.css';

export default class BaseButton extends Component {
     render(){
          return(
               <input type = "button" id = {this.props.id} className ={this.props.className} value ={this.props.value} onClick = {this.props.ButtonClick}></input>
          );
     }
}