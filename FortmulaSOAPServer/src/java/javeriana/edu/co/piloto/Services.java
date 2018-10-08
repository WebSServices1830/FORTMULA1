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
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javeriana.edu.co.controllers.ApuestaController;
import javeriana.edu.co.controllers.AutoController;
import javeriana.edu.co.controllers.CampeonatoController;
import javeriana.edu.co.controllers.EscuderiaController;
import javeriana.edu.co.controllers.InfoPistaController;
import javeriana.edu.co.controllers.OpinionController;
import javeriana.edu.co.controllers.PilotoController;
import javeriana.edu.co.controllers.PremioController;
import javeriana.edu.co.controllers.UsuarioController;
import javeriana.edu.co.entities.Apuesta;
import javeriana.edu.co.entities.Auto;
import javeriana.edu.co.entities.Usuario;
import javeriana.edu.co.entities.Campeonato;
import javeriana.edu.co.entities.Piloto;
import javeriana.edu.co.entities.Premio;
import javeriana.edu.co.entities.Escuderia;
import javeriana.edu.co.entities.InfoPista;
import javeriana.edu.co.entities.Opinion;
import javeriana.edu.co.entities.Resultado;

/**
 *
 * @author sala a
 */
@WebService(serviceName = "Services")
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

    @WebMethod(operationName = "verPerfil")
    public Usuario verPerfil(@WebParam(name = "username") String username) {
        UsuarioController controller = new UsuarioController();
        return controller.getUsuarioByUsername(username);
    }

    @WebMethod(operationName = "editarPerfil")
    public Usuario editarPerfil(@WebParam(name = "username") String username, @WebParam(name = "password") String password, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "fechaNacimiento") Date fechaNacimiento, @WebParam(name = "foto") String foto, @WebParam(name = "nombre") String nombre) {
        UsuarioController controller = new UsuarioController();
        return controller.editarPerfil(username, password, descripcion, fechaNacimiento, foto, nombre);
    }

    @WebMethod(operationName = "eliminarPerfil")
    public boolean eliminarPerfil(@WebParam(name = "username") String username) {
        UsuarioController controller = new UsuarioController();
        return controller.deleteUsuarioByUsername(username);
    }

    /**
     * Web Service operation for Calendar
     */
    @WebMethod(operationName = "crearCalendario")
    public boolean crearCalendario(@WebParam(name = "nombre") String nombre, @WebParam(name = "fechaInicial") Date fechaInicial, @WebParam(name = "fechaFinal") Date fechaFinal, @WebParam(name = "premios") ArrayList<String> premios, @WebParam(name = "escuderias") ArrayList<String> escuderias) {
        CampeonatoController controller = new CampeonatoController();
        return controller.crearCalendario(fechaFinal, fechaInicial, nombre, premios, escuderias);
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

    @WebMethod(operationName = "crearPremio")
    public boolean crearPremio(@WebParam(name = "ciudad") String ciudad, @WebParam(name = "fecha") Date fecha) {
        PremioController controller = new PremioController();
        return controller.crearPremio(ciudad, fecha);
    }

    /**
     * Web Service operation for escuderia
     */
    @WebMethod(operationName = "verEscuderias")
    public ArrayList<Escuderia> verEscuderias() {
        EscuderiaController controller = new EscuderiaController();
        return controller.verEscuderias();
    }

    @WebMethod(operationName = "verEscuderia")
    public Escuderia verEscuderia(@WebParam(name = "id") String id) {
        EscuderiaController controller = new EscuderiaController();
        return controller.verEscuderia(id);
    }

    @WebMethod(operationName = "eliminarEscuderia")
    public boolean eliminarEscuderia(@WebParam(name = "id") String id) {
        EscuderiaController controller = new EscuderiaController();
        return controller.eliminarEscuderia(id);
    }

    @WebMethod(operationName = "crearEscuderia")
    public boolean crearEscuderia(@WebParam(name = "nombre") String nombre, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "foto") String foto) {
        EscuderiaController controller = new EscuderiaController();
        return controller.crearEscuderia(nombre, descripcion, foto);
    }

    @WebMethod(operationName = "editarEscuderia")
    public Escuderia editarEscuderia(@WebParam(name = "id") String id, @WebParam(name = "nombre") String nombre, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "foto") String foto) {
        EscuderiaController controller = new EscuderiaController();
        return controller.editarEscuderia(id, nombre, descripcion, foto);
    }

    /**
     * Web service operation for Piloto
     */
    @WebMethod(operationName = "verPilotos")
    public ArrayList<Piloto> verPilotos() {
        PilotoController controller = new PilotoController();
        return controller.verPilotos();
    }

    @WebMethod(operationName = "verPilotosEscuderia")
    public ArrayList<Piloto> verPilotosEscuderia(@WebParam(name = "idEscuderia") String idEscuderia) {
        PilotoController controller = new PilotoController();
        return controller.verPilotosEscuderia(idEscuderia);
    }

    @WebMethod(operationName = "verPiloto")
    public Piloto verPiloto(@WebParam(name = "id") String id) {
        PilotoController controller = new PilotoController();
        return controller.verPiloto(id);
    }

    @WebMethod(operationName = "crearPiloto")
    public boolean crearPiloto(@WebParam(name = "fechaNacimiento") Date fechaNacimiento, @WebParam(name = "foto") String foto, @WebParam(name = "nacionalidad") String nacionalidad, @WebParam(name = "nombre") String nombre, @WebParam(name = "idEscuderia") String idEscuderia, @WebParam(name = "idAuto") String idAuto) {
        PilotoController controller = new PilotoController();
        return controller.crearPiloto(nombre, fechaNacimiento, foto, nacionalidad, idEscuderia, idAuto);
    }

    @WebMethod(operationName = "editarPiloto")
    public Piloto editarPiloto(@WebParam(name = "id") String id, @WebParam(name = "fechaNacimiento") Date fechaNacimiento, @WebParam(name = "foto") String foto, @WebParam(name = "nacionalidad") String nacionalidad, @WebParam(name = "nombre") String nombre) {
        PilotoController controller = new PilotoController();
        return controller.editarPiloto(id, nombre, fechaNacimiento, foto, nacionalidad);
    }

    @WebMethod(operationName = "eliminarPiloto")
    public boolean eliminarPiloto(@WebParam(name = "id") String id) {
        PilotoController controller = new PilotoController();
        return controller.eliminarPiloto(id);
    }

    @WebMethod(operationName = "verOpinionesPiloto")
    public ArrayList<Opinion> verOpinionesPiloto(@WebParam(name = "id") String idPiloto) {
        OpinionController controller = new OpinionController();
        return controller.verOpinionesPiloto(idPiloto);
    }

    @WebMethod(operationName = "crearOpinionPiloto")
    public boolean crearOpinionPiloto(@WebParam(name = "calificacion") int calificacion, @WebParam(name = "comentario") String comentario, @WebParam(name = "idPiloto") String idPiloto, @WebParam(name = "username") String username) {
        OpinionController controller = new OpinionController();
        return controller.crearOpinionPiloto(calificacion, comentario, idPiloto, username);
    }

    /**
     * Web service operation for Auto
     */
    @WebMethod(operationName = "verAuto")
    public Auto verAuto(@WebParam(name = "id") String id) {
        AutoController controller = new AutoController();
        return controller.verAuto(id);
    }

    @WebMethod(operationName = "verAutos")
    public ArrayList<Auto> verAutos() {
        AutoController controller = new AutoController();
        return controller.verAutos();
    }

    @WebMethod(operationName = "eliminarAuto")
    public boolean eliminarAuto(@WebParam(name = "id") String id) {
        AutoController controller = new AutoController();
        return controller.eliminarAuto(id);
    }

    @WebMethod(operationName = "crearAuto")
    public boolean crearAuto(@WebParam(name = "beamWing") String beamWing, @WebParam(name = "color") String color, @WebParam(name = "endplate") String endplate, @WebParam(name = "foto") String foto, @WebParam(name = "marca") String marca, @WebParam(name = "motor") String motor, @WebParam(name = "ponton") String ponton, @WebParam(name = "potencia") String potencia, @WebParam(name = "idEscuderia") String idEscuderia, @WebParam(name = "idPiloto") String idPiloto) {
        AutoController controller = new AutoController();
        return controller.crearAuto(beamWing, color, endplate, foto, marca, motor, ponton, potencia, idEscuderia, idPiloto);
    }

    @WebMethod(operationName = "editarAuto")
    public Auto editarAuto(@WebParam(name = "id") String id, @WebParam(name = "beamWing") String beamWing, @WebParam(name = "color") String color, @WebParam(name = "endplate") String endplate, @WebParam(name = "foto") String foto, @WebParam(name = "marca") String marca, @WebParam(name = "motor") String motor, @WebParam(name = "ponton") String ponton, @WebParam(name = "potencia") String potencia) {
        AutoController controller = new AutoController();
        return controller.editarAuto(id, beamWing, color, endplate, foto, marca, motor, ponton, potencia);
    }

    /**
     * Web service operation for Apuesta
     */
    @WebMethod(operationName = "verApuestas")
    public ArrayList<Apuesta> verApuestas(@WebParam(name = "username") String username) {
        ApuestaController controller = new ApuestaController();
        return controller.verApuestas(username);
    }

    @WebMethod(operationName = "crearApuesta")
    public boolean crearApuesta(@WebParam(name = "valor") double valor, @WebParam(name = "username") String username, @WebParam(name = "idPremio") String idPremio) {
        ApuestaController controller = new ApuestaController();
        return controller.crearApuesta(valor, username, idPremio);
    }

    @WebMethod(operationName = "eliminarApuesta")
    public boolean eliminarApuesta(@WebParam(name = "id") String id) {
        ApuestaController controller = new ApuestaController();
        return controller.eliminarApuesta(id);
    }

    /**
     * Web Service operation for InfoPista
     */
    @WebMethod(operationName = "verOpinionesPista")
    public ArrayList<Opinion> verOpinionesPista(@WebParam(name = "id") String idPista) {
        OpinionController controller = new OpinionController();
        return controller.verOpinionesPista(idPista);
    }

    @WebMethod(operationName = "crearOpinionPista")
    public boolean crearOpinionPista(@WebParam(name = "calificacion") int calificacion, @WebParam(name = "comentario") String comentario, @WebParam(name = "idPista") String idPista, @WebParam(name = "username") String username) {
        OpinionController controller = new OpinionController();
        return controller.crearOpinionPista(calificacion, comentario, idPista, username);
    }

    @WebMethod(operationName = "crearInfoPista")
    public boolean crearInfoPista(@WebParam(name = "ciudad") String ciudad, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "foto") String foto, @WebParam(name = "longitud") String longitud, @WebParam(name = "nombre") String nombre, @WebParam(name = "puntuacion") int puntuacion, @WebParam(name = "idPremio") String idPremio) {
        InfoPistaController controller = new InfoPistaController();
        return controller.crearInfoPista(ciudad, descripcion, foto, longitud, nombre, puntuacion, idPremio);
    }

    @WebMethod(operationName = "editarInfoPista")
    public InfoPista editarInfoPista(@WebParam(name = "id") String id, @WebParam(name = "ciudad") String ciudad, @WebParam(name = "descripcion") String descripcion, @WebParam(name = "foto") String foto, @WebParam(name = "longitud") String longitud, @WebParam(name = "nombre") String nombre, @WebParam(name = "puntuacion") int puntuacion) {
        InfoPistaController controller = new InfoPistaController();
        return controller.editarInfoPista(id, ciudad, descripcion, foto, longitud, nombre, puntuacion);
    }

    @WebMethod(operationName = "eliminarInfoPista")
    public boolean eliminarInfoPista(@WebParam(name = "id") String id) {
        InfoPistaController controller = new InfoPistaController();
        return controller.eliminarInfoPista(id);
    }

}
