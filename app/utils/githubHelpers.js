var axios = require('axios');

// var id = "";
// var sec = "";
// var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
    return axios.get('http://api.github.com/users/' + username)
}

var helpers = {
    getPlayersInfo: function(players){
        return axios.all(players.map(function(username){
            return getUserInfo(username)
        })).then(function(info){
            // console.log(info);
            return info.map(function(user){
                return user.data
            })
        }).catch(function(err){
            console.warm("Error is getPlayersInfo", err)
        })
        
    }
};

module.exports = helpers;

