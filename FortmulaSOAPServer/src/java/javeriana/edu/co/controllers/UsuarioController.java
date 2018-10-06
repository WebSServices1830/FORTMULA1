/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.and;
import java.security.SecureRandom;
import javeriana.edu.co.entities.Administrador;
import javeriana.edu.co.entities.Aficionado;
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
    
    public UsuarioController(){
        handler = new MongoDBHandler();
        handler.connect_database(null, -1);
    }
    
    public String registrarUsuario(String username, String password, String tipo){
        if(existsUserByUsername(username))
            return "";
        
        String token = generateToken();
        if(tipo.equals("administrador")){
            Administrador admin = new Administrador(username, password, token);
            Document doc = admin.toDocument().append("tipo", tipo);
            handler.insert_data(COLLECTION, doc);
        }else{
            Aficionado aficionado = new Aficionado(username, password, token);
            Document doc = aficionado.toDocument().append("tipo", tipo);
            handler.insert_data(COLLECTION, doc);
        }
        
        return token;
    }
    
    public String autenticarUsuario(String username, String password){
        Document document = handler.getMongo_db().getCollection(COLLECTION).find(and(eq("username", username), eq("password", password))).first();
        if(document == null) return "";
        return document.getString("token");
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
