import React from "react";
import { Client, ID, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class Config {

    client = new Client()
    databases;

    constructor () {
        this.client
        this.setEndpoint(conf.appwriteUrl)
        this.setProject(conf.appwriteProjectID)
        this.databases = new Databases(client)
    }

    async CreateApplication (company, role, status, userID) {

        try{
            await this.databases.createDocument (
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                ID.unique(),
                {company, role, status, userID}
            )
        } catch (error) {
            console.log("Config :: CreateApplication :: error")
        }
    }

    async ListApplications (userID) {

        try {
            await this.databases.listDocuments (
                conf.appwriteDatabaseID,
                conf.appwriteProjectID,
                [Query.equal("userID", userID)]
            )
        } catch (error) {
            console.log ("Config :: GetApplications :: error")
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
        }
    }

    async UpdateApplications (userID, {company, status, role}) {

        try {
           return await this.databases.updateDocument (
                conf.appwriteDatabaseID,
                conf.appwriteProjectID,
                {company, status, role}

            )
        } catch (error) {
            console.log ("Config :: UpdateApplications :: error")
        }
    }

    async DeleteApplication () {
        try{
            await this.databases.deleteDocument (
                conf.appwriteDatabaseID,
                conf.appwriteProjectID,
                documentId
            )
        } catch (error) {
            console.log("Cofig :: DeleteApplication :: error")
        }
    }

    
}

const config = new Config ()
export default config