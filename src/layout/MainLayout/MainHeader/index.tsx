import { Images } from "asset/img";
import Icon from "components/Icon";
import { Space } from 'antd';
import * as S from './MainHeader.styles';

interface HeaderProps {
  toggleSider?: () => void
}

const MainHeader = (props:HeaderProps): JSX.Element => {
  const {toggleSider} = props
  return (
      <S.ContainerHeader>
        <S.HeaderLeft>
            <S.Logo src={Images.Logo} alt="logo" />
            <Icon src={Images.IconBurger} size='medium' alt='icon burger' onClick={toggleSider} />
        </S.HeaderLeft>
        <S.HeaderRight>
          <Space>
            <Icon src={Images.App} alt="icon app" size="medium" />
            <Icon src={Images.Bell} alt="icon bell" size="medium" />
            <Icon src={Images.Flag} alt="icon flag" size="medium" />
          <S.Line />
          <S.NameUser>Nguyen Minh Phuoc</S.NameUser>
          <S.Line />
          <S.TextName>
            Lê Tú Quyên
            <S.TextRole>Admin</S.TextRole>
          </S.TextName>
          <S.Avatar src={Images.Avatar} alt="avatar" />
          </Space>
        </S.HeaderRight>
      </S.ContainerHeader>
  );
};

export default MainHeader;
