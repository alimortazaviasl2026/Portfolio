import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Title from "../../common/Title";


function MapBox({theme}) {

    const position = [35.490132, 51.141428]
  return (
   <>
    <Title>Find Me Here</Title>
      <MapContainer center={position} zoom={13} style={{ height: "70vh", width: "100%" }}>
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url={theme === 'light'?"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}
      />
      <Marker position={position}>
        <Popup>
          NasirShahr
        </Popup>
      </Marker>
     </MapContainer>
   </>
  )
}

export default MapBox
