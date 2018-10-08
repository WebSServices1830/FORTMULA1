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
public class Clasificacion {
    
    private Resultado q1;
    private Resultado q2;
    private Resultado q3;

    public Clasificacion(Resultado q1, Resultado q2, Resultado q3) {
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    public Resultado getQ1() {
        return q1;
    }

    public void setQ1(Resultado q1) {
        this.q1 = q1;
    }

    public Resultado getQ2() {
        return q2;
    }

    public void setQ2(Resultado q2) {
        this.q2 = q2;
    }

    public Resultado getQ3() {
        return q3;
    }

    public void setQ3(Resultado q3) {
        this.q3 = q3;
    }
    
    
    
}
