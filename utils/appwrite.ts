import {APP_WRITE_ID} from '@/app.constants'
import {Account, Client, Databases, Storage} from 'appwrite'

export const client = new Client();

client
  .setEndpoint('http://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(APP_WRITE_ID) // Your project ID

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client);
export const storage = new Storage(client);
