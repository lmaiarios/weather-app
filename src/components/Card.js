import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.api_key = '5d0b33a3adaa365fb1561a27d2baade8';

        this.state = {
            city: props.city,
            temp: undefined,
            temp_min: undefined,
            temp_max: undefined,
            description: undefined,
            icon_id: undefined
        }
    }

    fetchWeatherData = ()=>{
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&lang=${this.props.lang}&units=metric&appid=${this.api_key}`
        )
        .then(res => res.json())
        .then(
            data => {
                this.setState({
                    city: this.props.city,
                    temp: data.main.temp,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    description: data.weather[0].description,
                    icon_id: data.weather[0].icon
                });
            }
        )
    }

    componentDidMount(){
        this.fetchWeatherData();
    }

    componentDidUpdate(){
        if(this.props.city !== this.state.city){
            this.fetchWeatherData()
        }
    }
    
    render(){
        const renderCard = () => {
            return (
                <>
                    <div className="cardWrapper">
                        <div className="col1">
                            <img src={"http://openweathermap.org/img/wn/"+this.state.icon_id+"@2x.png"} alt="Ícone"></img>
                            <span className="city">{this.props.city}</span>
                        </div>
                        
                        <div className="col2">
                            <span>T: {this.state.temp} &deg;C</span>
                            <span>Mín: {this.state.temp_min} &deg;C</span>
                            <span>Max: {this.state.temp_max} &deg;C</span>
                            <span className="card-description">Descrição: {this.state.description}</span>
                        </div>
                    </div>
                </>
            );
        }
        
        const renderLoading = () => {
            return (
                <>
                    <img className="loading" src="loading.gif" alt="Carregando..."></img>
                </>
            )
        }

        return this.state.icon_id ? renderCard() : renderLoading();
    }
}

export default Card;