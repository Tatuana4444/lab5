import React, {Component} from 'react';
import '../css/SearchButton.css';
import BaseButton from './BaseButton.js';


export default class SearchButton extends Component {     
    render(){
        return (
            <BaseButton id = "header__searth-btn" className = "header__searth" value ="Search" ButtonClick = {this.props.SearchClick}/>
        )
     }
}