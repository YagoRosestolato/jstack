import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post(props){
  return (
    <>
    <article>
      <PostHeader 
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
       <br />
      <small>{props.post.subtitle}</small>
      <br />
      likes: {props.likes/2}
    </article>
    <br />
    </>
  )
}

Post.propTypes = {

  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}