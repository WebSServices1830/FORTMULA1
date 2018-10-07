/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.entities;

/**
 *
 * @author Sala BD
 */
public class Entrenamiento {
    
    private String pista;
    private double tiempo;

    public Entrenamiento(String pista, double tiempo) {
        this.pista = pista;
        this.tiempo = tiempo;
    }

    public String getPista() {
        return pista;
    }

    public void setPista(String pista) {
        this.pista = pista;
    }

    public double getTiempo() {
        return tiempo;
    }

    public void setTiempo(double tiempo) {
        this.tiempo = tiempo;
    }
    
    
}
