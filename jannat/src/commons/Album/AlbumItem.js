import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

const albumItem = (props) => {
    
    return (

        <div style={{cursor:'pointer', marginTop:'10px',minHeight:'300px', maxHeight:'300px'}} onClick={props.clickHandler.bind(this,props.item)}>
            <CardImg top width="100%" src={props.item.url} alt="Card image cap" style={{minHeight:'200px', maxHeight:'200px', border:'solid white'}}/>
            <Card body style={{backgroundColor:'#488214', borderRadius:'0px'}}>
                <CardTitle style={{color:'white',fontFamily:"'Gill Sans', 'Gill Sans MT'"}}>{props.item.name}</CardTitle>
            </Card>
        </div>

        
    )

};

export default albumItem;