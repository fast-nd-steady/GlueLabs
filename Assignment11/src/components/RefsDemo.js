import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
        this.languageRef = React.createRef()
        this.checkbox = React.createRef()

        this.bike = {};
        for (let i = 0; i < 3; i++) {
            const name = "bike" + i
            this.bike[name] = React.createRef();
        }
        this.state = {
            sports: {
                tennis: false,
                swimming: false,
                basketball: false
            },
            bikename: ''
        }
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value);
        console.log(this.commentRef.current.value);
        console.log(this.languageRef.current.value);
        console.log(this.state.bikename);
    }

    radioHandler = (event) => {
        for (var i = 0; i < 3; i++) {
            let name = 'bike' + i;
            if (event.target.value != this.bike[name].current.value) {
                this.bike[name].current.checked = false;
            }
            else {
                this.state.bikename = event.target.value;
            }
        }
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
            <>
                <div>
                    <h1>RefsDemo</h1>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" ref={this.emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea name="comment" id="comment" cols="30" rows="10"
                        ref={this.commentRef}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language: </label>
                    <select name="language" id="language" ref={this.languageRef}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <br />
                <div>
                    <input type="radio" value="yamaha" name="yamaha" id="yamaha" ref={this.bike.bike0} onChange={this.radioHandler} />
                    <label htmlFor="yamaha" >yamaha</label>

                    <input type="radio" value="hero" name="hero" id="hero" ref={this.bike.bike1} onChange={this.radioHandler} />
                    <label htmlFor="hero">hero</label>

                    <input type="radio" value="honda" name="honda" id="honda" ref={this.bike.bike2} onChange={this.radioHandler} />
                    <label htmlFor="honda">honda</label>
                </div>
                <br />
                <div>
                    <input type="checkbox" name="tennis" ref={this.checkbox} onChange={this.checkboxHandler} />tennis
                    <input type="checkbox" name="swimming" ref={this.checkbox} onChange={this.checkboxHandler} /> swimming
                    <input type="checkbox" name="basketball" ref={this.checkbox} onChange={this.checkboxHandler} /> basketball
                    <div>
                        {Object.keys(this.state.sports).filter((x) => this.state.sports[x])}
                    </div>

                </div>
                <button onClick={this.clickHandler}>Submit</button>
            </>
        )
    }
}

export default RefsDemo