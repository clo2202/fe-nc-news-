import Vote from "./Vote";
import "../styles/Comments.css";
import React, { Component } from "react";

class CommentList extends Component {
  render() {
    const { comments, removeComment } = this.props;
    return (
      <div className="comment-section">
        <h4><span role="img" aria-label="comment">&#128172;</span> {comments.length} Comments</h4>
        <ul className="comments-list">
          {comments.map(comment => (
            <li className="comment" key={comment.comment_id}>
              <Vote
                votes={comment.votes}
                id={comment.comment_id}
                section="comments"
              />
              <div className='comment-body'>
                <p className='comment-text'><b>{comment.author}</b><br/>{comment.body}</p>
                {comment.author === "jessjelly" && (
                  <button className='remove' onClick={() => removeComment(comment.comment_id)}>X</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
