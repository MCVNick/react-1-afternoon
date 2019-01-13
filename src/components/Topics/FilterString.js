import React, {Component} from 'react'

class FilterString extends Component{
    constructor() {
        super()

        this.state = {
            unFilteredArray: ["Adam","Bob","Caith","Don","Ella","Frank",'George','Hazle','Isaac','Jill'],
            userInput: '',
            filteredArray: []
        }
    }

    handleOnChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleOnClick() {
        let newArr = this.state.unFilteredArray.filter((element) => {
            return element.includes(this.state.userInput)
        })

        this.setState({
            filteredArray: newArr
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
                    Filter String
                </h4>

                <span className='puzzleText'>
                    Names: {JSON.stringify(this.state.unFilteredArray)}
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

                <span className='resultsBox filterStringRB'>
                    Filtered Names: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterString