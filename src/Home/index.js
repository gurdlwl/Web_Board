import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Board from '../Board';
import './index.scss'

@inject('stores')
@observer
class Home extends Component {

    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}

export default Home;