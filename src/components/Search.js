import React, {Component} from 'react';
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default class Search extends Component {
     
     render(){
          return (
               <div>           
                    <SearchInput EnterClick = {this.props.EnterClick}/>
                    <SearchButton SearchClick = {this.props.SearchClick}/>
               </div> 
          )
     }
}