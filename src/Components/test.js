import React, { Component } from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = { posts : [] };
        this.state ={isOpened:false};
      }

    click() {
        console.log(this.state.posts[0].name);


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
            <div onClick={this.click.bind(this)}>
                test message

            </div>
        );
    }
}
export default Test;