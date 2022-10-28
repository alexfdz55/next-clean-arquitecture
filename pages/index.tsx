import { Button, Container } from '@mui/material'
import Head from 'next/head'
import { AxiosHttpClient } from '../src/protocols/http/axios-http-client';
import { User } from '../src/domain/models/user_model';
import UserUseCases from '../src/domain/usecases/user_usecases';
import { useEffect, useState } from 'react';
import { UserCard } from '../src/components/UserCard';
import { UnexpectedError } from '../src/domain/errors/unexpected-error';
import { UserRepository } from '../src/data/repositories/user_repository';
import { ApiResponse, useFetch, useFetch2 } from '../src/hooks/useFetch';


// type ResponseError = UnexpectedError | null;

export default function Home() {

  // const axiosHttpClient = new AxiosHttpClient();

  // const axiosRequest = axiosHttpClient.request({
  //   url: 'https://jsonplaceholder.typicode.com/users',
  //   method: 'get',
  // });


  // const axiosRequest = axios.get('https://jsonplaceholder.typicode.com/users');

  // const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  // const [users, setUsers] = useState([]);


  // console.log('data index: ' + data);



  //////////////////////////////////////////////////////////////////

  // const request: TApiResponse = useFetch(axiosRequest);

  // const fetchData = async () => {
  //   console.log('click');
  //   request.getAPIData();
  // }

  //   const userRepository = new UserRepository();

  // const fetchData = async ()=>{
  //  const users: User[] =  await userRepository.getAll();
  //  console.log(users);
  // }


  ///////////////////////////////////////////////////////////////
  //   const [data, setData] = useState<any>();
  //   const [loading, setLoading] = useState<boolean>(false);

  //   const [error, setError] = useState<Error>();


  //   const userUseCases = new UserUseCases();

  //   // const userRepository = new UserRepository();

  //   const fetchData = async () => {
  //     setLoading(true);
  //     setData(null);
  //     try {
  //       const users: User[] = await userUseCases.getAllUsers();
  //       setData(users);
  //     } catch (error: any) {
  //       console.log(error);
  //       setError(error);
  //     }

  //     // const user: User = await userUseCases.getOneUser(1);

  //     setLoading(false);
  //     //  console.log(user);
  //   }

  //   useEffect(() => {
  //     fetchData();
  // }, []);

  const userUseCases = new UserUseCases();

  // const {data, error, loading, getAPIData}: ApiResponse = useFetch(userUseCases.getAllUsers(), true);


  const { data, error, loading, getAPIData }: ApiResponse = useFetch2(()=>userUseCases.getAllUsers());

  // const {data, error, loading, getAPIData}: ApiResponse = useFetch2(userUseCases.getAllUsers());


  // console.log('error: ' + error);

  const fetchData = async () => {
    await getAPIData();
  }



  return (
    <div >
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main >

        <Container>
          <Button
            variant='contained'
            onClick={fetchData}
          >
            Get users
          </Button>

          {loading && <div> Cargando...</div>}
          {error && error.name === 'UnexpectedError' ? <div>Ha ocurrido un error</div> : ''}
          {/* {!loading && <h2>{'Status code: ' + status.toString()}</h2>} */}

          {data && <div>
            {data.map((user: User) => <UserCard key={user.id} user={user} />)}
          </div>
          }
        </Container>

      </main>
    </div>
  )
}