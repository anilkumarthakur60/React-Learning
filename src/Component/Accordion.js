import React, {useState} from "react";

function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(0);
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <div>
                <div key={item.title}>
                    <div className="title active">
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    {isExpanded ?

                        <div className="content active">
                            <p>{item.content}</p>
                        </div>
                        : null}
                </div>
                <hr style={{border: "1px solid red"}}/>
            </div>

        );
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;