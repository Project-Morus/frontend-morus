import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "../../__tests__/components/Table/mockData";
import Table from "../../components/Table";

const LandingPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#E6EEF6' }}>
      <h1>Landing Page</h1>


      <div style={{ height: '100vh', background: '#E6EEF6', padding: '1rem' }}>
        <Table headerCells={HEADER_TABLE_CELLS} rowCells={ROW_NAME_CELLS} emptyMessage='A tabela está vazia no momento. Espere o síndico adicionar novas informações!' />
      </div>
    </div>
  );
}

export default LandingPage;