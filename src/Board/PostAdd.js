import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class PostAdd extends Component {
    state = {
        title: '',
        content: '',
        userId: 1,
        goToList: false
    };

    render() {
        if(this.state.goToList)
            return <Redirect to='/board'/>;

        return (
            <div>
                <div>
                    제목 <input value={this.state.title} onChange={this.updateTitle}/>
                </div>
                <div>
                    내용
                    <div>
                        <textarea value={this.state.content} onChange={this.updateContent}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewPost}>확인</button>
                </div>
            </div>
        );
    }

    addNewPost = async () => {
        if(await this.props.stores.PostStore.addNewPost(this.state)) {
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToList: true
            });
        }
    };

    updateTitle = event => {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    };
    updateContent = event => {
        this.setState({
            ...this.state,
            content: event.target.value
        });
    };
}

export default PostAdd;