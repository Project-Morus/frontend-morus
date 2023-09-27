import { useTheme } from "styled-components";
import { Icon } from "../../../components";


const Icons = () => {
  const theme = useTheme()
  return (
    <div style={{ display: "flex", gap: theme.spacing[4] }}>
      <Icon name="ph-receipt" color={theme.colors.green[500]} size="20" onClick={() => console.log('confirm archive')} />
      <Icon name="ph-receipt-x" color={theme.colors.red[500]} size="20" onClick={() => console.log('delete archive')} />
    </div>
  );
};

export default Icons