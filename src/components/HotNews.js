import React, {Component} from 'react';
import './style.css';
import ListSource from './ListSource';
import ListArticle from './ListArticle';

export default class HotNews extends Component {
    constructor(props){
        super(props);
        this.countNews=5;
        this.countSources=7;
        this.apiKey = 'apiKey=02f5fb5b27fd467cb014b23a2d18c566';
        this.urlNow='https://newsapi.org/v2/top-headlines?country=us';
        //this.getContent= this.getContent.bind(this);
        this.data={};//= this.getContent('https://newsapi.org/v2/sources?'+this.apiKey);
        this.state={
            articles: [],
            sources: [],
            needButton: false
            
        }
    }

    componentDidMount(){
        this.getContent('https://newsapi.org/v2/sources?'+this.apiKey, this.viewSources.bind(this));
        this.getContent(this.urlNow+'&pageSize='+this.countNews+'&'+this.apiKey, this.viewNews.bind(this));
    }

    viewSources(data){
        this.setState({sources: data['sources']});
    }

    viewNews(data){
        if ((data.articles.length === 0)||(data.articles.length >= 40)||(data.articles.length === data.totalResults))
            this.setState({needButton: false});
        else
            this.setState({needButton: true});
        this.setState({articles: data.articles});
    }

    getContent(url, myfunc){

        let req = new Request(url); 
        fetch(req)
            .then(function(response){
                 return response.json();
            }).then(function(data){
                if (data.status === 'ok'){                   
                    myfunc(data);                    
                }
            });
            
    }

    handleSourceClick=(e)=>{
        this.countNews = 5;  
        let sourceId= e.target.getAttribute('data-id');
        this.urlNow= 'https://newsapi.org/v2/top-headlines?sources=' +sourceId;   
        this.getContent(this.urlNow+'&pageSize='+this.countNews+'&'+this.apiKey, this.viewNews.bind(this));
    }

    handleClick=()=>{
        this.countNews+=5;
        this.getContent(this.urlNow+'&pageSize='+this.countNews+'&'+this.apiKey, this.viewNews.bind(this));
    }

    handleSearchClick=(e)=>{
        this.countNews=5;
        let searchText = document.getElementById('header__searth-text');
        this.urlNow= 'https://newsapi.org/v2/everything?q='+searchText.value; 
        this.getContent(this.urlNow+'&pageSize='+this.countNews+'&'+this.apiKey, this.viewNews.bind(this));
        return false;    
    }

    handleEnterClick=(e)=>{
        if (e.keyCode ===13){
            this.handleSearchClick(e);              
        }
    }

    render(){
       let art; 
       const sources = this.state.sources.slice(0,this.countSources).map(source=>ListSource(source));
       if ((this.state.articles!==undefined)&&(this.state.articles.length>0))
       art=this.state.articles.slice(0,this.countNews).map(article=>ListArticle(article));
       const news = <div>{art}</div>;
       const button = this.state.needButton &&<ul id="btn-load-more" className="button" onClick={this.handleClick}>Load more</ul>;
       return (
            <header>        
            <h1 className = "header__title"><img src = "./picture/logo.png" className = "header__title__image" alt=''/>HotNews</h1>
            <hr color = "orange"></hr>
            <ul className = "header__list" onClick = {this.handleSourceClick}> 
                {sources}
            </ul>
            <div>           
                <input type = "text" id = "header__searth-text" onKeyUp = {this.handleEnterClick}></input>
                <input type = "button" id = "header__searth-btn" value ="Search" onClick = {this.handleSearchClick}></input>
            </div> 
            <main>
                <ul id = "news">{news}</ul>
                {button}
        
             </main>
        </header>
        );
    }
    
}