import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import PostsServices from "../services/PostsServices";

const AddPost = () => {
    const initialPostState = {
      id: null,
      title: "",
      body: "",
    };
    const [post, setPost] = useState(initialPostState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setPost({ ...post, [name]: value });
    };
  
    const savePost = () => {
      var data = {
        title: post.title,
        body: post.body
      };
  
      PostsServices.create(data)
        .then(response => {
          setPost({
            id: response.data.id,
            title: response.data.title,
            body: response.data.body,
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const newPost = () => {
      setPost(initialPostState);
      setSubmitted(false);
    };
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>Post agregado</h4>
            <Button onClick={newPost} variant="light">
              Agregar
            </Button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={post.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="description">Contenido</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={post.body}
                onChange={handleInputChange}
                name="body"
              />
            </div>
  
            <Button onClick={savePost} variant="light">
              Agregar
            </Button>
          </div>
        )}
      </div>
    );
  };
  
  export default AddPost;