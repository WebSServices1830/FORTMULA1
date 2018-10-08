/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.controllers;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.combine;
import static com.mongodb.client.model.Updates.set;
import com.mongodb.client.result.DeleteResult;
import java.util.Date;
import javeriana.edu.co.entities.InfoPista;
import javeriana.edu.co.utils.MongoDBHandler;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author juanpablorodriguez
 */
public class InfoPistaController {

    private final String COLLECTION = "infopista";
    private MongoDBHandler handler;

    public InfoPistaController() {
        handler = new MongoDBHandler();
    }

    public boolean crearInfoPista(String ciudad, String descripcion, String foto, String longitud, String nombre, int puntuacion, String idPremio) {
        InfoPista infoPista = new InfoPista(ciudad, descripcion, foto, longitud, nombre, puntuacion);
        Document doc = infoPista.toDocument().append("idPremio", idPremio);
        handler.insert_data(COLLECTION, doc);
        return true;
    }

    public InfoPista editarInfoPista(String id, String ciudad, String descripcion, String foto, String longitud, String nombre, int puntuacion) {
        System.out.println(puntuacion);
        InfoPista infoPista = getInfoPistaById(id);
        if (infoPista == null) {
            return null;
        }
        if(ciudad != null)infoPista.setCiudad(ciudad);
        if(descripcion != null) infoPista.setDescripcion(descripcion);
        if(foto != null) infoPista.setFoto(foto);
        if(longitud != null) infoPista.setLongitud(longitud);
        if(nombre != null) infoPista.setNombre(nombre);
        handler.getMongo_db().getCollection(COLLECTION).updateOne(
                eq(
                        "_id",
                        new ObjectId(id)
                ),
                combine(
                        set("ciudad", infoPista.getCiudad()),
                        set("descripcion", infoPista.getDescripcion()),
                        set("foto", infoPista.getFoto()),
                        set("longitud", infoPista.getLongitud()),
                        set("nombre", infoPista.getNombre()),
                        set("puntuacion", infoPista.getPuntuacion())
                )
        );
        return infoPista;
    }
    
    public boolean eliminarInfoPista(String id) {
        DeleteResult result = handler.getMongo_db().getCollection(COLLECTION).deleteOne(eq("_id", new ObjectId(id)));
        return result.getDeletedCount() == 1;
    }

    public InfoPista getInfoPistaById(String id) {
        Document query = handler.getMongo_db().getCollection(COLLECTION).find(eq("_id", new ObjectId(id))).first();
        if (query == null) {
            return null;
        }
        return infoPistaToObject(query);
    }

    private InfoPista infoPistaToObject(Document d) {
        String ciudad = d.getString("ciudad");
        String descripcion = d.getString("descripcion");
        String foto = d.getString("foto");
        String longitud = d.getString("longitud");
        int puntuacion = d.getInteger("puntuacion");
        InfoPista infoPista = new InfoPista(ciudad, descripcion, foto, longitud, foto, puntuacion);
        ObjectId id = d.getObjectId("_id");
        infoPista.setId(id.toString());
        return infoPista;
    }
}
