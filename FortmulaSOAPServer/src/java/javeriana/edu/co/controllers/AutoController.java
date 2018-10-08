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
import javeriana.edu.co.entities.Auto;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class AutoController {

    private final String COLLECTION = "autos";
    private MongoDBHandler handler;

    public AutoController() {
        handler = new MongoDBHandler();
    }

    public boolean crearAuto(String beamWing, String color, String endplate, String foto, String marca, String motor, String ponton, String potencia, String idEscuderia, String idPiloto) {
        Auto auto = new Auto(beamWing, color, endplate, foto, marca, motor, ponton, potencia);
        Document doc = auto.toDocument().append("idEscuderia", idEscuderia).append("idPiloto", idPiloto);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public Auto editarAuto(String id, String beamWing, String color, String endplate, String foto, String marca, String motor, String ponton, String potencia) {
        Auto auto = getAutoById(id);
        if (beamWing != null) {
            auto.setBeamWing(beamWing);
        }
        if (color != null) {
            auto.setColor(color);
        }
        if (endplate != null) {
            auto.setEndplate(endplate);
        }
        if (foto != null) {
            auto.setFoto(foto);
        }
        if (marca != null) {
            auto.setMarca(marca);
        }
        if (motor != null) {
            auto.setMotor(motor);
        }
        if (ponton != null) {
            auto.setPonton(ponton);
        }
        if (potencia != null) {
            auto.setPotencia(potencia);
        }

        handler.getMongo_db().getCollection(COLLECTION).updateOne(
                eq(
                        "_id",
                        new ObjectId(id)
                ),
                combine(
                        set("beamWing", auto.getBeamWing()),
                        set("color", auto.getColor()),
                        set("endplate", auto.getEndplate()),
                        set("foto", auto.getFoto()),
                        set("marca", auto.getMarca()),
                        set("motor", auto.getMotor()),
                        set("ponton", auto.getPonton()),
                        set("potencia", auto.getPotencia())
                )
        );
        return auto;
    }

    public boolean eliminarAuto(String id) {
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("_id", new ObjectId(id)));
        return result.getDeletedCount() == 1;
    }

    public ArrayList<Auto> verAutos() {
        FindIterable<Document> query = handler.getMongo_db().getCollection(COLLECTION).find(new Document());
        ArrayList<Auto> result = new ArrayList<>();
        for (Document doc : query) {
            result.add(autoToObject(doc));
        }
        return result;
    }

    public Auto verAuto(String id) {
        return getAutoById(id);
    }

    private Auto getAutoById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return autoToObject(query);
    }

    private Auto autoToObject(Document d) {
        String beamWing = d.getString("beamWing");
        String color = d.getString("color");
        String endplate = d.getString("endplate");
        String foto = d.getString("foto");
        String marca = d.getString("marca");
        String motor = d.getString("motor");
        String ponton = d.getString("ponton");
        String potencia = d.getString("potencia");
        Auto auto = new Auto(beamWing, color, endplate, foto, marca, motor, ponton, potencia);
        ObjectId id = d.getObjectId("_id");
        auto.setId(id.toString());
        return auto;
    }
}
