import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const StandardForm = props => (
    <Container>
        <Form>
            <Form.Field>
                <h2>{props.search}</h2>
                <input onChange={props.inputChange} name={props.name} autoFocus placeholder={props.placeholder} />
            </Form.Field>
            <Button onClick={props.clickHandle} type='submit'>Submit</Button>
        </Form>
    </Container>
)

export default StandardForm