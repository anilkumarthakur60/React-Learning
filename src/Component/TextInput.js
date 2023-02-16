import classNames from "classnames";
import React, {useEffect, useState} from "react";

function TextInput({modelValue,value, className,type, emit, ...rest}) {


    const finalClassName = classNames("border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm", className);
    return (
            <input {...rest}
                   className={finalClassName}
                   type="text"
                   id={value}
                   name={value}
                   onChange={(e) => {
                       emit(e)
                   }
                   }

            />
    )

}

export default TextInput