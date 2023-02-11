
import Table from "./Table";

function SortableTable(props) {

    const {config} = props;
    const  updatedConfig = config.map((item) => {
        if (item.sortable) {
            return {
                ...item,
                header: () => {
                    return (
                        <th onClick={() => {
                            props.onSort(item.sortField);
                        }}>
                            {item.label}
                        </th>
                    );
                }
            }
        }
        return item;
    });


    return (
        <Table {...props} config={updatedConfig}></Table>
    );
}

export default SortableTable;