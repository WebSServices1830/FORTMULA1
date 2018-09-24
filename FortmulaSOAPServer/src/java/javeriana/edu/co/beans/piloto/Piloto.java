/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.beans.piloto;

import java.util.Date;
import javax.ejb.Stateless;

/**
 *
 * @author sala a
 */
@Stateless
public class Piloto implements PilotoLocal {

    private int id;
    private String nombre;
    private Date fecha_nacimiento;
    private String foto;
    private String nacionalidad;
    private int ranking;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

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

    
}
