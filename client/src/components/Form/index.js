import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const StandardForm = props => (
    <Container>
        <Form>
            <Form.Field>
                <h2>{props.search}</h2>
                <input autoFocus placeholder={props.placeholder} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
)

export default StandardForm