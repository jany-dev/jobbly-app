import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Grid from '@material-ui/core/Grid';

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4 px-3">
            <Form.Row className="align-items-end px-2">
                <Col md>
                    <Form.Label> Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                </Col>
                <Col md>
                    <Form.Label> Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                </Col>
            </Form.Row>
            <Form.Row>
                <Collapsible trigger="Job Type">
                    <Grid container spacing={1} className="ml-2 pt-3" style={{ flexDirection: 'row' }}>
                        <Grid item xs={3}>
                            <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2" />
                            <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2" />
                            <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="javascript" label="Temporary" type="checkbox" className="mb-2" />

                        </Grid>
                    </Grid>
                </Collapsible>


                <Collapsible trigger="Languages">
                    <Grid item xs={3} className="ml-2 pt-3" style={{ flexDirection: 'row' }}>

                        <Form.Check onChange={onParamChange} value={params.Python} name="python" id="python" label="Python" type="checkbox" className="mb-2" />
                        <Form.Check onChange={onParamChange} value={params.Java} name="java" id="java" label="Java" type="checkbox" className="mb-2" />
                        <Form.Check onChange={onParamChange} value={params.javascript} name="javascript" id="javascript" label="Javascript" type="checkbox" className="mb-2" />
                        </Grid>
                    </Collapsible>
                    
            </Form.Row>


            <Form.Row>
                <Col md className="ml-2 pt-3" style={{ flexDirection: 'column' }}><Collapsible trigger="Languages">
                    <Form.Check onChange={onParamChange} value={params.Python} name="python" id="python" label="Python" type="checkbox" className="mb-2" />
                    <Form.Check onChange={onParamChange} value={params.Java} name="java" id="java" label="Java" type="checkbox" className="mb-2" />
                    <Form.Check onChange={onParamChange} value={params.javascript} name="javascript" id="javascript" label="Javascript" type="checkbox" className="mb-2" />
                </Collapsible>
                </Col>
            </Form.Row>

        </Form>
    )
}
