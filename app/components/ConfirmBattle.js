var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./userDetails');
var UserDetailsWrapper = require('./userDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props){
  return props.isLoading === true ? <Loading speed={800} text='Waiting' /> : 
  <MainContainer>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
            <button className="btn btn-lg btn-success" type="button" onClick={props.onInitiateBattle}>
                Initiate Battle
            </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne"> 
                <button className="btn btn-lg btn-danger" type="button">
                    Reselect Player
                </button>
            </Link>
        </div>
    </div>
  </MainContainer>
} 

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,  
    onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle;