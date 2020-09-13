import React from 'react';
import { Form, Col, Badge, Collapse } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Grid from '@material-ui/core/Grid';

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4 px-3 px-md-5 text-center">
            <Form.Row className="align-items-end px-2">
                <Col md>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" placeholder="What are you looking for?" id="description" className="ml-5 pl-3 py-3 pl-md-3 pl-lg-4 bg-white shadow s" /><i class="fas fa-search"></i>
                </Col>
            </Form.Row>

            <Collapsible trigger="Refine Results" className="text-center" id="refine-results">

                <Form.Row >
                    <Col md className="text-center">
                        <Form.Label className="pt-4"> Location</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" id="location" classNameclassName="justify-content-center"/>
                    </Col>
                </Form.Row>
                <Form.Row className="d-flex justify-content-center">
                    <Col>
                        <Form.Label className="pt-4"> Job Type</Form.Label>
                        <Grid container spacing={1} className=" justify-content-center" style={{ flexDirection: 'row' }}>
                            <Grid item md={4}>
                                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="temporary" label="Temporary" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.permanent} name="permanent" id="permanent" label="Permanent" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.contract} name="contract" id="contract" label="Contract" type="checkbox" className="mb-2 text-muted" />
                            </Grid>
                        </Grid>
                    </Col>

                    <Col>
                        <Form.Label className="pt-4"> Languages</Form.Label>
                        <Grid container spacing={1} className="justify-content-center" style={{ flexDirection: 'row' }}>
                            <Grid item md={4}>
                                <Form.Check onChange={onParamChange} value={params.javascript} name="javascript" id="javascript" label="Javascript" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.python} name="python" id="python" label="Python" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.php} name="php" id="php" label="PHP" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.c++} name="c++" id="c++" label="C++" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.sql} name="sql" id="sql" label="SQL" type="checkbox" className="mb-2 text-muted" />
                            </Grid>
                        </Grid>
                    </Col>

                    <Col>
                        <Form.Label className="pt-4">Salary Range</Form.Label>
                        <Grid container spacing={1}className=" justify-content-center" style={{ flexDirection: 'row' }}>
                            <Grid item md={4}>
                                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Full-Time" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.javascript} name="part_time" id="part-time" label="Part-Time" type="checkbox" className="mb-2 text-muted" />
                                <Form.Check onChange={onParamChange} value={params.temporary} name="temporary" id="javascript" label="Temporary" type="checkbox" className="mb-2 text-muted" />

                            </Grid>
                        </Grid>
                    </Col>



                </Form.Row>




            </Collapsible>



        </Form>
    )
}
