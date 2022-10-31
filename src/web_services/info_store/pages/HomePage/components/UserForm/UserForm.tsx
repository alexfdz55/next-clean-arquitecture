import { Grid, Card, Typography, CardContent, TextField, Button, CircularProgress } from '@mui/material';
import React, { useContext, useState } from 'react';
import { HomeContext } from '../../context/homeContext';
import { User } from '../../../../../../domain/models/user_model';

export interface UserFormInterface { }

const UserForm: React.FC<UserFormInterface> = () => {

    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    });

    const {
        error,
        loading,
        addUser,
        updateUser,
    } = useContext(HomeContext);

    const handleChange = (e: any) => {

        // const texts = [e.target.name];
        if (e.target.name === 'name') {
            setUser({ ...user, name: e.target.value });
        }
        else if (e.target.name === 'email') {
            setUser({ ...user, email: e.target.value });
        }

        // setUser({ ...user, [e.target.name]: e.target.value })


        // addUser(user);
        console.log([e.target.name] + ':  ' + e.target.value);

        // setTask({ ...task, [e.target.name]: e.target.value })
    }


    const handleSummit = async (e: any) => {
        e.preventDefault();
        console.log(user);
        addUser(user);
    }

    return (
        <Grid
            container
            alignItems='center'
            justifyContent='center'
            direction='column'
        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: '#1e272e',
                        padding: '1rem'
                    }}
                >
                    <Typography textAlign='center' color='white'>
                        {/* {editing? 'Update Task': 'Create Task'}  */}
                        Crear Usuario
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSummit}>
                            <TextField
                                variant='filled'
                                label='Nombre'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                // value={task.title}
                                name='name'
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            <TextField
                                variant='filled'
                                label='Email'
                                multiline
                                // rows={4}
                                sx={{
                                    display: 'block',
                                    // margin: '.5rem 0'
                                }}
                                // value={task.description}
                                name='email'
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                            {/* <LoadingButton
                                size="small"
                                color="secondary"
                                onClick={handleClick}
                                loading={loading}
                                loadingPosition="start"
                               
                                variant="contained"
                            >
                                Save
                            </LoadingButton> */}
                            
                            <Button
                            
                                variant='contained'
                                color='primary'
                                type='submit'
                            // disabled={!task.title || !task.description}
                            >
                                Crear
                                {/* {loading ? (
                                    <CircularProgress color='inherit' size={24} />
                                ) : (
                                    editing? 'Update': 'Create'
                                )} */}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};


export default UserForm;
