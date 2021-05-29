import { connect } from "react-redux";
import PropTypes from "prop-types";

const Post = ({ title, content, author, date, voteCount, commentCount }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
      <span>By {author}</span>
      <span>{date}</span>
      <div className="vote">
        <span>Click Me</span>
        <span>{voteCount}</span>
      </div>
      <span className="comments">{commentCount} comments</span>
    </div>
  );
};

function mapStateToProps(state) {
  const postData = state.posts.find(
    (post) => post.id === "8xf0y6ziyjabvozdd253nd"
  );
  return {
    title: postData?.title,
    content: postData?.body,
    author: postData?.author,
    date: postData?.timestamp,
    voteCount: postData?.voteScore,
    commentCount: postData?.commentCount,
  };
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number,
  voteCount: PropTypes.number,
  commentCount: PropTypes.number,
};

export default connect(mapStateToProps)(Post);
