import styled from "styled-components";

type Props = {
  src: string;
  size: "small" | "medium" | "large";
  alt: string;
  onClick?:()=>void
};

const Icon: React.FC<Props> = (props: Props): JSX.Element => {
  const { src, size, alt, onClick } = props;
  const StyleIcon = styled.img`
    ${() => {
      switch (size) {
        case "small":
          return `
            width: 22px;
          `;
        case "medium":
          return `
            width: 24px;
          `;
        case "large":
          return `
            width: 38px;
          `;
        default:
          break;
      }
    }}
  `;
  return <StyleIcon src={src} alt={alt} onClick={onClick} />;
};

export default Icon;
