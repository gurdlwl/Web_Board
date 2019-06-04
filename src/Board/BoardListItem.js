import React from 'react';

const BoardListItem = (props) => {
    let {post} = props;
    let created = new Date(post.created);
    return (
        <div className='board-list-item'>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.username}</div>
            <div>
                {created.getFullYear()}/{created.getMonth() + 1}/{created.getDate()}
                &nbsp;
                {created.getHours()}:{created.getMinutes()}:{created.getSeconds()}
            </div>
        </div>
    );
};

export default BoardListItem;