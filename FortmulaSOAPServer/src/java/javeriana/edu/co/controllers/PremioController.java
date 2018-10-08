/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.combine;
import static com.mongodb.client.model.Updates.set;
import java.util.Date;
import javeriana.edu.co.entities.Escuderia;
import javeriana.edu.co.entities.Premio;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class PremioController {

    private final String COLLECTION = "premios";
    private MongoDBHandler handler;

    public PremioController() {
        handler = new MongoDBHandler();
    }

    public boolean crearPremio(String ciudad, Date fecha) {
        Premio premio = new Premio(ciudad, fecha);
        Document doc = premio.toDocument();
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    private Premio getPremioById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return premioToObject(query);
    }

    private Premio premioToObject(Document d) {
        String ciudad = d.getString("ciudad");
        Date fecha = d.getDate("fecha");
        Premio premio = new Premio(ciudad, fecha);
        ObjectId id = d.getObjectId("_id");
        premio.setId(id.toString());
        return premio;
    }
    
    public boolean asignarId(String id, String key, String value) {
        handler.getMongo_db().getCollection(COLLECTION).updateOne(
                eq(
                        "_id",
                        new ObjectId(id)
                ),
                combine(
                        set(key, value)
                )
        );
        return true;
    }
}
