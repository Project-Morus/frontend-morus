import { useEffect, useState } from "react";
import { CashBookProps, ITableHeaderProps } from "../../types";
import { IconsSC } from "../../Icons";
import { CustomTableSC } from "./styles";
import { httpClient } from "../../../../services/httpClient";

const CustomTable = () => {
  const [rows, setRows] = useState<CashBookProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        const response = await httpClient.get("api/ListarLivroCaixa");

        const dataRows = response.data.data.map((info: CashBookProps) => ({
          tower: info.torre,
          description: info.descricaoTransacao,
          value: info.valorTransacao,
          trasactionDate: info.descricaoTransacao,
          category: info.categoria,
          actions: <IconsSC data={info} />,
        }));

        setRows(dataRows);
      } catch (error) {
        console.log("entrou no catch");
        console.error("Erro ao buscar dados da API:", error);
      }
    }
    fetchData();
  }, []);

  const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
    { colName: "Torre" },
    { colName: "Descrição" },
    { colName: "Valor" },
    { colName: "Data" },
    { colName: "Categoria" },
    { colName: "Ações" },
  ];

  return (
    <CustomTableSC
      headerCells={HEADER_TABLE_CELLS}
      rowCells={rows}
      emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
    />
  );
};

export default CustomTable;
