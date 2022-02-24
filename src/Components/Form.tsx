import React, { useState } from 'react'
import "../css/Form.css"
import {IState as Props} from "../Formm";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
interface IProps{
  people: Props['people'],
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>

}
export default function Form({people, setPeople}:IProps){
  //const [people, setPeople] = useState<IProps["people"]>([{name:"Huy Huynh",age:18,bio:"developer"}]);

    const [inputData, setInputData] = useState({name:"", age:"", bio:""});

    const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
      setInputData({...inputData,[e.target.name] : e.target.value});}
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) :void => {
      e.preventDefault();
      setPeople([...people,{name: inputData.name, age: Number(inputData.age), bio: inputData.bio}])
      setInputData({name:"", age:"", bio:""});
    
    }
    return (
        <div className="form-container">
            
            <h2>Form</h2>
            <form onSubmit={onSubmit}>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="text" name="name"   id="name" label="Name" variant="outlined"  onChange={onChange} value={inputData.name}/>
      <TextField type="number" name="age"  id="age" label="Age" variant="outlined" onChange={onChange} value={inputData.age} />
      <TextField type="text" name="bio"    id="bio" label="Major" variant="outlined"  onChange={onChange} value={inputData.bio}/>
    </Box>
                {/* <input type="text" name="name" id="name" placeholder="name" onChange={onChange} value={inputData.name}/>
                <input type="number" name="age" id="age" placeholder="age" onChange={onChange}value={inputData.age}/>
                <textarea name="bio" id="bio" placeholder="Bio Description" onChange={onChange}value={inputData.bio}></textarea> */}
                <Stack spacing={2} direction="row">
                
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                <Button type="submit" variant="contained" className='a'>Submit</Button>
                {/* <Button type="submit" variant="contained">Submit</Button> */}
                </Stack>
                <br>
                </br>
                
            </form>
        </div>
    )
}

