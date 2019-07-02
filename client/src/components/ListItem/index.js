import React from "react";
import { List } from 'semantic-ui-react';
import "./style.css";

export function ListItem({ children }) {
    return (
        <List.Item>
            {children}
        </List.Item>
    );
}

export default ListItem;