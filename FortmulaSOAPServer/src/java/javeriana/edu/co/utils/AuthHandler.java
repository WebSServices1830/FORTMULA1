/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.utils;

import static com.mongodb.client.model.Filters.eq;
import org.bson.Document;

/**
 *
 * @author Sala BD
 */
public class AuthHandler {
    
    public static boolean existsToken(String token){
        MongoDBHandler handler = new MongoDBHandler();
        handler.connect_database(null, -1);
        
        Document document = handler.getMongo_db().getCollection("usuarios").find(eq("token", token)).first();
        return document != null;
    }
}
