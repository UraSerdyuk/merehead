import React, { Component } from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = { posts : [] };
        
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
           {this.state.posts.map((key)=>{
                return <div key={key.id}>
                     <p>{key.name}</p>
                     <p>{key.surname}</p>
                     <p>{key.desc}</p>
                </div>
            })}
            

        </div>
    );
}
}
export default Test;