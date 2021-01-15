import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostsServices from "../services/PostsServices";

const UpdatePost = (props)=>{

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const handlePostTitletChange = (event) => {
        setPostTitle(event.target.value);
    }
    const handlePostBodytChange = (event) => {
        setPostBody(event.target.value);
    } 
    useEffect(
        ()=>{
        if(props.idPost){
          PostsServices.get(props.idPost)
          .then(response => {
            setPostTitle(response.data.title);
            setPostBody(response.data.body);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
           
        }
    },[props.idPost])
    const handleSave = ()=>{
        const formData = new FormData();
        formData.append('postTitle', postTitle);
        formData.append('postBody', postBody);     
        PostsServices.update(props.idPost, formData)
        .then(response => {
          setPostTitle(response.data);
          setPostBody(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        props.handleHide();
    }
    
    return(
        <Modal show={props.show} onHide={props.handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text"
                                value={postTitle}
                                onChange={handlePostTitletChange}
                                 />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contenido</Form.Label>
                            <Form.Control type="text"
                                value={postBody}
                                onChange={handlePostBodytChange}                              
                            />
                        </Form.Group>
                    </Form>  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light">
                        Cancelar
                </Button>
                    <Button variant="light"
                            onClick={handleSave}>
                        Guardar
                </Button>
                </Modal.Footer>
        </Modal>            

    )
} 
export default UpdatePost;