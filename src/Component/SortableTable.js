
import Table from "./Table";

function SortableTable(props) {

    const {config} = props;
    const  updatedConfig = config.map((item) => {
        if (item.sortValue) {
            return {
                ...item,
                header: () => {
                    return (
                        <th onClick={() => {
                            handleClick(item.label);
                        }}>
                            {item.label}
                        </th>
                    );
                }
            }
        }
        return item;
    });

    const handleClick = (name) => {
        console.log(name);
    }


    return (
        <Table {...props} config={updatedConfig}></Table>
    );
}

export default SortableTable;