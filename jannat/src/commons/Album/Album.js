import React, { Component } from 'react';

import AlbumItem from './AlbumItem';
import { Row, Col } from 'reactstrap';


class Album extends Component {

  state = {

    albums: [

      {name:"Gulmarg", url:"http://localhost:3000/assets/img/1.jpg", selected:false, id:1},
        {name:"Pahalgam", url:"http://localhost:3000/assets/img/2.jpg", selected:false, id:2},
        {name:"Sonamarg", url:"http://localhost:3000/assets/img/3.jpg", selected:false, id:3},
        {name:"Khilanmarg", url:"http://localhost:3000/assets/img/4.jpg", selected:false, id:4},
        {name:"Dachigam", url:"http://localhost:3000/assets/img/5.jpg", selected:false, id:5},
        {name:"Kokarnag", url:"http://localhost:3000/assets/img/6.jpg", selected:false, id:6},
        {name:"Verinag", url:"http://localhost:3000/assets/img/7.jpg", selected:false, id:7},
        {name:"Chandanwadi", url:"http://localhost:3000/assets/img/8.jpg", selected:false, id:8},
        {name:"Tangmarg", url:"http://localhost:3000/assets/img/9.jpg", selected:false, id:9}
    ]
  };

  albumClickHandler = (item) => {

    console.log("Album Item Clicked..  "+item.name);
    this.setState({albums:[

        {name:"Gulmarg", url:"http://localhost:3000/assets/img/1.jpg", selected:false},
        {name:"Pahalgam", url:"http://localhost:3000/assets/img/2.jpg", selected:false},
        {name:"Sonamarg", url:"http://localhost:3000/assets/img/3.jpg", selected:false},
        {name:"Khilanmarg", url:"http://localhost:3000/assets/img/4.jpg", selected:false},
        {name:"Dachigam", url:"http://localhost:3000/assets/img/5.jpg", selected:false},
        {name:"Kokarnag", url:"http://localhost:3000/assets/img/6.jpg", selected:false},
        {name:"Verinag", url:"http://localhost:3000/assets/img/7.jpg", selected:false},
        {name:"Chandanwadi", url:"http://localhost:3000/assets/img/8.jpg", selected:false},
        {name:"Tangmarg", url:"http://localhost:3000/assets/img/9.jpg", selected:false},
        {name:"Peerbagh", url:"http://localhost:3000/assets/img/10.jpg", selected:false}
        
    ]});


  }
  render() {
    return (

      <Row> 
        {
          this.state.albums.map((albumItemData,index)=>{
            
              return (
                <Col sm="3" key={albumItemData.id}>
                  <AlbumItem item={albumItemData} clickHandler={this.albumClickHandler}/>
                </Col>
              );
          })
        } 
      </Row>
    );
  }
}

export default Album;
