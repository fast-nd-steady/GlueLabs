import React, { Component } from 'react'

export default class Demoform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment: '',
            language: 'Angular',
            bikes: '',
            sports: {
                tennis: false,
                swimming: false,
                basketball: false
            }
        }
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    Changelang = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    submitHandle = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    radioHandler = (e) => {
        this.setState({
            bikes: e.target.value
        })
    }

    checkboxHandler = (e) => {
        let { name, checked } = e.target;
        this.setState((e) => {
            var SelectedSport = e.sports;
            return SelectedSport[name] = checked;
        })
    }


    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <div>
                    <h1>Demoforms</h1>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea name="comment" id="comment" cols="20" rows="4" value={this.state.comment} onChange={this.commentHandler}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">language: </label>
                    <select name="language" id="language" value={this.state.language} onChange={this.Changelang}>
                        <option value="react">React</option>
                        <option value="vue">vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    <input type="radio" value="yamaha" name="yamaha" id="yamaha" checked={this.state.bikes === 'yamaha'} onChange={this.radioHandler} />
                    <label htmlFor="yamaha" >yamaha</label>

                    <input type="radio" value="hero" name="hero" id="hero" checked={this.state.bikes === 'hero'} onChange={this.radioHandler} />
                    <label htmlFor="hero">hero</label>

                    <input type="radio" value="honda" name="honda" id="honda" checked={this.state.bikes === 'honda'} onChange={this.radioHandler} />
                    <label htmlFor="honda">honda</label>

                </div>
                <br />
                <div>
                    <input type="checkbox" name="tennis" onChange={this.checkboxHandler} />tennis
                    <input type="checkbox" name="swimming" onChange={this.checkboxHandler} /> swimming
                    <input type="checkbox" name="basketball" onChange={this.checkboxHandler} /> basketball
                    <div>
                        {Object.keys(this.state.sports).filter((x) => this.state.sports[x])}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}