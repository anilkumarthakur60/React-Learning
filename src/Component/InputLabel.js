import classNames from "classnames";
function InputLabel({value, children,className}) {


    const  finalClassName = classNames('block font-medium text-sm text-gray-700 dark:text-gray-300',className)
    const values = () => {
        if (value) {
            return (
                <span>{value}</span>
            )
        } else {
            return (
                <span>{children}</span>
            )
        }
    }

    return (

        <label className={finalClassName}>
            {children}
            {values}
        </label>
    )
}

export default InputLabel