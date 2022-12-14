import Layout from "../components/Layout";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Values from "../components/Values";
import classes from '../images/classes.jpg'
import comp from '../images/comp.jpg'


// const client1 = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });
// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts/1" 
// });

const Home = () => {
  // const [post, setPost] = useState([]);
  // const [error, setError] = React.useState(null);

  // useEffect(() => {
  //   async function getPost() {
  //     const response = await client.get("/1");
  //     setPost(response.data);
  //   }
  //   getPost();
  // }, []);

  // axios.get(`${baseURL}/asdf`).then((response) => {
  //   setPost(response.data);
  // }).catch(error => {
  //   setError(error);
  // });

  // async function createPost() {
  //   const response = await client1.post({ title: "Hello Kenya!", body: "This is a new post." })
  //   setPost(response.data)
  // }
  // createPost();

  // function createPost() {
  //   axios
  //     .post(baseURL1, { title: "Hello Kenya!", body: "This is a new post." })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // function editPost() {
  //   axios.put(baseURL,{ title: "Hello World!", body: "This is an edited post." } )
  //   .then((response) =>{
  //     setPost(response.data)
  //   })
  // }

  // function deletePost() {
  //   axios.delete(baseURL)
  //   .then((response) =>{
  //     setPost(response.data)
  //   })
  // }

  // if (!post) return null;
  // if (error) return `Error: ${error.message}`;

  return (
    <div className="home">
      <Layout />
      <Values heading={'Our Values'} value={'We are a leader in East Africa, and our experience and well-established networks in the region make us the ideal partner. We follow our values of hard work, tenacity and resilience.We are a leader in East Africa, and our experience and well-established networks in the region make us the ideal partner. We follow our values of hard work, tenacity and resilience.We are a leader in East Africa, and our experience and well-established networks in the region make us the ideal partner. We follow our values of hard work, tenacity and resilience.'}/>
      <h2 className="home-text">Services Offered</h2>
      <Services image= {classes} text = 'CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit'/>
      <Services image= {comp} text = 'CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit CrossFit Black Hive, voted #1 gym in the 904 by readers of VOID Magazine, accommodates all levels of CrossFit trainee, from beginners to experienced, seasoned athletes. Along with a weekly WOD schedule, we offer one-on-one personal training, nutrition programs, and open gym hours at all of our locations in metro Jacksonville.CrossFit'/>
      <h2 className="home-text">Gallery</h2>
      <Gallery/>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Add Post</button>
      <button onClick={editPost}>Edit Post</button>
      <button onClick={deletePost}>Delete</button> */}
      {/* <p>{post.body}</p> */}
    </div>
  );
};

export default Home;
