import { Images } from "asset/img";
import Icon from "components/Icon";
import styled from "styled-components";
import { Space, Layout } from 'antd';
const { Header } = Layout;
const ContainerHeader = styled.div`
  background: linear-gradient(186.77deg, #00589b -2.75%, #174579 99.27%);
  height: 100%;
  display: flex;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height:40px;
  margin-left: 32px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right:12px;
`;
const Line = styled.div`
  border-right: 1px solid white;
  height: 28px;
`;
const NameUser = styled.p`
  color: white;
  font-size: 14px;
  line-height: 20px;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;
const TextName = styled.p`
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TextRole = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;


interface HeaderProps {
  toggleCollapsed?: () => void
}

const HeaderContent = (props:HeaderProps): JSX.Element => {
  const {toggleCollapsed} = props
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <ContainerHeader>
        <HeaderLeft>
          <Space>
            <Logo src={Images.Logo} alt="logo" />
            <Icon src={Images.IconBurger} size='medium' alt='icon burger' onClick={toggleCollapsed} />
          </Space>
        </HeaderLeft>
        <HeaderRight>
          <Space>
            <Icon src={Images.App} alt="icon app" size="medium" />
            <Icon src={Images.Bell} alt="icon bell" size="medium" />
            <Icon src={Images.Flag} alt="icon flag" size="medium" />
          <Line />
          <NameUser>Nguyen Minh Phuoc</NameUser>
          <Line />
          <TextName>
            Lê Tú Quyên
            <TextRole>Admin</TextRole>
          </TextName>
          <Avatar src={Images.Avatar} alt="avatar" />
          </Space>
        </HeaderRight>
      </ContainerHeader>
    </Header>
  );
};

export default HeaderContent;
