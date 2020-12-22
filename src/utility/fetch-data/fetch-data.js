import axios from 'axios';
import  { endpoints } from '../API/endpoints'

export const fetchData = {
    account:{
        create: async (accountData)=> {

            try{

                const url = `${endpoints.domain}${endpoints.account}`;
                const newAccount = await axios.post(url, accountData);

                if(newAccount){
                    return newAccount;
                }

            }catch(error){
                return error;
            }

        },
        read: ()=> {

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