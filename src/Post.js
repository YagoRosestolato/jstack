import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
  return (
    <>
    <article>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
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
    subtitle: PropTypes.shape().isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}