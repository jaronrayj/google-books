import React from "react";
import { List, Card } from 'semantic-ui-react';
import "./style.css";

export function ListItem({ children, props }) {
    return (
        <List.Item>
            <Card>
                {children}
            </Card>
        </List.Item>
    );
}

export default ListItem;