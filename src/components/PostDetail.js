import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import PostsServices from "../services/PostsServices";

const PostDetail = (props)=>{

    const [currentPost, setCurrentPost] = useState('');

    const getPost = id => {
        PostsServices.get(id)
          .then(response => {
            setCurrentPost(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      useEffect(() => {
        getPost(props.match.params.id);
      }, [props.match.params.id]);

    return(
        <Row className="d-flex justify-content-center mb-5">
        <div>
          {currentPost &&
            <div className="edit-form">
              <h4>Post</h4>              
                <div >
                  <label htmlFor="title">Titulo</label>
                  <h3
                    id="title"
                    name="title"
                    value={currentPost.title}
                  >{currentPost.title}</h3>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Contenido</label>
                  <h5
                    id="description"
                    name="description"
                    value={currentPost.body}
                  >{currentPost.body}</h5>
                </div>
             
            </div>
          }
        </div>
        </Row>
    )
}
export default PostDetail;