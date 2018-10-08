/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import java.util.ArrayList;
import java.util.Date;
import javeriana.edu.co.entities.Campeonato;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;

/**
 *
 * @author juanpablorodriguez
 */
public class CampeonatoController {

    private final String COLLECTION = "campeonatos";
    private MongoDBHandler handler;

    public CampeonatoController() {
        handler = new MongoDBHandler();
    }

    public boolean crearCalendario(Date fechaFinal, Date fechaInicio, String nombre, ArrayList<String> premios, ArrayList<String> escuderias) {
        Campeonato campeonato = new Campeonato(fechaInicio, fechaFinal, nombre);
        Document doc = campeonato.toDocument();
        handler.insert_data(COLLECTION, doc);
        
        EscuderiaController escuderiaController = new EscuderiaController();
        PremioController premioController = new PremioController();
        
        String campeonatoId = doc.getObjectId("_id").toString();
        for(String id : escuderias){
            escuderiaController.asignarId(id, "campeonatoId", campeonatoId);
        }
        
        for(String id : premios){
            premioController.asignarId(id, "campeonatoId", campeonatoId);
        }

        return true;
    }
}
