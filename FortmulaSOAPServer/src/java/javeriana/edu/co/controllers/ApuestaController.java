/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.FindIterable;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.result.DeleteResult;
import java.util.ArrayList;
import javeriana.edu.co.entities.Apuesta;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class ApuestaController {

    private final String COLLECTION = "apuestas";
    private MongoDBHandler handler;

    public ApuestaController() {
        handler = new MongoDBHandler();
    }

    public ArrayList<Apuesta> verApuestas(String username) {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(eq("username", username));
        ArrayList<Apuesta> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(apuestaToObject(doc));
        }
        return result;
    }

    public boolean crearApuesta(double valor, String username, String idPremio) {
        Apuesta opinion = new Apuesta(valor);
        Document doc = opinion.toDocument().append("username", username).append("idPremio", idPremio);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public Apuesta apuestaToObject(Document d) {
        double valor = d.getDouble("valor");
        Apuesta apuesta = new Apuesta(valor);
        ObjectId id = d.getObjectId("_id");
        apuesta.setId(id.toString());
        return apuesta;
    }

    public boolean eliminarApuesta(String id) {
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("_id", new ObjectId(id)));
        return result.getDeletedCount() == 1;
    }
}
