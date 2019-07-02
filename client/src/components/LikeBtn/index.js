import { Button } from 'semantic-ui-react'
import React from 'react';

function LikeBtn(props) {

    function clickHandler  () {
        let id = this.data("id");
        console.log("TCL: clickHandler -> id", id);
    }

    return (
        <Button data-id={props.id} onClick={clickHandler} tabIndex="0" icon="like" />
    )
}

export default LikeBtn;