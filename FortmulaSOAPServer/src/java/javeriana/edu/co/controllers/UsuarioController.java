/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.eq;
import java.security.SecureRandom;
import javeriana.edu.co.entities.Usuario;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;

/**
 *
 * @author Sala BD
 */
public class UsuarioController {
    private final String COLLECTION = "usuarios";
    
    private MongoDBHandler handler;
    
    public String registrarUsuario(String username, String password){
        handler = new MongoDBHandler();
        handler.connect_database(null, -1);
        String token = generateToken();
        Usuario usuario = new Usuario(password, username, token);
        
        Document usuario_document = usuario.toDocument();
        if(existsUserByUsername(username))
            return "";
        
        handler.insert_data(COLLECTION, usuario.toDocument());
        return token;
    }
    
    private String generateToken(){
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);
        String token = bytes.toString();
        return token;
    }
    
    private boolean existsUserByUsername(String username){
        Document document = handler.getMongo_db().getCollection(COLLECTION).find(eq("username", username)).first();
        return document != null;
    }
}
