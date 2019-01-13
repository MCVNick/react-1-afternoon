import React, {Component} from 'react'

class FilterObject extends Component{
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
                { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
                { "name": "Carly Armstrong", "title": "CEO" }
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    handleOnChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleOnClick() {
        let {unFilteredArray, userInput} = this.state

        let newArray = unFilteredArray.filter((element) => {
            let newNum

            for(let key in element){
                if (key === userInput){
                    newNum = element
                }
            }

            return newNum
        })

        this.setState({
            filteredArray: newArray,
             userInput: ''
        })
    }

    handleEnterKey(key){
        if(key.key === 'Enter'){
            this.handleOnClick()
        }
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>
                    Filter Object
                </h4>

                <span className='puzzleText'>
                    Original: {JSON.stringify(this.state.unFilteredArray)}
                </span>

                <input
                className='inputLine'
                onChange={(e) => this.handleOnChange(e.target.value)}
                onKeyPress={(e) => this.handleEnterKey(e)}
                />

                <button 
                className='confirmationButton'
                onClick={() => this.handleOnClick()}
                />

                <span className='resultsBox filterObjectRB'>
                    Filtered: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterObject