import React, { useCallback, useState } from "react";
import { Card, Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import propTypes from "prop-types";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={post?.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={[
              <Button.Group>
                {id && post?.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>,
            ]}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post?.User.nickname[0]}</Avatar>}
          title={post?.User.nickname}
          description={post?.content}
        />
      </Card>
      {commentFormOpend && <div>댓글부분</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;

PostCard.propTypes = {
  post: propTypes.shape({
    id: propTypes.number,
    User: propTypes.object,
    content: propTypes.string,
    createdAt: propTypes.object,
    Comments: propTypes.arrayOf(propTypes.object),
    Images: propTypes.arrayOf(propTypes.object),
  }).isRequired,
};
