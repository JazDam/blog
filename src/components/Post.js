import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Post = (props) => {

    const handleDeleteClick = ()=>{
        props.onDeleteClick(props.id);
    }
    const handleEditClick = () => {
        props.onEditClick(props.id);
    }

    return (
        <tr>
            
                <td>
            <Link to={"/posts/" + props.id} >        
                    <td>{props.title}</td>
            </Link>      
                    <td>
                        <Row >
                        <Col >
                            <Button variant="light"
                                    onClick={handleEditClick}
                            >
                                Editar</Button>
                        </Col>
                        <Col >
                            <Button variant="light"
                                    onClick={handleDeleteClick}
                            >
                                Eliminar </Button>
                        </Col>
                        </Row>
                    </td>
                </td>
            
        </tr>
    )
}
export default Post;