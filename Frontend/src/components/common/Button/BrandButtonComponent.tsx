import BrandButton from "./BrandButtonComponent.styled";

interface BrandButtonComponentProps {
  color: string | null;
  content: string;
  onClick: () => void;
  cancel: boolean;
}

function BrandButtonComponent({
  content,
  color,
  cancel,
  onClick,
}: BrandButtonComponentProps) {
  return (
    <BrandButton type="button" color={color} onClick={onClick} $cancel={cancel}>
      {content}
    </BrandButton>
  );
}

export default BrandButtonComponent;
