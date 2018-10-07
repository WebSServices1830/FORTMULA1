/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.utils;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 *
 * @author Sala BD
 */
public class MongoDBHandler {

    private MongoClient mongo_client;
    private MongoDatabase mongo_db;
    private String database_name;

    public MongoDBHandler() {
        database_name = "test";
        MongoClientURI uri = new MongoClientURI("mongodb+srv://juanpablorn30:admin_juanpablorn30@fortmula1-rbvaz.mongodb.net/admin");
        mongo_client = new MongoClient(uri);
        mongo_db = mongo_client.getDatabase(database_name);
        
    }

    public void connect_database(String host, int port) {
        if (host == null && port != -1) {
            return;
        }

        if (host == null && port == -1) {
            setMongo_client(new MongoClient());
        } else if (host != null && port == -1) {
            setMongo_client(new MongoClient(host));
        } else if (host != null && port != -1) {
            setMongo_client(new MongoClient(host, port));
        }

        setMongo_db(getMongo_client().getDatabase(database_name));
    }

    public void insert_data(String collection_name, Document data) {
        getMongo_db().getCollection(collection_name).insertOne(data);
    }

    public MongoClient getMongo_client() {
        return mongo_client;
    }

    public void setMongo_client(MongoClient mongo_client) {
        this.mongo_client = mongo_client;
    }

    public MongoDatabase getMongo_db() {
        return mongo_db;
    }

    public void setMongo_db(MongoDatabase mongo_db) {
        this.mongo_db = mongo_db;
    }
}
