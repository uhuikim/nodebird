import React, { useCallback, useState } from "react";
import propTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImageZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, []);

  // button이나 input이 아닌 태그에 onClick이벤트를 넣어줄 떄는 role="presentation" 을 넣어주는 것이 좋다.
  // 스크린 리더기에서 굳이 클릭할 필요가 없음을 알려주고 싶을때!

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }

  return (
    <>
      <img
        role="presentation"
        style={{ width: "50%", display: "inline-block" }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        role="presentation"
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개의 사진 더보기
      </div>
    </>
  );
};

PostImages.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};
export default PostImages;
