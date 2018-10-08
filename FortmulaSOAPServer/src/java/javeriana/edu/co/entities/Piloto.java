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
 * @author sala a
 */
public class Piloto {

    private String id;
    private String nombre;
    private Date fecha_nacimiento;
    private String foto;
    private String nacionalidad;
    private int ranking;
    private List<Opinion> opiniones;
    private Auto auto;

    public Piloto(String nombre, Date fecha_nacimiento, String foto, String nacionalidad) {
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.foto = foto;
        this.nacionalidad = nacionalidad;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(Date fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    public Document toDocument() {
        Document document = new Document("nombre", nombre).append("fecha_nacimiento", fecha_nacimiento).append("foto", foto).append("nacionalidad", nacionalidad);
        return document;
    }
}
