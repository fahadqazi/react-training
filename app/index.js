var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
    name: 'Fahad Qazi',
    username: 'fahadqazi',
    image: 'https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg'
}

var ProfilePic = React.createClass({
    render: function(){
        return (
            <img src={this.props.imageUrl} style={{height:100, width:100}} />
        );
    }
})

var Link = React.createClass({
    changeUrl: function(){
        window.location.replace(this.props.href)
    },
    render: function(){
        return(
            <span
                style={{color:'blue', cursor:'pointer'}}
                onClick={this.changeUrl}
            >
                {this.props.children}
            </span>
        );
    }
})

var ProfileLink = React.createClass({
    render: function(){
        return(
            <div className="ProfileLink">
                <Link href={'https://www.github.com/' + this.props.username}>
                {this.props.username}</Link>
            </div>
        );
    }
})

var ProfileNmae = React.createClass({
    render: function(){
        return(
            <div className="name">
                {this.props.name}
            </div>
        );
    }
})

var Avatar = React.createClass({
    render: function(){
        return(
            <div className="Avatar">
                <ProfilePic imageUrl={this.props.user.image}/>
                <ProfileNmae name={this.props.user.name}/>
                <ProfileLink username={this.props.user.username}/>
            </div>
        );
    }
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));