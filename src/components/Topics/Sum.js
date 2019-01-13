import React, {Component} from 'react'

class Sum extends Component{
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }
    }

    handleOnChange(num, number) {
        if (number === 1) {
            this.setState({
                number1: num
            })
        }
        else if (number === 2) {
            this.setState({
                number2: num
            })
        }
    }

    handleOnClick() {
        let {number1, number2} = this.state

        this.setState({
            sum: +number1 + +number2
        })
    }

    handleEnterKey(key) {
        if (key.key === 'Enter') {
            this.handleOnClick()
        }
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>
                    Sum
                </h4>

                <input
                className='inputLine'
                onKeyPress={(e) => this.handleEnterKey(e)}
                onChange={(e) => this.handleOnChange(e.target.value, 1)}
                />
                
                <input
                className='inputLine'
                onKeyPress={(e) => this.handleEnterKey(e)}
                onChange={(e) => this.handleOnChange(e.target.value, 2)}
                />

                <button
                className='confirmationButton'
                onClick={() => this.handleOnClick()}
                />

                <span className='resultsBox'>
                    Sum: {JSON.stringify(this.state.sum)}
                </span>
            </div>
        )
    }
}

export default Sum