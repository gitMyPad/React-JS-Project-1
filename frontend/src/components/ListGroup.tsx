import { useState } from "react";

export interface ListGroupItem {
    content: string;
    id: number;
};

interface ListGroupProps {
    items: string[];
    heading: string;
    noItemFlavorText?: string;
    onSelectItem?: (
        item: ListGroupItem,
        state: boolean
    ) => void;
}

function onDefSelectItem(item: ListGroupItem, state: boolean) {}

function ListGroup({
        items,
        heading,
        noItemFlavorText,
        onSelectItem
    }: ListGroupProps) 
{
    const selectIndexState              = useState(-1);
    const resultItems: ListGroupItem[]  = [];
    noItemFlavorText                    = (noItemFlavorText == null)?
                                          "No items found" :
                                          noItemFlavorText;
    onSelectItem                        = (onSelectItem == null)?
                                          (item: ListGroupItem) => {} :
                                          onSelectItem;

    items.forEach((item, index) => {
        resultItems.push({content: item, id: index})
    })

    const defaultListDisplay    = (resultItems: ListGroupItem[]) => {
        return (resultItems.length <= 0) && <p>{noItemFlavorText}</p>
    };

    const listGroupOnClick      = (item: ListGroupItem) => {
        return () => {
            const nextIndex = (selectIndexState[0] === item.id)?
                              -1 : item.id;
            selectIndexState[1](nextIndex);
            onSelectItem(item, (nextIndex !== -1));
        }
    }


    const getListItemClassName = (currentIndex: number, listItem: ListGroupItem) => {
        return "list-group-item" + (currentIndex === listItem.id? " active" : "");
    }

    return (
        <>
        <h1>{heading}</h1>
        { defaultListDisplay(resultItems) }
        <ul className = "list-group">
            {resultItems.map((item) => (
                <li
                    key = {item.id}
                    className = {getListItemClassName(selectIndexState[0], item)}
                    onClick = {listGroupOnClick(item)}
                >
                {item.content}
                </li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
