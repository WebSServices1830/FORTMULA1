/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.entities;

import org.bson.Document;

/**
 *
 * @author Sala BD
 */
public class Usuario {
    private String password;
    private String username;
    private String token;

    public Usuario() {
    }

    public Usuario(String password, String username, String token) {
        this.password = password;
        this.username = username;
        this.token = token;
    }

    public Usuario(String password, String username) {
        this.password = password;
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
    public Document toDocument(){
        Document document = new Document("username", username).append("password", password).append("token", token);
        return document;
    }
    
}
