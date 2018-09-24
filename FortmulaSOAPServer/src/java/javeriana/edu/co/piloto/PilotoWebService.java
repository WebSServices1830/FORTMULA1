/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javeriana.edu.co.piloto;

import javax.ejb.EJB;
import javax.jws.WebService;
import javax.ejb.Stateless;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javeriana.edu.co.beans.piloto.Piloto;
import javeriana.edu.co.beans.piloto.PilotoLocal;

/**
 *
 * @author sala a
 */
@WebService(serviceName = "PilotoWebService")
@Stateless()
public class PilotoWebService {
    
    

    @EJB
    private PilotoLocal ejbRef;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

    /**
     * Web service operation
     */
    @WebMethod(operationName = "findAll")
    public Piloto findAll() {
        //TODO write your implementation code here:
        return null;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "agregar_piloto")
    public Piloto agregar_piloto(@WebParam(name = "piloto") Piloto piloto) {
        //TODO write your implementation code here:
        return null;
    }
    
    /**
     * Web service operation
     */
    @WebMethod(operationName = "eliminar_piloto")
    public boolean eliminar_piloto(@WebParam(name = "piloto") Piloto piloto) {
        //TODO write your implementation code here:
        return true;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "buscar_piloto")
    public Piloto buscar_piloto(@WebParam(name = "id") int id) {
        //TODO write your implementation code here:
        return null;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "actualizar_piloto")
    public Piloto actualizar_piloto(@WebParam(name = "id") int id, @WebParam(name = "piloto") Piloto piloto) {
        //TODO write your implementation code here:
        return null;
    }
}
