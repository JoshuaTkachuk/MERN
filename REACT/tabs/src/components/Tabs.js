import React, { useState } from 'react';
const Tab= (props) =>{
    const onClickHandler=(e,item) =>{
        props.setContent(item.content);
    }
        return props.items.map((item , index) =>{
            return <button id={item.label} key={index} style={{border: 'solid' ,margin: '15px'}}onClick={ (e) => onClickHandler(e, item) }>{ item.label }</button>
    }
    );
}
export default Tab;