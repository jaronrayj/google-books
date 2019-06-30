import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

const StandardForm = props => (
    <Container>
        <Form>
            <Form.Field>
                <h2>{props.search}</h2>
                <input placeholder={props.placeholder} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
)

export default StandardForm