import styled from "@emotion/styled";
import { Button, Tooltip } from "antd";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 80%;
  padding: 50px 80px;
  margin-top: 64px;
  margin-bottom: 100px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 30px; */
  /* border: 1px solid black; */
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;
export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const AvatorImage = styled(Image)`
  top: 4px;
  position: relative;
`;
export const InfoText = styled.div`
  margin: 0px 10px;
`;
export const SubInfo = styled.div``;

export const Writer = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 800;
`;
export const CreateAt = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #828282;
  font-weight: 400;
`;
export const Body = styled.div`
  height: 80%;
  padding: 10px;
  position: relative;
`;

export const AddressTooltip = styled(Tooltip)`
  color: white;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  margin-left: 7px;
  /* background-color: var(--Black, #000);
  opacity: 0.6; */
`;
export const BoardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const ContnetImage = styled(Image)`
  width: 100%;
  height: 100%;
  /* position: relative; */
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoardContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  min-height: 200px;
  width: 100%;
  padding: 10px;
  margin-bottom: 60px;
  box-sizing: border-box;
  word-wrap: break-word;
`;
export const BoardVideo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonWarpper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MenuButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: white;
  border: 1px solid #bdbdbd;
  margin: 10px;

  background-color: #bdbdbd;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffd600;
  }
`;

export const LikeButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;
export const LikeButton = styled(Button)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-color: white;
`;
