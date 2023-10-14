import { useEffect, useState } from "react";
import { ITableHeaderProps } from "../../types";
import { IconsSC } from "../../parts/Icons";
import { CustomTableSC } from "./styles";
import httpClient from "../../../../services/httpClient";
import { CardInformationProps, CardInformationsProps } from "../../../Home/parts/types";

const CustomTable = () => {
  const [rows, setRows] = useState<CardInformationsProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        const response = await httpClient.get("api/ListarInformacao");

        const dataRows = response.data.data.map((info: CardInformationProps) => ({
          title: info.titulo,
          description: info.descricao,
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
    { colName: "Título" },
    { colName: "Descrição" },
    { colName: "Ações" },
  ];

  return (
    <CustomTableSC
      expanse
      expanseChildren
      headerCells={HEADER_TABLE_CELLS}
      rowCells={rows}
      emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
    />
  );
};

export default CustomTable;
