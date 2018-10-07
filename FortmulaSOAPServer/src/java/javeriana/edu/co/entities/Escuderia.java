/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.entities;

import java.util.List;

/**
 *
 * @author Sala BD
 */
public class Escuderia {
    
    private int id;
    private String descripcion;
    private String foto;
    private String nombre;
    private List<Auto> autos;
    private List<Piloto> pilotos;

    public Escuderia(int id, String descripcion, String foto, String nombre) {
        this.id = id;
        this.descripcion = descripcion;
        this.foto = foto;
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    
}
