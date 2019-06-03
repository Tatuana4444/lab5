import React from 'react';


export default function BaseButton(props){
     return(
        <a href={props.url}>
            <h3>{props.title}</h3>
        </a>
     );
}