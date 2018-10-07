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
public class Resultado {
    
    private double mejorVuelta;
    private double tiempoCarrera;
    private double tiempoClasificacion;
    private List<Clasificacion> clasificaciones;
    private List<Carrera> carreras;
    private List<Piloto> pilotos;

    public Resultado(double mejorVuelta, double tiempoCarrera, double tiempoClasificacion) {
        this.mejorVuelta = mejorVuelta;
        this.tiempoCarrera = tiempoCarrera;
        this.tiempoClasificacion = tiempoClasificacion;
    }

    public double getMejorVuelta() {
        return mejorVuelta;
    }

    public void setMejorVuelta(double mejorVuelta) {
        this.mejorVuelta = mejorVuelta;
    }

    public double getTiempoCarrera() {
        return tiempoCarrera;
    }

    public void setTiempoCarrera(double tiempoCarrera) {
        this.tiempoCarrera = tiempoCarrera;
    }

    public double getTiempoClasificacion() {
        return tiempoClasificacion;
    }

    public void setTiempoClasificacion(double tiempoClasificacion) {
        this.tiempoClasificacion = tiempoClasificacion;
    }
    
    
}
