import Card from 'react-bootstrap/Card';

function Cards({title, image}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body className="d-flex align-items-center">
                {image && (
                    <img 
                        src={image} 
                        alt="Card" 
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '10px'
                        }} 
                    />
                )}
                <Card.Title className="mb-0">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Cards;
