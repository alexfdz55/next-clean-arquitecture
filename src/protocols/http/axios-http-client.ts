import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from './http_utilities'

export class AxiosHttpClient implements HttpClient {
  axiosInstance: AxiosInstance;
  constructor(
    ) { 
      this.axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        
      });
    }

  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.axiosInstance.request({

        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}