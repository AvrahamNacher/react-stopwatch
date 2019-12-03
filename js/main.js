"use strict";


class StopWatch extends React.Component {
    timer = null;
    state = {
        time: this.props.time,
        running: this.props.running,
        btnTxt: "Start Timer"
    }

    resetTimer = () => {
        clearInterval(this.timer);
        this.setState( ({time: this.props.time, running: false, btnTxt: "Restart Timer"}))
    }

    startTimer = () => {
        this.setState( ({running: true, btnTxt: "Stop Timer"}));
        this.timer = setInterval( () => {
            this.setState( ({time}) => ({time: time - 1}) );
            
            if (this.state.time == -1) {
                this.resetTimer();
            } 
        },1000)
    }

    timerClicked = () => {
        if (!this.state.running) {
            this.startTimer();          
        } else {
            this.resetTimer();
        }

    }

    render() {
        return  (
            <div className="container">
                <h1 className="title">{this.state.time}s remaining</h1>
                <button onClick={this.timerClicked}>{this.state.btnTxt}</button>
            </div>

        )
    }
}


class App extends React.Component {
    render() {
        return <div>
            {/* <StopWatch time={5} running={false}/> */}
            <StopWatch time={prompt("Enter a starting time")} running={false}/>
        </div>
    }
}

  ReactDOM.render(<App />, document.getElementById("root"));