import axios from 'axios';
import  { endpoints } from '../API/endpoints'

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
        read: async (data)=> {
            try{
                const { account_id, user_id } = data;
                const accountData = await axios.get(endpoints.account, {params: {account_id: account_id, user_id: user_id}});
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
        login: ()=> {

        }
    }
}