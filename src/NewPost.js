import { useContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { format } from 'date-fns';
import api from './api/posts.js';
import DataContext from './context/DataContext.js';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  return(
    <main className="NewPost">
      <h2>
        New Post
      </h2>
      <form className="newPostForm" 
        onSubmit={handleSubmit}
      >
        <label htmlFor="postTitle">Title:</label>
        <input 
          id="postTtile" type="text" 
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea 
          id="postTtile"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">
          Submit
        </button>
      </form>

    </main>
  )
}

export default NewPost 