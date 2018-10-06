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
public class Administrador extends Usuario{

    public Administrador() {
    }

    public Administrador(String password, String username, String token) {
        super(password, username, token);
    }
    
}
