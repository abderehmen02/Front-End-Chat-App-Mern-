import  React , {useState} from 'react';
import { Checkbox , ListItemText, OutlinedInput , Dialog, Select ,FormControl , MenuItem,  InputLabel } from '@material-ui/core';
// import { CommentIcon ,  IconButton , Checkbox , ListItemText , ListItemIcon, ListItemButton ,List , ListItem }from '@material-ui/core';

import internal from 'stream';
const InterestsComponent = ({props})=>{





  // the
    const {Interests , setInterests  } = props
    const [IsOpenInterests , setIsOpenInterests ] = useState(false)


// functions 
 const InterestsList = () =>{
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
"movies" , 
"foood" ,
"nature" ,
"sport" ,
"swiming" ,
"football" ,
"animals" ,
"technology" , 
"traveling" ,
"ememies" ,
"science" , 
];


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInterests(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
         
          multiple
          value={Interests}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={Interests.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  );
}


return <div>
  interests :   <button className='interestsBtn' onClick={()=>{setIsOpenInterests(true)}} >      <InterestsList style={{color: "white"}} /> </button>
</div>
}
export default InterestsComponent