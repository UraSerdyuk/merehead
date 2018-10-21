import React, { Component } from 'react';
import { createStore } from 'redux'
import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner'
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
    return(
                <div >

                {(this.state.preloader)? <Loader type="Bars" color="#somecolor" height={80} width={80} /> : <div>
                <p> testing </p>
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
                            return <div key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </div>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 2)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >=5 && key.id <=10 ){
                            return <div key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </div>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 3)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >=10 && key.id <=15 ){
                            return <div key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </div>
                        }
                    
                  })}
                </div> : ''}
                {(this.state.activePage === 4)?<div>
                    {this.state.posts.map((key)=>{
                        if(key.id >=15 && key.id <=20 ){
                            return <div key={key.id}>
                            <p>{key.id}</p>
                            <p>{key.name}</p>
                            <p>{key.surname}</p>
                            <p>{key.desc}</p>
                        </div>
                        }
                    
                  })}
                </div> : ''}
               
 </div>
    );
}
}
export default Test;