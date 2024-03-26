import BrandButton from "./BrandButtonComponent.styled";

interface BrandButtonComponentProps {
  color: string | null;
  content: string;
}

function BrandButtonComponent({ content, color }: BrandButtonComponentProps) {
  return (
    <BrandButton type="button" color={color}>
      {content}
    </BrandButton>
  );
}

export default BrandButtonComponent;
