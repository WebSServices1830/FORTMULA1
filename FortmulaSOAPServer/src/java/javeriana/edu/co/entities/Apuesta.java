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
public class Apuesta {

    private double valor;
    private String id;

    public Apuesta(double valor) {
        this.valor = valor;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Document toDocument() {
        Document document = new Document("valor", valor);
        return document;
    }
}
