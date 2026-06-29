import React from "react";
import { Client, ID, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class Config {

    client = new Client()
    databases;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
    }

    async CreateApplication ({company, role, status, userID}) {

        try{
            return await this.databases.createDocument (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                ID.unique(),
                {company, role, status, userID}
            )
        } catch (error) {
            console.log("Config :: CreateApplication :: error")
            console.log(error);
    console.log(error.message);
    console.log(error.code);
    console.log(error.type);
        }
    }

    async ListApplications (userID) {

        try {
            return await this.databases.listDocuments (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                [Query.equal("userID", userID)]
            )
        } catch (error) {
            console.log ("Config :: GetApplications :: error")
            throw error
        }
    }

    async GetApplication (documentId) {
        
        try {
            await this.databases.getDocument (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                documentId
            )
        } catch (error) {
            console.log ("Config :: GetApplication :: error")
            throw error
        }
    }

    async UpdateApplications (userID, {company, status, role}) {

        try {
           return await this.databases.updateDocument (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                {company, status, role}

            )
        } catch (error) {
            console.log ("Config :: UpdateApplications :: error")
            throw error
        }
    }

    async DeleteApplication () {
        try{
            await this.databases.deleteDocument (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                documentId
            )
        } catch (error) {
            console.log("Cofig :: DeleteApplication :: error")
            throw error
        }
    }

    
}

const config = new Config ()
export default config