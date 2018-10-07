/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.piloto;

import java.util.ArrayList;
import java.util.Date;
import javax.jws.WebService;
import javax.ejb.Stateless;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javeriana.edu.co.controllers.UsuarioController;
import javeriana.edu.co.entities.Auto;
import javeriana.edu.co.entities.Campeonato;
import javeriana.edu.co.entities.Piloto;
import javeriana.edu.co.entities.Premio;
import javeriana.edu.co.entities.Escuderia;
import javeriana.edu.co.entities.Resultado;

/**
 *
 * @author sala a
 */
@WebService(serviceName = "PilotoWebService")
@Stateless()
public class Services {

    /**
     * Web Service Operation for USER
     */
    @WebMethod(operationName = "registrarUsuario")
    public String registrarUsuario(@WebParam(name = "username") String username, @WebParam(name = "password") String password, @WebParam(name = "tipo") String tipo) {
        UsuarioController controller = new UsuarioController();
        String token = controller.registrarUsuario(username, password, tipo);
        return token;
    }

    @WebMethod(operationName = "autenticarUsuario")
    public String autenticarUsuario(@WebParam(name = "username") String username, @WebParam(name = "password") String password) {
        UsuarioController controller = new UsuarioController();
        String token = controller.autenticarUsuario(username, password);
        return token;
    }

    /**
     * Web Service operation for Calendar
     */
    @WebMethod(operationName = "crearCalendario")
    public Campeonato crearCalendario(@WebParam(name = "nombre") String nombre, @WebParam(name = "fechaInicial") Date fechaInicial, @WebParam(name = "fechaFinal") Date fechaFinal, @WebParam(name = "premios") ArrayList<Premio> premios, @WebParam(name = "escuderias") ArrayList<Escuderia> escuderias) {
        //TODO write your implementation code here:
        return null;
    }

    @WebMethod(operationName = "verCalendario")
    public Campeonato verCalendario(@WebParam(name = "nombre") String nombre) {

        return null;
    }

    /**
     * Web Service operation for premio
     */
    @WebMethod(operationName = "calcularPuntaje")
    public int calcularPuntaje(@WebParam(name = "resultadoPractica") ArrayList<Resultado> resultadoPractica, @WebParam(name = "resultadoCarrera") ArrayList<Resultado> resultadoCarrera) {
        //TODO write your implementation code here:
        return 0;
    }

    /**
     * Web Service operation for escuderia
     */
    @WebMethod(operationName = "verEscuderia")
    public Escuderia verEscuderia(@WebParam(name = "id") int id) {
        return null;
    }

    @WebMethod(operationName = "crearEscuderia")
    public boolean crearEscuderia(@WebParam(name = "nombre") String nombre, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "foto") String foto) {
        //TODO write your implementation code here:
        return false;
    }

    /**
     * Web service operation for Piloto
     */
    @WebMethod(operationName = "crearPiloto")
    public Piloto crearPiloto(@WebParam(name = "fechaNacimiento") Date fechaNacimiento, @WebParam(name = "foto") String foto, @WebParam(name = "nacionalidad") String nacionalidad, @WebParam(name = "nombre") String nombre) {
        //TODO write your implementation code here:
        
        return null;
    }

    @WebMethod(operationName = "eliminarPiloto")
    public boolean eliminarPiloto(@WebParam(name = "id") int id) {
        return true;
    }
    
    /**
     * Web service operation for Auto
     */
    @WebMethod(operationName = "verAuto")
    public Auto verAuto(@WebParam(name = "id") int id) {
        //TODO write your implementation code here:
        return null;
    }
    
    @WebMethod(operationName = "eliminarAuto")
    public boolean eliminarAuto(@WebParam(name = "id") int id) {
        //TODO write your implementation code here:
        return true;
    }
    

    
}
