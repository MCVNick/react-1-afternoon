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
        let {userInput} = this.state

        let newArr = userInput.split(',')
        let newEvens = []
        let newOdds = []

        newArr.forEach((element, index, array) => {
            if(element % 2 === 0){
                newEvens.push(element)
                this.setState({
                    evenArray: newEvens,
                    oddArray: newOdds
                })
            }
            else {
                newOdds.push(element)
                this.setState({
                    oddArray: newOdds,
                    evenArray: newEvens
                })
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