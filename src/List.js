/**
 * Created by User on 01.05.2017.
 */

import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['option1', 'option2', 'option3', '']
        }
    }

    handleUpdate = (e, index) => {
        const value = e.target.value;

        let newState = {
            ...this.state
        };


        if (value === "") {
            newState.items.splice(index, 1);
        }
        else {
            newState = {
                items: this.state.items.map((item, itemIndex) => {
                    if (index == itemIndex) {
                        return value;
                    }
                    return item
                })
            }
        }


        if (newState.items[newState.items.length - 1] !== "") {
            newState.items.push("");
        }

        this.setState(newState);

    }

    /*{this.state.items.map((item) => {
     return (<li><input type="text" value={item}/></li>)
     })}*/

    render() {
        return (
            <ol>
                {
                    this.state.items.map((item, index) => {
                        return (
                            <li key={index}><input type="text" value={item}
                                                   onChange={(e) => this.handleUpdate(e, index)}/></li>)
                    })
                }
            </ol>
        )
    }
}

export default List;
