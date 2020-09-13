import React, {useState} from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
    const [open,setOpen] =useState(false)

    return (
        <Card className="mb-3 hoverable mx-3 bg-white shadow m mx-md-5" id="card">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            <span className="text-muted font-weight-light d-block pb-3">{job.company}</span>{job.title}
                        </Card.Title>
                        <Card.Subtitle className="text-muted d-inline-flex mr-3">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="primary" className="mr-3">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all' }} className="my-3">
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>
                    <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
                </div>
                <Card.Text>
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} 
                    variant="btn btn-primary btn-sm"
                    >
                     {open ? 'Hide Details' : 'View Details'}
                        </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
                
            </Card.Body>
        </Card>
    )
}
