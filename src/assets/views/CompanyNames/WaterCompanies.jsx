import React, { Fragment  } from 'react'
import '../Home/Home.css';
import { Link } from "react-router-dom";
import Header from '../../components/Headline';

const WaterCompanies = () => {
  return (
  <Fragment >
<Header  name="Empresas de Agua"/>


<Link to="/BusquedaPorVoz"><button aria-label="Aguas Andinas">Aguas Andinas</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Altiplano" >Aguas Altiplano</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Cordillera">Aguas Cordillera</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Antofagastas">Aguas Antofagastas</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Araucania">Aguas Araucania</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Chañar">Aguas Chañar</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Manquehue">Aguas Manquehue</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Patagonia de Aysen">Aguas Patagonia de Aysen</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Esval">Esval</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Pirque S.A.">Aguas Pirque S.A.</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Decima">Aguas Decima</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Agual del Valle">Agual del Valle</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Magallanes">Aguas Magallanes</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Essal">Essal</button></Link>

    {/* <button aria-label="Emapal S.A.">Emapal S.A.</button>
    <button aria-label="Coopagua">Coopagua</button>
    <button aria-label="Aguas San Isidro">Aguas San Isidro</button>
    <button aria-label="Aguas San Pedro">Aguas San Pedro</button>
    <button aria-label="Aguas Altiplano">Aguas Altiplano</button>
    <button aria-label="Aprmarquesa">Aprmarquesa</button>
    <button aria-label="As Poniente">As Poniente</button>
    <button aria-label="Brisagua">Brisagua</button>
    <button aria-label="Coab">Coab</button>
    <button aria-label="Coapec">Coapec</button>
    <button aria-label="Cossbo">Cossbo</button>
    <button aria-label="Eap Cruceral">Eap Cruceral</button>
    <button aria-label="Essbio">Essbio</button>
    <button aria-label="Nuevosur">Nuevosur</button>
    <button aria-label="Sembcorp(Ex Aguas Chacabuco)">Sembcorp(Ex Aguas Chacabuco)</button>
    <button aria-label="Sembcorp(Ex Aguas Santiago)">Sembcorp(Ex Aguas Santiago)</button>
    <button aria-label="Sembcorp(Ex Aguas Servicomunal)">Sembcorp(Ex Aguas Servicomunal)</button> */}
  </Fragment>)
}
export default WaterCompanies;