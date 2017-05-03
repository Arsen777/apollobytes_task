import React, {Component} from 'react';
import './App.css';
import List from "./List";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <h1 className="headerTitle">The title</h1>
                </header>
                <div className="content">
                    <div className="listContainer">
                        <div className="listHeader">pros</div>
                        <List/>
                    </div>
                    <div className="listContainer">
                        <div className="listHeader">cons</div>
                        <List/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
