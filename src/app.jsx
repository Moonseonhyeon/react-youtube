import React, { Component } from 'react';
import MostPopularList from './components/mostPopularList';

class app extends Component {
  state ={
    items : []
};

componentDidMount () {
  //데이터를 가져오는 작업 등
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDtqQ6XVjE1KRWpSI4mpFHgny0k5fdjnbA")
  .then((response) => response.json())
  .then((data) => this.setState({items:data.items.map(function(item){
      let id = item.id;
      //let snippet = item.snippet;
      let publishedAt = item.snippet.publishedAt;
      let title = item.snippet.title;
      let description = item.snippet.description;
      //let thumbnails = item.snippet.thumbnails;
      //let thumbnailsDefault = item.snippet.thumbnails.default;
      let thumbnailsDefaultUrl = item.snippet.thumbnails.default.url;
      console.log('id : ' + id);
     // console.log(snippet);
      console.log('publishedAt : ' + publishedAt);
      console.log('title : ' + title);
      console.log('description : ' + description);
    //  console.log(thumbnails);
    //  console.log(thumbnailsDefault);
      console.log('thumbnailsDefaultUrl : ' + thumbnailsDefaultUrl);
     
      const items = [{id: id, 
                      publishedAt: publishedAt,
                      title: title, 
                      description : description, 
                      thumbnailsDefaultUrl : thumbnailsDefaultUrl
                              }];
       return items;                       
       
   })})) 
  
}

  render() {
    console.log(this.state.items);
    return (
      <div>
        {/* <MostPopularList items = {this.state.items} /> */} 
        
      </div>
    );
  }
}

export default app;