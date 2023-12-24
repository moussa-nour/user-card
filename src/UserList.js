import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './userlist.css'; // Import your custom CSS file

const UserList =({ user }) => {
  return (
    <div>
       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
            <div  className='user-card'></div>
           < Card >
            <Card.Img variant="top" src="https://img.freepik.com/photos-gratuite/homme-costume-neon-est-assis-chaise-enseigne-au-neon-qui-dit-mot-dessus_188544-27011.jpg?w=1060&t=st=1703366121~exp=1703366721~hmac=50fb14028e5e02400479c304cbca4dec0f7b99cb2cbab24dc09fa1376f1a604c" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.username}
                <strong>Email:</strong> {user.email}
                <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
 
    </div>
  )
}

export default UserList
