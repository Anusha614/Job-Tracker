import React from "react";
import conf from '../conf/conf'
import{Client, Account, ID} from "appwrite"

export class AuthService {

    client = new Client ();
    account;

    constructor () {

        this.client
            .setProject(conf.appwriteProjectID)
            .setEndpoint(conf.appwriteUrl)
        this.account = new Account(this.client)
        
    }

    async CreateAccount (email, password, name) {
        try{
        const user = await this.account.create(

            ID.unique(), email, password, name

        )

        if (user) {
            return this.Login (email, password)
        } else {
            return user
        }
    } catch (error) {
        console.log("Auth :: CreateAccount :: error")
        throw error
    }
    }

    async Login (email, password) {
        try {
        return await this.account.createEmailPasswordSession (
            email, password
        )
    } catch (error) {
        console.log ("Auth :: Login :: error")
        throw error
    }
    }

    async Logout () {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log ("Auth :: Logout :: error")
            throw error
        }
    }

    async GetCurrentUser () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Auth :: getCurrentUser :: error")
            throw error
        }
        return null
    }
}

const authService = new AuthService ()

export default authService 