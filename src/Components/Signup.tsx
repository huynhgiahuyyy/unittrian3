
import React from 'react';
import './Signup.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useForm,SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  gender: string;
};

const Signup: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    gender: Yup.string()  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
        <h2>Hello!</h2>
          <Controller
            name="fullname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                variant="outlined"
                error={!!errors.fullname}
                helperText={errors.fullname ? errors.fullname?.message : ''}
                fullWidth
                margin="dense"
              />
              )}
          />
 
      <form onSubmit={handleSubmit(onSubmit)}>
       <Controller
            name="email"
            control={control}
            defaultValue="example@unit.com.vn"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                fullWidth
                margin="dense"
              />
              )}
          />
        <div className="form-group">
          
        </div>
        <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username ? errors.username?.message : ''}
                fullWidth
                margin="dense"
              />
              )}
          />     
        {/* <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div> */}
        <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ''}
                fullWidth
                margin="dense"
              />
              )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="ConfirmPassword"
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
                fullWidth
                margin="dense"
              />
              )}
          />
        <div className="form-group">
        
          
        </div>
        <div className="form-group">
         
          
         
        </div>
        <div>
          {/* <label>Area: &nbsp; </label>
        <select {...register("gender")}>
        <option value="sg">HCM</option>
        <option value="hn">HaNoi</option>
        <option value="other">other</option>
      </select> */} 
      <br>
      </br>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Area</InputLabel>
        <Select
          {...register("gender")}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={gender}
          label="Age"
          
        >
          <MenuItem value={"SG"}>Sài Gòn</MenuItem>
          <MenuItem value={"HN"}>Hà Nội</MenuItem>
          <MenuItem value={"Other"}>Địa phương khác</MenuItem>
        </Select>
      </FormControl>
    </Box>
           
            </div>
        <div className="form-group form-check">
        <Checkbox {...label} defaultChecked
                    
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
                    />
          
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
        
        <Stack spacing={2} direction="row">
       
      <Button variant="contained" type="submit" className="btn btn-primary" color="success">
            Đăng kí
          </Button>
          <Button
          variant="contained"
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
            
          >
            Reset
          </Button>

          </Stack>
          
        </div>
      </form>
    </div>
  );
};

export default Signup;
