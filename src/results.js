import axios from 'axios'
export default axios.create({
  baseURL: 'https://innovfocus-blog-default-rtdb.firebaseio.com/'
})