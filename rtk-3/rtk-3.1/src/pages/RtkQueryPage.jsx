import { useGetCategoriesQuery } from "../redux/rtkquerySlice";
import NewCategoryForm from "./NewCategoryForm";

function RtkQueryPage() {


    const { data: categories = [], isLoading, error } = useGetCategoriesQuery();




    if (isLoading) {
        return <div>Loading categories...</div>;
    }

    if (error) {
        return <div>Error loading categories: {error}</div>;
    }


    return (
        <div>
            <div>

                <h1>Categories</h1>
                <ul>
                    {categories?.data?.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
                <NewCategoryForm />
            </div>
        </div>

    );

}

export default RtkQueryPage

