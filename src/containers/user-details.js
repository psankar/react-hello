import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveUserDetails extends Component {
    render() {
        if (!this.props.activeUser) {
            return (
                <div>
                    <h3>Select an user</h3>
                </div>
            );
        }
        return (
            <div>
                <h2>{this.props.activeUser.Name}</h2>
                <h3>{this.props.activeUser.Location}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps)(ActiveUserDetails);