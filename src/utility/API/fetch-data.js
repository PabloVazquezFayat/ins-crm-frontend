import axios from 'axios';
import  { endpoints } from './endpoints'

export const fetchData = {
    account:{
        create: async (accountData)=> {
            try{
                const newAccount = await axios.post(endpoints.account, accountData);
                if(newAccount){
                    return newAccount;
                }
            }catch(error){
                return error;
            }
        },
        read: async ()=> {
            try{
                const accountData = await axios.get(endpoints.account);
                if(accountData){
                    return accountData;
                }
            }catch(error){
                return error;
            }
        },
        update: ()=> {

        },
        delete: ()=> {
            
        }
    },
    asset: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        }
    },
    claim: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        }
    },
    client: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        }
    },
    note: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        }
    },
    policy: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        }
    },
    user: {
        create: ()=> {

        },
        read: ()=> {

        },
        update: ()=> {

        },
        delete: ()=> {

        },
        login: async (credentials)=> {
            try{
                const { data: { user } } = await axios.post(endpoints.login, credentials);
                if(user){
                    return user;
                }
            }catch(error){
                return error.response.data;
            }
        }
    }
}