import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Home extends Component {
    state = {
        value: 1
    };

    render() {
        let t = this.props.stores.TimeStore;
        let p = this.props.stores.PostStore;

        return (
            <div>
                <div>{p.current_time && p.current_time}</div>
                <div>{p.ms}</div>
                <div><button onClick={p.getTime}>getTime</button></div>

                <div>{t.current_time && t.current_time.toString()}</div>
                <div>{t.ms}</div>
                <div><button onClick={t.getTime}>getTime</button></div>
            </div>
        );
    }
}

export default Home;