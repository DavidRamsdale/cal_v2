import React from 'react';
import './food-item-list.styles.scss'

const ItemCollection = ({ intake_list }) => (
    <div className='item-preview' >
        <div className='preview'>
            {intake_list
            .map((item) => (
                <div className="item-container" key={item.food_name}> 
                    <div className="image-container"> 
                        <img className="image" src={item.thumb} alt='item'/>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <span className="top-info">{item.food_name}</span>
                            <span>{item.serving_qty} {item.serving_unit} ({item.serving_weight_grams} g)</span>                        
                        </div>
                        <div className="item-right">
                            <span className="top-info">{Math.round(item.nf_calories) * item.serving_qty} cal</span>                        
                            <span>{item.meal_type}</span>                        
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ItemCollection;
