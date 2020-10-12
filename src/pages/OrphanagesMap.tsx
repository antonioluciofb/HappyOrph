import React from "react"

import { Link } from "react-router-dom"
import {FiPlus} from "react-icons/all"

import markerMap from '../images/iconMap.svg'
import '../styles/pages/orphanage-map.css'

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={markerMap} alt="Happy"/>
                    <h2>Escolha um Orfanato</h2>
                    <p>Muitas crianças estão esperando a sua visita ;)</p>
                </header>

                <footer>
                        <strong>Vitoria</strong>
                        <span>Espirito Santo</span>
                </footer>

            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
            
        </div>
    )
}

export default OrphanagesMap