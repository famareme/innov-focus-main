import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { saveTodo } from './TodoSlice';

const Inputs = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    //console.log(`Input ${title}`)
    dispatch(saveTodo({
      item: title,
      done: false,
      id: Date.now()
     })
    )
  }
  return ( 
    <div className="container">
    <Form>
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
    <Button variant="primary" type="submit" onclick={addTodo}>Envoyer</Button>
    </Form>
    </div>
   );
}
 
export default Inputs;