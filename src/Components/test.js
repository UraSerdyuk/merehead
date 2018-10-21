import React, { Component } from 'react';

import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner'
class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            posts : [],
            activePage: 15
         };
        
      }
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
      }
   
    componentDidMount() {
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
         })
  
} 

render() {
    return(
        <div >
            <Loader 
         type="Puff"
         color="#00BFFF"
         height="100"	
         width="100"
      />  
           {this.state.posts.map((key)=>{
                return <div key={key.id}>
                     <p>{key.name}</p>
                     <p>{key.surname}</p>
                     <p>{key.desc}</p>
                </div>
            })}
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
            

        </div>
    );
}
}
export default Test;