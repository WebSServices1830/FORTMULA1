<?php
class verOpinionesPiloto{
var $id;//string
}
class verOpinionesPilotoResponse{
var $return;//opinion
}
class opinion{
var $calificacion;//int
var $comentario;//string
}
class verPremio{
var $id;//string
}
class verPremioResponse{
var $return;//premio
}
class premio{
var $ciudad;//string
var $fecha;//dateTime
var $id;//string
}
class verAutos{
}
class verAutosResponse{
var $return;//auto
}
class auto{
var $beamWing;//string
var $color;//string
var $endplate;//string
var $foto;//string
var $id;//string
var $marca;//string
var $motor;//string
var $ponton;//string
var $potencia;//string
}
class crearOpinionPista{
var $calificacion;//int
var $comentario;//string
var $idPista;//string
var $username;//string
}
class crearOpinionPistaResponse{
var $return;//boolean
}
class editarInfoPista{
var $id;//string
var $ciudad;//string
var $descripcion;//string
var $foto;//string
var $longitud;//string
var $nombre;//string
var $puntuacion;//int
}
class editarInfoPistaResponse{
var $return;//infoPista
}
class infoPista{
var $ciudad;//string
var $descripcion;//string
var $foto;//string
var $id;//string
var $longitud;//string
var $nombre;//string
var $premio;//premio
var $puntuacion;//int
}
class editarPiloto{
var $id;//string
var $fechaNacimiento;//dateTime
var $foto;//string
var $nacionalidad;//string
var $nombre;//string
}
class editarPilotoResponse{
var $return;//piloto
}
class piloto{
var $fecha_nacimiento;//dateTime
var $foto;//string
var $id;//string
var $nacionalidad;//string
var $nombre;//string
var $ranking;//int
}
class crearOpinionPiloto{
var $calificacion;//int
var $comentario;//string
var $idPiloto;//string
var $username;//string
}
class crearOpinionPilotoResponse{
var $return;//boolean
}
class eliminarInfoPista{
var $id;//string
}
class eliminarInfoPistaResponse{
var $return;//boolean
}
class eliminarAuto{
var $id;//string
}
class eliminarAutoResponse{
var $return;//boolean
}
class verPerfil{
var $username;//string
}
class verPerfilResponse{
var $return;//usuario
}
class usuario{
var $password;//string
var $token;//string
var $username;//string
}
class registrarUsuario{
var $username;//string
var $password;//string
var $tipo;//string
}
class registrarUsuarioResponse{
var $return;//string
}
class eliminarPerfil{
var $username;//string
}
class eliminarPerfilResponse{
var $return;//boolean
}
class crearInfoPista{
var $ciudad;//string
var $descripcion;//string
var $foto;//string
var $longitud;//string
var $nombre;//string
var $puntuacion;//int
var $idPremio;//string
}
class crearInfoPistaResponse{
var $return;//boolean
}
class eliminarApuesta{
var $id;//string
}
class eliminarApuestaResponse{
var $return;//boolean
}
class calcularPuntaje{
var $resultadoPractica;//resultado
var $resultadoCarrera;//resultado
}
class resultado{
var $mejorVuelta;//double
var $tiempoCarrera;//double
var $tiempoClasificacion;//double
}
class calcularPuntajeResponse{
var $return;//int
}
class crearPiloto{
var $fechaNacimiento;//dateTime
var $foto;//string
var $nacionalidad;//string
var $nombre;//string
var $idEscuderia;//string
var $idAuto;//string
}
class crearPilotoResponse{
var $return;//boolean
}
class verApuestas{
var $username;//string
}
class verApuestasResponse{
var $return;//apuesta
}
class apuesta{
var $id;//string
var $valor;//double
}
class crearAuto{
var $beamWing;//string
var $color;//string
var $endplate;//string
var $foto;//string
var $marca;//string
var $motor;//string
var $ponton;//string
var $potencia;//string
var $idEscuderia;//string
var $idPiloto;//string
}
class crearAutoResponse{
var $return;//boolean
}
class verEscuderia{
var $id;//string
}
class verEscuderiaResponse{
var $return;//escuderia
}
class escuderia{
var $descripcion;//string
var $foto;//string
var $id;//string
var $nombre;//string
}
class verAuto{
var $id;//string
}
class verAutoResponse{
var $return;//auto
}
class autenticarUsuario{
var $username;//string
var $password;//string
}
class autenticarUsuarioResponse{
var $return;//string
}
class verOpinionesPista{
var $id;//string
}
class verOpinionesPistaResponse{
var $return;//opinion
}
class verCalendario{
var $id;//string
}
class verCalendarioResponse{
var $return;//campeonato
}
class campeonato{
var $escuderias;//escuderia
var $fechaFinal;//dateTime
var $fechaInicio;//dateTime
var $id;//string
var $nombre;//string
var $premios;//premio
}
class crearApuesta{
var $valor;//double
var $username;//string
var $idPremio;//string
}
class crearApuestaResponse{
var $return;//boolean
}
class eliminarPiloto{
var $id;//string
}
class eliminarPilotoResponse{
var $return;//boolean
}
class crearCalendario{
var $nombre;//string
var $fechaInicial;//dateTime
var $fechaFinal;//dateTime
var $premios;//string
var $escuderias;//string
}
class crearCalendarioResponse{
var $return;//boolean
}
class verEscuderias{
}
class verEscuderiasResponse{
var $return;//escuderia
}
class verPilotos{
}
class verPilotosResponse{
var $return;//piloto
}
class verPiloto{
var $id;//string
}
class verPilotoResponse{
var $return;//piloto
}
class verPremios{
}
class verPremiosResponse{
var $return;//premio
}
class verPilotosEscuderia{
var $idEscuderia;//string
}
class verPilotosEscuderiaResponse{
var $return;//piloto
}
class crearPremio{
var $ciudad;//string
var $fecha;//dateTime
}
class crearPremioResponse{
var $return;//boolean
}
class editarAuto{
var $id;//string
var $beamWing;//string
var $color;//string
var $endplate;//string
var $foto;//string
var $marca;//string
var $motor;//string
var $ponton;//string
var $potencia;//string
}
class editarAutoResponse{
var $return;//auto
}
class crearEscuderia{
var $nombre;//string
var $descripcion;//string
var $foto;//string
}
class crearEscuderiaResponse{
var $return;//boolean
}
class editarEscuderia{
var $id;//string
var $nombre;//string
var $descripcion;//string
var $foto;//string
}
class editarEscuderiaResponse{
var $return;//escuderia
}
class editarPerfil{
var $username;//string
var $password;//string
var $descripcion;//string
var $fechaNacimiento;//dateTime
var $foto;//string
var $nombre;//string
}
class editarPerfilResponse{
var $return;//usuario
}
class eliminarEscuderia{
var $id;//string
}
class eliminarEscuderiaResponse{
var $return;//boolean
}
class Proxy 
 {
 var $soapClient;
 
private static $classmap = array('verOpinionesPiloto'=>'verOpinionesPiloto'
,'verOpinionesPilotoResponse'=>'verOpinionesPilotoResponse'
,'opinion'=>'opinion'
,'verPremio'=>'verPremio'
,'verPremioResponse'=>'verPremioResponse'
,'premio'=>'premio'
,'verAutos'=>'verAutos'
,'verAutosResponse'=>'verAutosResponse'
,'auto'=>'auto'
,'crearOpinionPista'=>'crearOpinionPista'
,'crearOpinionPistaResponse'=>'crearOpinionPistaResponse'
,'editarInfoPista'=>'editarInfoPista'
,'editarInfoPistaResponse'=>'editarInfoPistaResponse'
,'infoPista'=>'infoPista'
,'editarPiloto'=>'editarPiloto'
,'editarPilotoResponse'=>'editarPilotoResponse'
,'piloto'=>'piloto'
,'crearOpinionPiloto'=>'crearOpinionPiloto'
,'crearOpinionPilotoResponse'=>'crearOpinionPilotoResponse'
,'eliminarInfoPista'=>'eliminarInfoPista'
,'eliminarInfoPistaResponse'=>'eliminarInfoPistaResponse'
,'eliminarAuto'=>'eliminarAuto'
,'eliminarAutoResponse'=>'eliminarAutoResponse'
,'verPerfil'=>'verPerfil'
,'verPerfilResponse'=>'verPerfilResponse'
,'usuario'=>'usuario'
,'registrarUsuario'=>'registrarUsuario'
,'registrarUsuarioResponse'=>'registrarUsuarioResponse'
,'eliminarPerfil'=>'eliminarPerfil'
,'eliminarPerfilResponse'=>'eliminarPerfilResponse'
,'crearInfoPista'=>'crearInfoPista'
,'crearInfoPistaResponse'=>'crearInfoPistaResponse'
,'eliminarApuesta'=>'eliminarApuesta'
,'eliminarApuestaResponse'=>'eliminarApuestaResponse'
,'calcularPuntaje'=>'calcularPuntaje'
,'resultado'=>'resultado'
,'calcularPuntajeResponse'=>'calcularPuntajeResponse'
,'crearPiloto'=>'crearPiloto'
,'crearPilotoResponse'=>'crearPilotoResponse'
,'verApuestas'=>'verApuestas'
,'verApuestasResponse'=>'verApuestasResponse'
,'apuesta'=>'apuesta'
,'crearAuto'=>'crearAuto'
,'crearAutoResponse'=>'crearAutoResponse'
,'verEscuderia'=>'verEscuderia'
,'verEscuderiaResponse'=>'verEscuderiaResponse'
,'escuderia'=>'escuderia'
,'verAuto'=>'verAuto'
,'verAutoResponse'=>'verAutoResponse'
,'autenticarUsuario'=>'autenticarUsuario'
,'autenticarUsuarioResponse'=>'autenticarUsuarioResponse'
,'verOpinionesPista'=>'verOpinionesPista'
,'verOpinionesPistaResponse'=>'verOpinionesPistaResponse'
,'verCalendario'=>'verCalendario'
,'verCalendarioResponse'=>'verCalendarioResponse'
,'campeonato'=>'campeonato'
,'crearApuesta'=>'crearApuesta'
,'crearApuestaResponse'=>'crearApuestaResponse'
,'eliminarPiloto'=>'eliminarPiloto'
,'eliminarPilotoResponse'=>'eliminarPilotoResponse'
,'crearCalendario'=>'crearCalendario'
,'crearCalendarioResponse'=>'crearCalendarioResponse'
,'verEscuderias'=>'verEscuderias'
,'verEscuderiasResponse'=>'verEscuderiasResponse'
,'verPilotos'=>'verPilotos'
,'verPilotosResponse'=>'verPilotosResponse'
,'verPiloto'=>'verPiloto'
,'verPilotoResponse'=>'verPilotoResponse'
,'verPremios'=>'verPremios'
,'verPremiosResponse'=>'verPremiosResponse'
,'verPilotosEscuderia'=>'verPilotosEscuderia'
,'verPilotosEscuderiaResponse'=>'verPilotosEscuderiaResponse'
,'crearPremio'=>'crearPremio'
,'crearPremioResponse'=>'crearPremioResponse'
,'editarAuto'=>'editarAuto'
,'editarAutoResponse'=>'editarAutoResponse'
,'crearEscuderia'=>'crearEscuderia'
,'crearEscuderiaResponse'=>'crearEscuderiaResponse'
,'editarEscuderia'=>'editarEscuderia'
,'editarEscuderiaResponse'=>'editarEscuderiaResponse'
,'editarPerfil'=>'editarPerfil'
,'editarPerfilResponse'=>'editarPerfilResponse'
,'eliminarEscuderia'=>'eliminarEscuderia'
,'eliminarEscuderiaResponse'=>'eliminarEscuderiaResponse'

);

 function __construct($url='http://localhost:8080/Services/Services?wsdl')
 {
  $this->soapClient = new SoapClient($url,array("classmap"=>self::$classmap,"trace" => true,"exceptions" => true));
 }
 
function eliminarInfoPista(eliminarInfoPista $eliminarInfoPista)
{

$eliminarInfoPistaResponse = $this->soapClient->eliminarInfoPista($eliminarInfoPista);
return $eliminarInfoPistaResponse;

}
function crearOpinionPiloto(crearOpinionPiloto $crearOpinionPiloto)
{

$crearOpinionPilotoResponse = $this->soapClient->crearOpinionPiloto($crearOpinionPiloto);
return $crearOpinionPilotoResponse;

}
function verOpinionesPiloto(verOpinionesPiloto $verOpinionesPiloto)
{

$verOpinionesPilotoResponse = $this->soapClient->verOpinionesPiloto($verOpinionesPiloto);
return $verOpinionesPilotoResponse;

}
function verPilotosEscuderia(verPilotosEscuderia $verPilotosEscuderia)
{

$verPilotosEscuderiaResponse = $this->soapClient->verPilotosEscuderia($verPilotosEscuderia);
return $verPilotosEscuderiaResponse;

}
function eliminarEscuderia(eliminarEscuderia $eliminarEscuderia)
{

$eliminarEscuderiaResponse = $this->soapClient->eliminarEscuderia($eliminarEscuderia);
return $eliminarEscuderiaResponse;

}
function verOpinionesPista(verOpinionesPista $verOpinionesPista)
{

$verOpinionesPistaResponse = $this->soapClient->verOpinionesPista($verOpinionesPista);
return $verOpinionesPistaResponse;

}
function crearOpinionPista(crearOpinionPista $crearOpinionPista)
{

$crearOpinionPistaResponse = $this->soapClient->crearOpinionPista($crearOpinionPista);
return $crearOpinionPistaResponse;

}
function autenticarUsuario(autenticarUsuario $autenticarUsuario)
{

$autenticarUsuarioResponse = $this->soapClient->autenticarUsuario($autenticarUsuario);
return $autenticarUsuarioResponse;

}
function editarPerfil(editarPerfil $editarPerfil)
{

$editarPerfilResponse = $this->soapClient->editarPerfil($editarPerfil);
return $editarPerfilResponse;

}
function crearEscuderia(crearEscuderia $crearEscuderia)
{

$crearEscuderiaResponse = $this->soapClient->crearEscuderia($crearEscuderia);
return $crearEscuderiaResponse;

}
function registrarUsuario(registrarUsuario $registrarUsuario)
{

$registrarUsuarioResponse = $this->soapClient->registrarUsuario($registrarUsuario);
return $registrarUsuarioResponse;

}
function verPerfil(verPerfil $verPerfil)
{

$verPerfilResponse = $this->soapClient->verPerfil($verPerfil);
return $verPerfilResponse;

}
function eliminarPerfil(eliminarPerfil $eliminarPerfil)
{

$eliminarPerfilResponse = $this->soapClient->eliminarPerfil($eliminarPerfil);
return $eliminarPerfilResponse;

}
function calcularPuntaje(calcularPuntaje $calcularPuntaje)
{

$calcularPuntajeResponse = $this->soapClient->calcularPuntaje($calcularPuntaje);
return $calcularPuntajeResponse;

}
function crearPremio(crearPremio $crearPremio)
{

$crearPremioResponse = $this->soapClient->crearPremio($crearPremio);
return $crearPremioResponse;

}
function crearCalendario(crearCalendario $crearCalendario)
{

$crearCalendarioResponse = $this->soapClient->crearCalendario($crearCalendario);
return $crearCalendarioResponse;

}
function verPremio(verPremio $verPremio)
{

$verPremioResponse = $this->soapClient->verPremio($verPremio);
return $verPremioResponse;

}
function verPremios(verPremios $verPremios)
{

$verPremiosResponse = $this->soapClient->verPremios($verPremios);
return $verPremiosResponse;

}
function verEscuderias(verEscuderias $verEscuderias)
{

$verEscuderiasResponse = $this->soapClient->verEscuderias($verEscuderias);
return $verEscuderiasResponse;

}
function verEscuderia(verEscuderia $verEscuderia)
{

$verEscuderiaResponse = $this->soapClient->verEscuderia($verEscuderia);
return $verEscuderiaResponse;

}
function editarEscuderia(editarEscuderia $editarEscuderia)
{

$editarEscuderiaResponse = $this->soapClient->editarEscuderia($editarEscuderia);
return $editarEscuderiaResponse;

}
function verCalendario(verCalendario $verCalendario)
{

$verCalendarioResponse = $this->soapClient->verCalendario($verCalendario);
return $verCalendarioResponse;

}
function verPilotos(verPilotos $verPilotos)
{

$verPilotosResponse = $this->soapClient->verPilotos($verPilotos);
return $verPilotosResponse;

}
function crearApuesta(crearApuesta $crearApuesta)
{

$crearApuestaResponse = $this->soapClient->crearApuesta($crearApuesta);
return $crearApuestaResponse;

}
function verAutos(verAutos $verAutos)
{

$verAutosResponse = $this->soapClient->verAutos($verAutos);
return $verAutosResponse;

}
function crearAuto(crearAuto $crearAuto)
{

$crearAutoResponse = $this->soapClient->crearAuto($crearAuto);
return $crearAutoResponse;

}
function verPiloto(verPiloto $verPiloto)
{

$verPilotoResponse = $this->soapClient->verPiloto($verPiloto);
return $verPilotoResponse;

}
function editarAuto(editarAuto $editarAuto)
{

$editarAutoResponse = $this->soapClient->editarAuto($editarAuto);
return $editarAutoResponse;

}
function eliminarAuto(eliminarAuto $eliminarAuto)
{

$eliminarAutoResponse = $this->soapClient->eliminarAuto($eliminarAuto);
return $eliminarAutoResponse;

}
function editarInfoPista(editarInfoPista $editarInfoPista)
{

$editarInfoPistaResponse = $this->soapClient->editarInfoPista($editarInfoPista);
return $editarInfoPistaResponse;

}
function crearPiloto(crearPiloto $crearPiloto)
{

$crearPilotoResponse = $this->soapClient->crearPiloto($crearPiloto);
return $crearPilotoResponse;

}
function editarPiloto(editarPiloto $editarPiloto)
{

$editarPilotoResponse = $this->soapClient->editarPiloto($editarPiloto);
return $editarPilotoResponse;

}
function eliminarPiloto(eliminarPiloto $eliminarPiloto)
{

$eliminarPilotoResponse = $this->soapClient->eliminarPiloto($eliminarPiloto);
return $eliminarPilotoResponse;

}
function verAuto(verAuto $verAuto)
{

$verAutoResponse = $this->soapClient->verAuto($verAuto);
return $verAutoResponse;

}
function eliminarApuesta(eliminarApuesta $eliminarApuesta)
{

$eliminarApuestaResponse = $this->soapClient->eliminarApuesta($eliminarApuesta);
return $eliminarApuestaResponse;

}
function verApuestas(verApuestas $verApuestas)
{

$verApuestasResponse = $this->soapClient->verApuestas($verApuestas);
return $verApuestasResponse;

}
function crearInfoPista(crearInfoPista $crearInfoPista)
{

$crearInfoPistaResponse = $this->soapClient->crearInfoPista($crearInfoPista);
return $crearInfoPistaResponse;

}}

?>