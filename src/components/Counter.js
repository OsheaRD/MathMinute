import React from 'react'
import {connect} from 'react-redux'

function Counter(props) {

    const handleIncrementClick = () => {
        props.onIncrement()
    }
    return (
        <div>
            <h1>{props.ctr}</h1>
            <button onClick={handleIncrementClick}>INCREMENT</button>
        </div>
    )
}
const mapStateToProps = (state) => {
return {
    ctr: state.Counter
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
