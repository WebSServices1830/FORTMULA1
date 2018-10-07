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
public class Auto {
    
    private String beamWing;
    private String color;
    private String endplate;
    private String foto;
    private String marca;
    private String motor;
    private String ponton;
    private String potencia;

    public Auto(String beamWing, String color, String endplate, String foto, String marca, String motor, String ponton, String potencia) {
        this.beamWing = beamWing;
        this.color = color;
        this.endplate = endplate;
        this.foto = foto;
        this.marca = marca;
        this.motor = motor;
        this.ponton = ponton;
        this.potencia = potencia;
    }

    public String getBeamWing() {
        return beamWing;
    }

    public void setBeamWing(String beamWing) {
        this.beamWing = beamWing;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getEndplate() {
        return endplate;
    }

    public void setEndplate(String endplate) {
        this.endplate = endplate;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getMotor() {
        return motor;
    }

    public void setMotor(String motor) {
        this.motor = motor;
    }

    public String getPonton() {
        return ponton;
    }

    public void setPonton(String ponton) {
        this.ponton = ponton;
    }

    public String getPotencia() {
        return potencia;
    }

    public void setPotencia(String potencia) {
        this.potencia = potencia;
    }
    
    
    
}
