import { useEffect, useState } from "react"


export type ApiResponse<T = any> = {
    // status: Number;
    //   statusText: String;
    data: T;
    error: Error | null;
    loading: boolean;
    getAPIData: (params?: any) => Promise<void>;
};


export type UseFetchProps<T = any> = {
    initialData?: T,
    isLoadedCallback?: (data:T)=>void,
    request: (params?: any)=>Promise<any>, 
    executeAtInit: boolean,
};



export const useFetch = ({initialData, isLoadedCallback, request, executeAtInit}: UseFetchProps): ApiResponse => {
    const [data, setData] = useState<any>(initialData);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);


    // const userUseCases = new UserUseCases();

    const getAPIData = async (params?: any) => {
        setLoading(true);
        setData(initialData);
        setError(null);
        try {
            console.log('1');
            await new Promise(r => setTimeout(r, 1000));
            console.log('params: ' + params);
            const response = await request(params); // userUseCases.getAllUsers();
            console.log('2');
            setData(response);
            // console.log('users: '+ JSON.stringify(response));
            if(isLoadedCallback)
            isLoadedCallback(response);
         
        } catch (error: any) {
            console.log('****************************');
            console.log(error);
            console.log('****************************');
            setError(error);
            console.log('3');
        }

        setLoading(false);
        
    }

    if (executeAtInit) {
        useEffect(() => {
            getAPIData();
            
        }, []);
    }


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
