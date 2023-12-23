import styled from "@emotion/styled";
import Image from "next/image";
import {
  IconFaceBook,
  IconInstargram,
  IconYoutube,
} from "../../../../public/assets/icon";

export default function Footer(): JSX.Element {
  return (
    <>
      <FooterBackground>
        <FooterGroup>
          <FooterTitle>Footer</FooterTitle>

          <FooterIconGroup>
            <FooterIcon src={IconFaceBook} alt="" />
            <FooterIcon src={IconInstargram} alt="" />
            <FooterIcon src={IconYoutube} alt="" />
          </FooterIconGroup>
          <Boarder />

          <FooterSubText>@2021 codecamp notice board</FooterSubText>
        </FooterGroup>
      </FooterBackground>
    </>
  );
}

const FooterBackground = styled.div`
  width: 100%;
  height: 230px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
`;

const FooterGroup = styled.div`
  width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  color: #828282;
  margin-left: 1px;
  margin-top: 30px;
`;

const FooterIconGroup = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  margin: 10px;
`;

const Boarder = styled.hr`
  position: absolute;
  bottom: 85px;
  width: 100%;
  border: 1px solid #bdbdbd;
`;

const FooterIcon = styled(Image)`
  margin-left: 3px;
  margin-right: 3px;
`;

const FooterSubText = styled.div`
  color: #828282;
  position: absolute;
  bottom: 50px;
`;
