import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'

function Tour(props) {
    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.tour.map(result => {
                
                return (
                        < Row>
                            <Col key={result.id}>
                                <Card>
                                    <Card.Img variant="top" src={result.image} />
                                    <Card.Body>
                                        <Card.Title>{result.name}</Card.Title>
                                        <Card.Text>
                                            {result.info}
                                        </Card.Text>
                                        <Link to={`/city/${result.id}`}>Get Info</Link>
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                        </Row >
                )
            })}
            </div>
        </>
    )

}


export default Tour;