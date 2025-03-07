import { Box, Button, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {useState } from "react";
import { fetchDesigners } from "../store/reducers/designers";
import axiosInstance from "../utils/axiosConfig";
import '../assets/css/designerLogin.css'
import useSnackbar from "../utils/swalConfig";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: "black",
    boxShadow: 24,
    p: 4,
};
const CreateUser = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        username: false
    });
    const dispatch = useDispatch();
    const { showSnackbar, SnackbarComponent } = useSnackbar();



    const submit = async (e) => {
        e.preventDefault();
        // Validate form
        if (!email || !password) {
            setErrors({
                email: !email,
                password: !password,
                username: !username
            });
            return;
        }
        const id = localStorage.getItem('id')
        try {

            setLoading(true)
            const resp = await axiosInstance.post('/auth/createDesigner', {
                email,
                password,
                username,
                adminId: id
            });
            const { success } = resp.data;
            if (!success) {
                const { error } = resp.data;
                if (error === "email") {
                    setErrors(prevState => ({ ...prevState, accFound: true }));
                }
                else if (error === 'username') {
                    setErrors(prevState => ({ ...prevState, nameFound: true }));
                }
                else if (error === 'admin') {
                    showSnackbar("error", "Admin Id Invalid");
                }
            } else {
                showSnackbar("success", "User Created!");
                resetForm();
                handleClose();
                dispatch(fetchDesigners());
            }
        } catch (error) {
            alert(error.message + id);
        }
        setLoading(false)
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setErrors({
            email: false,
            password: false,
        });
    };
    return (
        <div className="login">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create User
                </Typography>
                <form onSubmit={submit}>
                    <div className="field">
                        <label className="label">UserName:</label>
                        <br />
                        <TextField type="text" value={username} onChange={(e) => setUserName(e.target.value)} sx={{ marginLeft: '-5px' }} />
                        {errors.username ? <span className="error-message">UserName is required</span> : errors.nameFound ? <span className="error-message">Username already registered</span> : null}
                    </div>
                    <div className="field">
                        <label className="label">Email:</label>
                        <br />
                        <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginLeft: '-5px' }} />
                        {errors.email ? <span className="error-message">Email is required</span> : errors.accFound ? <span className="error-message">Email already registered.</span> : null}
                    </div>
                    <div className="field">
                        <label className="label">Password:</label>
                        <br />
                        <div className="pswd-input">
                            <TextField type="text" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginLeft: '-5px' }} />

                        </div>
                        {errors.password && <span className="error-message">Password is required</span>}
                    </div>
                    <div>
                        <hr />
                        <Button variant="contained" disabled={loading} className="submit-button" type="submit">Create</Button>
                    </div>
                </form>
                {SnackbarComponent}
            </Box>

        </div>
    )
}

export default CreateUser
