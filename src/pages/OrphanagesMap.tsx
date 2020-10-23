import React from "react"

import { Link } from "react-router-dom"
import {FiArrowRight, FiPlus} from "react-icons/all"

import markerMap from '../images/iconMap.svg'
import '../styles/pages/orphanage-map.css'

import {Map , TileLayer, Marker, Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Leaflet from "leaflet"

const mapIcon = Leaflet.icon({
    iconUrl: markerMap,

    iconSize: [56,66], 
    iconAnchor: [28,66],
    popupAnchor: [170,2]
})

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

            <Map
                center={[-20.2828012,-40.3106677]}
                zoom={15}
                style={{width:"100%",height: "100%"}}
            >

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                <Marker
                    icon={mapIcon}
                    position={[-20.2828012,-40.3106677]}
                >


                <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                    Lar das Meninas
                    <Link to='/orphanage/1'>
                        <FiArrowRight size={20} color="#FFF"></FiArrowRight>
                    </Link>
                </Popup>
               
                </Marker>

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
            
        </div>
    )
}

export default OrphanagesMap