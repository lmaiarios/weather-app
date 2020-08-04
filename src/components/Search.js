import React from 'react';
import Card from './Card';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            persistTxt: 'São Paulo'
        }
    }

    changeTxt = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            persistTxt: this.state.text
        });
    }

    render(){
        return (
            <>
                <div className="pesquisaWrapper">
                    <form className="pesquisaForm" onSubmit={this.handleSubmit}>
                        Cidade: <input
                                    className="pesquisa"
                                    type="text"
                                    onChange={this.changeTxt}
                                    value={this.state.text}
                                    placeholder={this.state.persistTxt}
                                ></input>
                                <input className="submitBtn" type="submit" value="Ok"/>
                    </form>
                    <Card city={this.state.persistTxt} lang="pt_br"/>
                </div>
            </>
        );
    }


}

export default Search;