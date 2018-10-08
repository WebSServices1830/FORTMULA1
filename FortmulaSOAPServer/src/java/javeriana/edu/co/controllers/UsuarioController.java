/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.and;
import com.mongodb.client.result.DeleteResult;
import java.security.SecureRandom;
import java.util.Date;
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

    public UsuarioController() {
        handler = new MongoDBHandler();
    }

    public String registrarUsuario(String username, String password, String tipo) {
        if (existsUserByUsername(username)) {
            return "";
        }

        String token = generateToken();
        if (tipo.equals("administrador")) {
            Administrador admin = new Administrador(password, username, token);
            Document doc = admin.toDocument().append("tipo", tipo);
            handler.insert_data(COLLECTION, doc);
        } else if (tipo.equals("aficionado")) {
            Aficionado aficionado = new Aficionado(password, username, token);
            Document doc = aficionado.toDocument().append("tipo", tipo);
            handler.insert_data(COLLECTION, doc);
        } else {
            return "";
        }

        return token;
    }

    public String autenticarUsuario(String username, String password) {
        Document document = handler.getMongo_db().getCollection(COLLECTION).find(and(eq("username", username), eq("password", password))).first();
        if (document == null) {
            return "";
        }
        return document.getString("token");
    }

    public Usuario getUsuarioByUsername(String username) {
        Document document = handler.getMongo_db().getCollection(COLLECTION).find(eq("username", username)).first();
        if(document == null) return null;
        
        String tipo = document.getString("tipo");
        if(tipo.equals("aficionado")){
            return documentToAficionado(document);
        }else if(tipo.equals("administrador"))
            return documentToAdministrador(document);
        return null;
    }
    
    public boolean deleteUsuarioByUsername(String username){
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("username", username));
        return result.getDeletedCount() == 1;
    }

    private String generateToken() {
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);
        String token = bytes.toString();
        return token;
    }

    private boolean existsUserByUsername(String username) {
        Document document = handler.getMongo_db().getCollection(COLLECTION).find(eq("username", username)).first();
        return document != null;
    }

    private Aficionado documentToAficionado(Document doc) {
        String descripcion = doc.getString("descripcion");
        Date fechaNacimiento = doc.getDate("fechaNacimiento");
        String foto = doc.getString("foto");
        String nombre = doc.getString("nombre");
        String username = doc.getString("username");
        String password = doc.getString("password");
        return new Aficionado(descripcion, fechaNacimiento, foto, nombre, password, username);
    }
    
    private Administrador documentToAdministrador(Document doc) {
        String username = doc.getString("username");
        String password = doc.getString("password");
        return new Administrador(password, username);
    }
}
