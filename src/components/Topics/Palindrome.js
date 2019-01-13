import React, {Component} from 'react'

class Palindrome extends Component{
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: false
        }
    }

    handleOnChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleOnClick() {
        let forward = this.state.userInput.split('')
        let backward = []
        
        for(let i = forward.length - 1; i >= 0; i--) {
            backward.push(forward[i])
        }

        this.setState({
            palindrome: forward.join('') === backward.join('')
        })
    }

    handleEnterKey(key) {
        if (key.key === 'Enter') {
            this.handleOnClick()
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>
                    Palindrome
                </h4>

                <input
                className='inputLine'
                onChange={(e) => this.handleOnChange(e.target.value)}
                onKeyPress={(e) => this.handleEnterKey(e)}
                />

                <button
                className='confirmationButton'
                onClick={() => this.handleOnClick()}
                />

                <span className='resultsBox'>
                    Palindrome: {JSON.stringify(this.state.palindrome)}
                </span>
            </div>
        )
    }
}

export default Palindrome