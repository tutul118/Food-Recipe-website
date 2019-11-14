import React from 'react';


export interface RecipeProps{
    title: string;
    calories: number;
    image: string;
    ingredient: string;
}

export default function Recipe (props: RecipeProps){
    return(
        <div className= 'recipe-section'>
            <h1>{props.title} </h1>
            <ol>
                <li>{props.ingredient}</li>
        
            </ol>
            <p>{props.calories}</p>
            <img className= 'images' src={props.image} alt=""/>
        </div>
    )
}