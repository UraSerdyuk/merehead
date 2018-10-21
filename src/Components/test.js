import React, { Component } from 'react';
import { createStore } from 'redux'
import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import '././css/style.css';
class Test extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            posts : [],
            activePage: 0,
            preloader: true
         };
 
      }
      
      
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber }); 
      }
   
    componentDidMount() {
    setTimeout(()=>{
        fetch('http://dev.frevend.com/json/users.json')
    .then(function(response){
       return  response.json();
    }).then(function(data){

        let arr = [];
             data.users.forEach(function(i) {
                 arr.push(i);
             });
             return arr;
         }).then((posts)=> {
             console.log(posts);
             this.setState({ posts });
             this.setState({ preloader : false });
         })
    },3000)
  
} 

render() {
const LoaderStyle = styled.div`
            text-align: center;
            padding: 22%;
    
`;
const Paragraf = styled.p`
            text-align: center;
            font-size: 30px;
            padding-top: 4%;
    
`;
const Card = styled.div`
display: flex;
margin: auto;
            padding: 2%;
            border: 1px solid black;
            width: 500px;
            border-radius: 18px;
            margin-bottom: 100px;
`;



    return(
                <div  className='main'>

                {(this.state.preloader)? <LoaderStyle>
                                                <Loader type="Bars" color="#somecolor" height={100} width={100} />
                                        </LoaderStyle>: <div>
                                        <Paragraf> testing work   front-end developer  Merehead </Paragraf>
                                       
                                        <Pagination 
                                        
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={5}
                                            totalItemsCount={20}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange.bind(this)}
                                        />
                                       
                </div> }

                {(this.state.activePage === 1)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >0 && key.id <=5 ){
                            return <Card key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </Card>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 2)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >5 && key.id <=10 ){
                            return <Card key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </Card>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 3)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >10 && key.id <=15 ){
                            return <Card key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </Card>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 4)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >15 && key.id <=20 ){
                            return <Card key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </Card>
                        }
                    
                  })}
                </div> : ''}
               
 </div>
    );
}
}
export default Test;