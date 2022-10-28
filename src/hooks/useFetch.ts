import { useEffect, useState } from "react"
import { User } from "../domain/models/user_model";
import UserUseCases from "../domain/usecases/user_usecases";
// import { HttpResponse } from "../protocols/http/http_utilities"


export type ApiResponse = {
    // status: Number;
    //   statusText: String;
    data: [] | null;
    error: Error | null;
    loading: Boolean;
    getAPIData: () => Promise<void>;
};


// export type Request<T = any> = {
//     request: T
//   }

export const useFetch = (request: Promise<any>, executeAtInit: boolean = false): ApiResponse => {
    // const [status, setStatus] = useState<Number>(0);
    //   const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        console.log('Lanzando peticion');
        setLoading(true);
        setData(null);
        try {
            // await new Promise(r => setTimeout(r, 10000));
            const apiResponse = await request;
            //   const json = await apiResponse.body.json();
            // setStatus(apiResponse.statusCode);
            //   setStatusText(apiResponse.statusText);
            //   setData(json);
            setData(apiResponse);
        } catch (err: any) {
            console.log('<<<<<<<<< error >>>>>>>>>>>')
            console.log('error aqui: ' + err);
            setError(err);
        }
        setLoading(false);
    };

    if (executeAtInit) {
        useEffect(() => {
            getAPIData();
        }, []);
    }


    return { data, error, loading, getAPIData };
};



// export const useFetch2 = (request: Promise<any>): ApiResponse => {
//     // const [status, setStatus] = useState<Number>(0);
//     //   const [statusText, setStatusText] = useState<String>('');
//     const [data, setData] = useState<any>();
//     const [error, setError] = useState<Error>();
//     const [loading, setLoading] = useState<boolean>(false);

//     const getAPIData = async () => {
//         console.log('Lanzando peticion');
//         setLoading(true);
//         setData(null);
//         try {
//             await new Promise(r => setTimeout(r, 2000));
//             const apiResponse = await request;
//             //   const json = await apiResponse.body.json();
//             // setStatus(apiResponse.statusCode);
//             //   setStatusText(apiResponse.statusText);
//             //   setData(json);
//             setData(apiResponse);
//         } catch (error: any) {
//             setError(error);
//         }
//         setLoading(false);
//     };

//     await getAPIData();

//     return {  data, error, loading, getAPIData };
// };



export const useFetch2 = (request: ()=>Promise<any>): ApiResponse => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);


    // const userUseCases = new UserUseCases();

    const getAPIData = async () => {
        setLoading(true);
        setData(null);
        setError(null);
        try {
            console.log('1');
            await new Promise(r => setTimeout(r, 1000));
            const response = await request(); // userUseCases.getAllUsers();
            console.log('2');

            setData(response);
        } catch (error: any) {
            console.log('****************************');
            console.log(error);
            console.log('****************************');
            setError(error);
            console.log('3');
        }

        setLoading(false);
    }

    useEffect(() => {
        getAPIData();
    }, []);


    return { data, error, loading, getAPIData };
}
