import React, {useState, useEffect} from 'react';
import PostsServices from "../services/PostsServices";
import Post from '../components/Post';
import UpdatePost from '../components/UpdatePost';

const PostList = (props)=>{

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const handleHideEditModal = ()=>{
        setSelectedPost(null);
        setShowEditModal(false);
    }
    
    const handleEditClick = (idPost)=>{
        setSelectedPost(idPost);
        setShowEditModal(true);
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        retrievePosts();
    }, []);

    const retrievePosts = () => {
        PostsServices.getAll()
            .then(response => {
                setPosts(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleDeleteClick = (id)=>{
    PostsServices.remove(id)
      .then(response => {
        console.log('eliminado' + response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
    
    return(
        <>
        {    
            posts.map((singlePost, id) => {
                return(
                    <Post
                    key={singlePost.id}
                    id={singlePost.id}
                    title={singlePost.title}
                    body={singlePost.body}
                    onDeleteClick={handleDeleteClick}
                    onEditClick={handleEditClick}
                    />
                )
            })
        }
        <UpdatePost
        show={showEditModal}
        handleHide={handleHideEditModal} 
        idPost={selectedPost}
        />
        </>

        
        
    );
}
export default PostList;