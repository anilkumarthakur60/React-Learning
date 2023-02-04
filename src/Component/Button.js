import React from "react";

function Button({
                    children,
                    variation,
                    primary,
                    secondary,
                    success,
                    danger,
                    warning,
                    outline,
                    rounded,


                }) {
    return <button>{children}</button>
}

export default Button;


Button.propTypes = {


    checkVariationValue: ({
                              variation,
                              primary,
                              secondary,
                              success,
                              danger,
                              warning,
                              outline,
                              rounded,
                          }
    ) => {

        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!danger) +
            Number(!!warning) +
            Number(!!outline) +
            Number(!!rounded);

        if (count > 1) {
            return new Error(
                `You can only have one variation of the button . You have ${count} variations.`
            );
        }

    }

}