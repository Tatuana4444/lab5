import React, {Component} from 'react';
import '../css/SearchInput.css';
import BaseInput from './BaseInput.js';


export default class SearchInput extends Component {     
    render(){
        return (
            <BaseInput id = "header__searth-text"  KeyUp = {this.props.EnterClick}/>
        )
     }
}