import React from 'react';
import Block from './Block.js';

export default function ListArticle(props){
    if (props.urlToImage==null)
        props.urlToImage='./picture/pic.jpg';
    if (props.description==null) 
        props.description='';
    let BlockOfNews = Block(props);
    return(        
            <li key = {props.title}>
                {BlockOfNews}
            </li>     
    );
}