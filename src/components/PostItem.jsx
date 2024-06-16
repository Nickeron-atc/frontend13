import React from "react";

const PostItem = (props) => {
    console.log(props)

    return (
      <div className="post">
        <div className="post__content">

          <strong className="post__title">{props.post.id}.{props.post.title}</strong>
          <div>
              {props.post.body}
          </div>

        </div>
        <div className="post__btns">

        </div>
      </div>
    )
}

export default PostItem;