/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.entities;

import java.util.Date;
import java.util.List;

/**
 *
 * @author Sala BD
 */
public class Campeonato {
    
    private Date fechaInicio;
    private Date fechaFianl;
    private String nombre;
    private List<Escuderia> escuderias;
    private List<Premio> premios;
    

    public Campeonato(Date fechaInicio, Date fechaFianl, String nombre) {
        this.fechaInicio = fechaInicio;
        this.fechaFianl = fechaFianl;
        this.nombre = nombre;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFianl() {
        return fechaFianl;
    }

    public void setFechaFianl(Date fechaFianl) {
        this.fechaFianl = fechaFianl;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Escuderia> getEscuderias() {
        return escuderias;
    }

    public void setEscuderias(List<Escuderia> escuderias) {
        this.escuderias = escuderias;
    }

    public List<Premio> getPremios() {
        return premios;
    }

    public void setPremios(List<Premio> premios) {
        this.premios = premios;
    }
    
    
    
}
