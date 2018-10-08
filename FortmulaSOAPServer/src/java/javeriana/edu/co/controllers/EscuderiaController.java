/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.FindIterable;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.set;
import static com.mongodb.client.model.Updates.combine;
import com.mongodb.client.result.DeleteResult;
import java.util.ArrayList;
import javeriana.edu.co.entities.Escuderia;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class EscuderiaController {

    private final String COLLECTION = "escuderias";
    private MongoDBHandler handler;

    public EscuderiaController() {
        handler = new MongoDBHandler();
    }

    public ArrayList<Escuderia> verEscuderias() {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(new Document());
        ArrayList<Escuderia> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(escuderiaToObject(doc));
        }
        return result;
    }

    public boolean crearEscuderia(String nombre, String descripcion, String foto) {
        Escuderia escuderia = new Escuderia(descripcion, foto, nombre);
        Document doc = escuderia.toDocument();
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public Escuderia verEscuderia(String id) {
        return getEscuderiaById(id);
    }

    public boolean eliminarEscuderia(String id) {
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("_id", new ObjectId(id)));
        return result.getDeletedCount() == 1;
    }

    public Escuderia editarEscuderia(String id, String nombre, String descripcion, String foto) {
        Escuderia escuderia = getEscuderiaById(id);
        if (escuderia == null) {
            return null;
        }

        if (nombre != null) {
            escuderia.setNombre(nombre);
        }
        if (descripcion != null) {
            escuderia.setDescripcion(descripcion);
        }
        if (foto != null) {
            escuderia.setFoto(foto);
        }

        handler.getMongo_db().getCollection(COLLECTION).updateOne(
                eq(
                        "_id",
                        new ObjectId(id)
                ),
                combine(
                        set("nombre", escuderia.getNombre()),
                        set("descripcion", escuderia.getDescripcion()),
                        set("foto", escuderia.getFoto())
                )
        );
        return escuderia;
    }

    private Escuderia getEscuderiaById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return escuderiaToObject(query);
    }

    private Escuderia escuderiaToObject(Document d) {
        String descripcion = d.getString("descripcion");
        String foto = d.getString("foto");
        String nombre = d.getString("nombre");
        Escuderia escuderia = new Escuderia(descripcion, foto, nombre);
        ObjectId id = d.getObjectId("_id");
        escuderia.setId(id.toString());
        return escuderia;
    }
}
