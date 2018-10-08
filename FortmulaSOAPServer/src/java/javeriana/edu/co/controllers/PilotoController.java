/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import com.mongodb.client.FindIterable;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.combine;
import static com.mongodb.client.model.Updates.set;
import com.mongodb.client.result.DeleteResult;
import java.util.ArrayList;
import java.util.Date;
import javeriana.edu.co.entities.Piloto;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class PilotoController {

    private final String COLLECTION = "pilotos";
    private MongoDBHandler handler;

    public PilotoController() {
        handler = new MongoDBHandler();
    }

    public boolean crearPiloto(String nombre, Date fecha_nacimiento, String foto, String nacionalidad, String idEscuderia, String idAuto) {
        Piloto piloto = new Piloto(nombre, fecha_nacimiento, foto, nacionalidad);
        Document doc = piloto.toDocument().append("idEscuderia", idEscuderia).append("idAuto", idAuto);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public Piloto editarPiloto(String id, String nombre, Date fecha_nacimiento, String foto, String nacionalidad) {
        Piloto piloto = getPilotoById(id);
        if (nombre != null) {
            piloto.setNombre(nombre);
        }
        if (fecha_nacimiento != null) {
            piloto.setFecha_nacimiento(fecha_nacimiento);
        }
        if (foto != null) {
            piloto.setFoto(foto);
        }
        if (nacionalidad != null) {
            piloto.setNacionalidad(nacionalidad);
        }
        handler.getMongo_db().getCollection(COLLECTION).updateOne(
                eq(
                        "_id",
                        new ObjectId(id)
                ),
                combine(
                        set("nombre", piloto.getNombre()),
                        set("fecha_nacimiento", piloto.getFecha_nacimiento()),
                        set("foto", piloto.getFoto()),
                        set("nacionalidad", piloto.getNacionalidad())
                )
        );
        return piloto;
    }

    public boolean eliminarPiloto(String id) {
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("_id", new ObjectId(id)));
        return result.getDeletedCount() == 1;
    }

    public ArrayList<Piloto> verPilotos() {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(new Document());
        ArrayList<Piloto> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(pilotoToObject(doc));
        }
        return result;
    }

    public Piloto verPiloto(String id) {
        return getPilotoById(id);
    }

    private Piloto getPilotoById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return pilotoToObject(query);
    }

    private Piloto pilotoToObject(Document d) {
        String nombre = d.getString("nombre");
        Date fecha_nacimiento = d.getDate("fecha_nacimiento");
        String foto = d.getString("foto");
        String nacionalidad = d.getString("nacionalidad");
        Piloto piloto = new Piloto(nombre, fecha_nacimiento, foto, nacionalidad);
        ObjectId id = d.getObjectId("_id");
        piloto.setId(id.toString());
        return piloto;
    }
}
