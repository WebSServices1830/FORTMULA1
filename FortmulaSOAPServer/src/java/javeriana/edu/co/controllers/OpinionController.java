/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.FindIterable;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import javeriana.edu.co.entities.Opinion;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class OpinionController {

    private final String COLLECTION = "opiniones";
    private MongoDBHandler handler;

    public OpinionController() {
        this.handler = new MongoDBHandler();
    }

    public boolean crearOpinionPiloto(int calificacion, String comentario, String idPiloto, String username) {
        Opinion opinion = new Opinion(calificacion, comentario);
        Document doc = opinion.toDocument().append("idPiloto", idPiloto).append("username", username);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public ArrayList<Opinion> verOpinionesPiloto(String idPiloto) {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(eq("idPiloto", idPiloto));
        ArrayList<Opinion> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(opinionToObject(doc));
        }
        return result;
    }

    public boolean crearOpinionPista(int calificacion, String comentario, String idPista, String username) {
        Opinion opinion = new Opinion(calificacion, comentario);
        Document doc = opinion.toDocument().append("idPista", idPista).append("username", username);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public ArrayList<Opinion> verOpinionesPista(String idPista) {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(eq("idPista", idPista));
        ArrayList<Opinion> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(opinionToObject(doc));
        }
        return result;
    }

    public Opinion opinionToObject(Document d) {
        int calificacion = d.getInteger("calificacion");
        String comentario = d.getString("comentario");
        return new Opinion(calificacion, comentario);
    }

}
