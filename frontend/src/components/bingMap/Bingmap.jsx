import { ReactBingmaps } from "react-bingmaps";

function BingMap({ data }) {
  console.info("ghgg", data);
  return (
    <ReactBingmaps
      bingmapKey="[AinSL9L_jxl_xCjEE1L4hM70PzrFmnYUJk7XmczBO-GOE7CHcLxT1J6HXP_dCmkk]"
      center={[data.location_coordinates.lat, data.location_coordinates.lon]}
    />
  );
}

export default BingMap;
