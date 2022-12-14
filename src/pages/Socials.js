import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Socials = () => {
  const [error, setError] = useState (null);
  const [isLoading, setLoading] = useState (true);
  const [posts, setPosts] = useState ([]);


  const getPosts = async() => {
    try {
      let res = await axios.get('https://natnaele.sg-host.com/wp-json/wp/v2/subsidiary');
      setPosts(res.data);
      setError(null)
    }
    catch (err) {
      setError(err.message);
      setPosts(null)
    }
    finally{
      setLoading(false)
    }
  }

  

  // const deletePost = async(id) => {
  //   try {
  //    let res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${ id }`)
     
  //    setState('deleted successfully!')
  //    console.log('item has been deleted successfully')
  //   }
  //   catch (err) {
  //    console.log('something went wrong', error)
  //   }
  // }
  // const addPost = async(id) => {
  //   try {
  //    let res = await axios.post("https://jsonplaceholder.typicode.com/posts/1", {
  //     title:'hecxsgdkd',
  //     body:'item has been deleted successfullyitem has been deleted successfullyitem has been deleted successfullyitem has been deleted successfullyitem has been deleted successfully',
  //    })
     
  //    setState(res.data)
  //    console.log('item has been deleted successfully')
  //   }
  //   catch (err) {
  //    console.log('something went wrong', error)
  //   }
  // }
 

  useEffect (() => {
    getPosts();  
  }, [])
 
 return(
  <div>
    <>Subsidiaries</>
    {posts.map((post) => (
     <div>
       <ul key={post.guid.id}>
          <li>{post.title.rendered}</li>
          <li>{post.type}</li>
      </ul>
      <h2>Subsidiary {post.id}</h2>
      {post.acf.gallery}
      {/* <button onClick={() => deletePost( post.id )} >
        Button
      </button> */}
      {/* <button onClick={addPost} >
        add
      </button> */}

<ul key={post.guid.id}>
          <li>{post.acf.icon}</li>
          <li>{post.acf.excerpt}</li>
          <li>{post.acf.description}</li>
      </ul>

      
      <button >
        Update
      </button>
     </div>
    ))}
    <div>
    </div>
  </div>
 )


}


export default Socials