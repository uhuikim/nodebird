import React from "react";
import Link from "next/link";
import PropsType from "prop-types";
// 게시글 안에서 해쉬태그 추출
// 정규표현식 regexr.com 에서 해쉬태그 정규표현식 생성
// split을 할 경우에는 정규표현식이 잘 안먹힐 수 있음 () 안에 표현식을 넣어줌

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link key={i} href={`/hashtag/${v.slice(1)}`}>
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propsType = {
  postData: PropsType.string.isRequied,
};

export default PostCardContent;
