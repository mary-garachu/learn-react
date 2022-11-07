import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';

const About = () => {

const [ post, setPost] = ('');

useEffect (() => {
  axios.get('https://natnaele.sg-host.com/wp-json/wp/v2/subsidiary').then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });

})
  return (
    <div>
       <Layout />
       <p>{}</p>
    </div>
  )
}

export default About