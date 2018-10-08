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
public class Aficionado extends Usuario {
    
    private String descripcion;
    private Date fechaNacimiento;
    private String foto;
    private String nombre;
    private List<Apuesta> apuestas;
    private List<Opinion> opiniones;

    public Aficionado(String descripcion, Date fechaNacimiento, String foto, String nombre) {
        this.descripcion = descripcion;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
        this.nombre = nombre;
    }

    public Aficionado(String descripcion, Date fechaNacimiento, String foto, String nombre, String password, String username) {
        super(password, username);
        this.descripcion = descripcion;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
        this.nombre = nombre;
    }
    
    

    public Aficionado(String descripcion, Date fechaNacimiento, String foto, String nombre, String password, String username, String token) {
        super(password, username, token);
        this.descripcion = descripcion;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
        this.nombre = nombre;
    }

    public Aficionado(String password, String username, String token) {
        super(password, username, token);
    }
    
    
    
    

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
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
