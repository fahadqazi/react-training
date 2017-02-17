// var React = require('react');
// var ConfirmBattle = require('../components/ConfirmBattle');

// var ConfirmBattleContainer = React.createClass({
//     contextTypes: {
//         router: React.PropTypes.object.isRequired
//     },
//     getInitialState: function(){
//         return{
//             isLoading: true,
//             playersInfo: []
//         }
//     },
//     componentDidMount: function(){
//         var query = this.props.location.query;
//         // console.log(query);
//     },
//     render: function(){
//         return(
//             <ConfirmBattle 
//                 isLoading={this.state.isLoading}
//                 playersInfo={this.state.playersInfo}
//             />
//         );
//     }
// });

// module.exports = ConfirmBattleContainer;

var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    // Fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function(players){
            console.log("players: ", players)
        })
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;