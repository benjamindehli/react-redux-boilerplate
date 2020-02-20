// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Stylesheets
import style from 'components/routes/Commits.module.scss';

class Commits extends Component {

    render() {
        return (<div>
            <h1>Commits</h1>
        </div>)
    }
}

export default connect(null, null)(Commits);
