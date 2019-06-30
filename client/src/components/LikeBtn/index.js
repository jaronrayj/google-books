import { Button } from 'semantic-ui-react'
import React from 'react';

function LikeBtn(props) {

    function clickHandler  () {
        let id = this.data("id");
    }

    return (
        <Button data-id={props.id} onClick={clickHandler} icon="like" />
    )
}

export default LikeBtn;