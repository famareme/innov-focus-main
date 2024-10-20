import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import ProgressBar from './ProgressBar';
//import { ProgressBar } from './ProgressBar';
//import results from '../results'
//import axios from 'axios'
import { blogsRef, databaseRef} from "../firebase"

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [date, setDate] = useState(null)
  const [message, setMessage] = useState('')
  const types= ['image/jpeg', 'image/png']
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]
    // const fileRef = databaseRef.child(`blogs/${file.name}`)
    // fileRef.put(file).then(() => {
    //   console.log('upload image file', file.name)
    // })
    const item = {
      title: title,
      file: file,
      date: date,
      message: date
    }
    blogsRef.push(item)
    
    setTitle('')
    setFile(null)
    setDate(null)
    setMessage('')

  }
  return (
    <section className='container'>
     
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Titre</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="title" 
          value= { title }
          name="subject"
          onChange = { (e) => setTitle(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group controlId="file">
          <Form.Label>Image</Form.Label>
          <Form.Control 
          type="file" 
          placeholder="Image" 
          name="file"
          defaultValue= { file }
          required  
          onChange = { (e) => {
            const selected = e.target.files[0]
            const fileRef = databaseRef.child(selected.name)
            fileRef.put(selected).then(() => {
              console.log('upload image file', selected.name)
            })

            if(selected && types.includes(selected.type)) {
              setFile(selected)
              setError('')
           }   else {
            setFile(null)
            setError('Veuillez choissir une image png ou jpeg')
          }
        }
        }
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control 
          type="date" 
          placeholder="Date" 
          name="date"
          value= { date }
          required  
          onChange = { (e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Comment nous pouvons vous aidez?</Form.Label>
          <Form.Control as="textarea" 
          name="message"
          placeholder="Message"rows={3} 
          value= { message }
          onChange = { (e) => setMessage(e.target.value)}
          required
          />
        </Form.Group>
          <Button variant="primary" type="submit">Envoyer</Button>
      </Form>
      <div className="error-content">
        { error && <div className="error">{error}</div> }
        {/* { file && <div>{file.name} </div> } */}
        {/* {file && <ProgressBar file={file} setFile={setFile} /> } */}
      </div>
    </section>
   );
}
 
export default CreateBlog;