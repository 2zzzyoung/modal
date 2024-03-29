/* eslint-disable */

import styled from "styled-components";

const FacebookButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
`;

const FacebookShareButton = () => {
  const realUrl = "배포된 url";
  const resultUrl = window.location.href;

  const shareFacebook = () => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=공유할 URL");
  };

  return (
    <>
      <FacebookButton
        onClick={() => {
          shareFacebook();
        }}
      >
        <img src="./images/facebook.png" alt="페이스북 아이콘" width="42" />
        페이스북
      </FacebookButton>
    </>
  );
};

export default FacebookShareButton;
