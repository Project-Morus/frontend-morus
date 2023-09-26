import { Icon } from "../../../components";


const Icons = () => {
  return (
    <div style={{ display: "flex", gap: "0.8rem" }}>
      <Icon name="ph-file-arrow-down" size="20" onClick={() => console.log('download archive')} />
      <Icon name="ph-pencil-simple-line" size="20" onClick={() => console.log('edit archive')} />
      <Icon name="ph-trash" color="#CE323B" size="20" onClick={() => console.log('delete archive')} />
    </div>
  );
};

export default Icons