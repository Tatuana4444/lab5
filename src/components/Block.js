import React from 'react';
import '../css/Block.css';
import Link from './Link.js';

export default function ListArticle(props){
    if (props.urlToImage==null)
        props.urlToImage='./picture/pic.jpg';
    if (props.description==null) 
        props.description='';
    let SourceLink = Link(props);
    return(
        <div>
            <img src={props.urlToImage} alt=''/>
            {SourceLink}
            <h6>{props.source.name}</h6>
            <p>{props.description}</p>
        </div>

    );
}