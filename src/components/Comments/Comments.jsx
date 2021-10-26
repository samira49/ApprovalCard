import ApprovalCard from "../ApprovalCard/ApprovalCard";
import CommentDetail from "../CommentDetail/CommentDetail";

const Comments = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><CommentDetail author="Hamed" time="Today at 14:40AM" content="test Content" /></ApprovalCard>
            <ApprovalCard><CommentDetail author="Hamid" time="Today at 5:10PM" content="test Content" /></ApprovalCard>
            <ApprovalCard><CommentDetail author="sharyar" time="Today at 7:00AM" content="test Content" /></ApprovalCard>
            <ApprovalCard><CommentDetail author="samira" time="Today at 2:45PM" content="test Content" /></ApprovalCard>
        </div>
    )
}
export default Comments;