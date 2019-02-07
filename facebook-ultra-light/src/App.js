import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            name_img:require('./image/jeanne.jpg'),
            prenom:"Jeanne",
            nom:"D'arc",
            date_de_naissance:"10/03/1991",
            color:'#39D1B4',
            author:"Jeanne d'Arc",
            tweet_text:"J'entends des voix!",
            tweet_img:require('./image/bucher.jpg'),
            nbm:0,
            nbc:0,
            nbj:0
            }
    }
    claude(){
        this.setState({
        name_img:require('./image/claude.jpg'),
        prenom:"Claude",
        nom:"François",
        date_de_naissance:"01/02/1939",
        author:"Claude François",
        tweet_text:"Qui a éteint la lumière?",
        tweet_img:require('./image/baignoire.jpg'),
        });
    }

    jeanne(){
        this.setState({
        name_img:require('./image/jeanne.jpg'),
        prenom:"Jeanne",
        nom:"d'Arc",
        date_de_naissance:"10/03/1991",
        author:"Jeanne d'Arc",
        tweet_text:"J'entends des voix!",
        tweet_img:require('./image/bucher.jpg'),
        });
    }
    martine(){
        this.setState({
        name_img:require('./image/martine.jpg'),
        prenom:"Martine",
        nom:"Aubry",
        date_de_naissance:"08/08/1950",
        author:"Martine Aubry",
        tweet_text:"Forza PS",
        tweet_img:require('./image/ps.jpg'),
        });
    }
    changeColor(){
	    var letters = '0123456789ABCDEF';
	    var colory = '#';
	    for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
	    }
	    this.setState({color: colory});				 
    }

    count(){
        if(this.state.prenom=="Jeanne"){
            this.setState({nbj:this.state.nbj+1}); 
        }
        if(this.state.prenom=="Martine"){
            this.setState({nbm:this.state.nbm+1});
        }
        if(this.state.prenom=="Claude"){
            this.setState({nbc:this.state.nbc+1});
        }
    } 
    displayCount(){
        if(this.state.prenom=="Jeanne"){
            return this.state.nbj;
        }
        if(this.state.prenom=="Martine"){
            return this.state.nbm;
        }
        if(this.state.prenom=="Claude"){
            return this.state.nbc;
        }
    }
    
    render() {
      return (
          <div className="app">
              <nav className="menu">
                  <ul className="menu_list">
                    <button onClick={() => this.claude()}><a href="#">Claude</a></button>
                    <button onClick={() => this.martine()}><a href="#">Martine</a></button>
                    <button onClick={() => this.jeanne()}><a href="#">Jeanne</a></button>
                  </ul>
              </nav>
              <div style={{background: this.state.color}} className="main-body">
                  <div className="photo">
                        <img src={this.state.name_img} alt="photo de profil"/>
                  </div>       
  
                  <div className="info">
                  <p><span className="prenom">{this.state.prenom}</span> 
                  <span className="nom">{this.state.nom}</span><br/> <br/> <br/>
                  <span className="date">{this.state.date_de_naissance}</span></p>
 
                  <button onClick={() => this.changeColor()} className="style">
                          Change style
                  </button>
                  
                  </div> 
               </div>
               <div className="tweet-container">
                    <div className="tweet_texte">
                    <h3>{this.state.author}</h3>
                    <p>{this.state.tweet_text}</p>
                    <button onClick={() => this.count()}  className="super"> <img className="super_img" src={require('./image/pouce.jpg')}/> 
                    <span className="super_text"> C'est super</span></button>
                    <span className="nb_super">{this.displayCount()} </span>

                    </div>

                    <div className="tweet_image">
                        <img src={this.state.tweet_img} alt="image tweet"/>
                        
                    </div>
               </div>
           </div>
      );
    }
  }

  export default App;