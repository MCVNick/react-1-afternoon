import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleOnChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleOnClick() {
        let {evenArray, oddArray, userInput} = this.state


        if(userInput % 2 === 0){
            evenArray.push(userInput)
            this.setState({
                evenArray: evenArray
            })
        }
        else {
            oddArray.push(userInput)
            this.setState({
                oddArray: oddArray
            })
        }

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
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input
                className='inputLine'
                onKeyPress={(e) => this.handleEnterKey(e)}
                onChange={(e) => this.handleOnChange(e.target.value)}
                value={this.state.userInput}
                />
                <button
                className='confirmationButton'
                onClick={() => this.handleOnClick()}
                />
                <span className='resultsBox'>Evens: {this.state.evenArray.join(', ')}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray.join(', ')}</span>
            </div>
        )
    }
}

export default EvenAndOdd