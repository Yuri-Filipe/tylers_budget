import * as React from "react";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";
import { StoreType } from "../../store/ducks/types";
const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const qtd_litros   = useSelector((state: StoreType) => state.qtd_litros);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable
      style={{
        marginTop: 50,
      }}
    >
      <DataTable.Header>
        <DataTable.Title>DESCRIPTION</DataTable.Title>
        <DataTable.Title numeric>AMOUNT</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row
        style={{
          marginTop: 25,
         
        }}
      >
        <DataTable.Cell>General queue</DataTable.Cell>
        <DataTable.Cell numeric>{qtd_litros}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row
        style={{
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        <DataTable.Cell>20 liter gallons</DataTable.Cell>
        <DataTable.Cell numeric>{Number(qtd_litros / 20).toFixed(2)}</DataTable.Cell>
      </DataTable.Row>

     
    </DataTable>
  );
};

export default MyComponent;
