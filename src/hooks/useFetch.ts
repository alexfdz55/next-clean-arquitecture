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

export const useFetch = (request: ()=>Promise<any>, executeAtInit: boolean = false): ApiResponse => {
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
            console.log('users: ' + response);

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

    // if (executeAtInit) {
    //     useEffect(() => {
    //         getAPIData();
    //     }, []);
    // }


    return { data, error, loading, getAPIData };
};




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
