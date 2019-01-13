import React, {Component} from 'react'

class FilterObject extends Component{
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: '',
                    address: ''
                },
                {
                    name: '',
                    address: '',
                    phone: ''
                },
                {
                    name: '',
                    address: ''
                },
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
        let {unFilteredArray, userInput, filteredArray} = this.state

        unFilteredArray.forEach((element) => {
            for(let key in element){
                if (key === userInput){
                    filteredArray.push(element)
                }
            }
        });
        
        this.setState({
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