import React from 'react'
import '../components/TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItems = ({name, id, done}) => {
    
    const dispatch = useDispatch()

    const handleCheck =()=>{

        dispatch(setCheck(id))
    }
  return (
    <div className='todoitem'>
        <Checkbox
            checked={done}
            color="primary"
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <p className={done && 'todoitem--done'}>{name}</p>

    </div>
  )
}

export default TodoItems