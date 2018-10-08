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
public class Carrera {
    
    private int numVueltas;
    private String pista;

    public Carrera(int numVueltas, String pista) {
        this.numVueltas = numVueltas;
        this.pista = pista;
    }

    public int getNumVueltas() {
        return numVueltas;
    }

    public void setNumVueltas(int numVueltas) {
        this.numVueltas = numVueltas;
    }

    public String getPista() {
        return pista;
    }

    public void setPista(String pista) {
        this.pista = pista;
    }
    
    
    
}
