/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.entities;

import java.util.Date;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author Sala BD
 */
public class Premio {

    private String id;
    private String ciudad;
    private Date fecha;
    private Apuesta apuesta;
    private Carrera carrera;
    private Clasificacion clasificacion;
    private Entrenamiento entrenamiento;
    private InfoPista infoPista;
    private List<Opinion> opiniones;

    public Premio(String ciudad, Date fecha) {
        this.ciudad = ciudad;
        this.fecha = fecha;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Document toDocument() {
        Document document = new Document("ciudad", ciudad).append("fecha", fecha);
        return document;
    }
}
