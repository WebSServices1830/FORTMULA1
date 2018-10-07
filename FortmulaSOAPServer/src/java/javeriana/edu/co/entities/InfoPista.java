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
public class InfoPista {
    
    private String ciudad;
    private String descripcion;
    private String foto;
    private String longitud;
    private String nombre;
    private int puntuacion;
    private Premio premio;

    public InfoPista(String ciudad, String descripcion, String foto, String longitud, String nombre, int puntuacion) {
        this.ciudad = ciudad;
        this.descripcion = descripcion;
        this.foto = foto;
        this.longitud = longitud;
        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
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

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public Premio getPremio() {
        return premio;
    }

    public void setPremio(Premio premio) {
        this.premio = premio;
    }
    
    
    
}
