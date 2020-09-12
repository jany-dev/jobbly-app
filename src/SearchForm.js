import React from 'react';
import { Form, Col, Badge, Collapse } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Grid from '@material-ui/core/Grid';

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4 px-3 px-md-5 text-center">
            <Form.Row className="align-items-end px-2">
                <Col md>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" placeholder="What are you looking for?" id="description" className="ml-5 pl-3 py-3 bg-white shadow s" /><i class="fas fa-search"></i>
                </Col>
            </Form.Row>

            <Collapsible trigger="Refine Results" className="text-center" style={{ backgroundColor: 'red' }}>

                <Form.Row >
                    <Col md className="text-center">
                        <Form.Label className="pt-4"> Location</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" id="location"/>
                    </Col>
                </Form.Row>
                <Form.Row className=" d-inline-flex">
                    <Col md className="pr-md-5">
                        <Form.Label className="pt-4"> Job Type</Form.Label>
                        <Grid container spacing={1} className="text-center"style={{ flexDirection: 'row' }}>
                            <Grid item md={1}>
                                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="javascript" label="Temporary" type="checkbox" className="mb-2" />

                            </Grid>
                        </Grid>
                    </Col>
                    <Col md className="pr-md-5">
                        <Form.Label className="pt-4"> Languages</Form.Label>
                        <Grid container spacing={1} style={{ flexDirection: 'row' }}>
                            <Grid item md={1}>
                                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="javascript" label="Temporary" type="checkbox" className="mb-2" />

                            </Grid>
                        </Grid>
                    </Col>

                    <Col md>
                        <Form.Label className="pt-4">Salary Range</Form.Label>
                        <Grid container spacing={1} style={{ flexDirection: 'row' }}>
                            <Grid item md={1}>
                                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2" />
                                <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="javascript" label="Temporary" type="checkbox" className="mb-2" />

                            </Grid>
                        </Grid>
                    </Col>



                </Form.Row>




            </Collapsible>



        </Form>
    )
}
