import { TextField } from "@mui/material";

const InputComponent = (props) => {
    return (
        <div>
            <TextField type={props.type} autoComplete="off" fullWidth onChange={props.onChange} id="outlined-basic" variant="outlined" />
        </div>
    )
}

export default InputComponent;