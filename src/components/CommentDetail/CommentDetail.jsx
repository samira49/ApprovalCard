import faker from 'faker';
const CommentDetail = ({author,time,content}) => {
   return(
    <div className="comment">
    <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
    </a>
    <div className="content">
        <a href="/" className="author">
            {author}
        </a>
        <div className="metadata">
            <span className="date">{time}</span>
        </div>
        <div className="text">{content}</div>
    </div>
</div>
   )
}
export default CommentDetail;