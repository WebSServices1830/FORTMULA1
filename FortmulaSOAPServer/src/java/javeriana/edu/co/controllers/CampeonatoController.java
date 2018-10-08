/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import java.util.Date;
import javeriana.edu.co.entities.Campeonato;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

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
        for (String id : escuderias) {
            escuderiaController.asignarId(id, "campeonatoId", campeonatoId);
        }

        for (String id : premios) {
            premioController.asignarId(id, "campeonatoId", campeonatoId);
        }

        return true;
    }

    public Campeonato verCalendario(String id) {
        Campeonato campeonato = getCampeonatoById(id);
        if(campeonato == null) return null;
        
        EscuderiaController escuderiaController = new EscuderiaController();
        campeonato.setEscuderias(escuderiaController.getEscuderiasByCampeonatoId(id));
        
        PremioController premioController = new PremioController();
        campeonato.setPremios(premioController.getPremiosByCampeonatoId(id));
        
        return campeonato;
    }

    private Campeonato getCampeonatoById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return campeonatoToObject(query);
    }

    private Campeonato campeonatoToObject(Document d) {
        Date fechaInicio = d.getDate("descripcion");
        Date fechaFinal = d.getDate("foto");
        String nombre = d.getString("nombre");
        Campeonato campeonato = new Campeonato(fechaInicio, fechaFinal, nombre);
        ObjectId id = d.getObjectId("_id");
        campeonato.setId(id.toString());
        return campeonato;
    }
}
