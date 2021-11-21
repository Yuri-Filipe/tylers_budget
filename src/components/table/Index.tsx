import * as React from "react";
import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

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
        <DataTable.Cell numeric>159</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row
        style={{
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        <DataTable.Cell>Priority queue</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 1"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default MyComponent;
