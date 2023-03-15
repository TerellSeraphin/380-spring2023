import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Bio = () => {
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant = "top" src = "https://avatars.githubusercontent.com/u/127901184?v=4" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          I love coding
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Bio;