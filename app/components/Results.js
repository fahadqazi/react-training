var React = require('react');
var PropTypes = React.PropTypes

function puke(props){
    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results(props){
    return(
        <div>Results: {puke(props)}</div>
    )
}

Results.propTypes = {
    isloading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}