import "./description.css";

function Description({ data }) {
  return (
    <div className="alldescritpion">
      <img src={data.image} alt={data.title_fr} className="pic" />
      <div className="desccond">
        <h3 className="titledescription">{data.title_fr}</h3>
        <h6 className="conditions">{data.conditions_fr}</h6>
      </div>
      <p className="longdescr">{data.longdescription_fr}</p>
      <hr className="hrtop" />
      <ul className="descirptiondatelist">
        <li>{data.date1}</li>
        <li>{data.date2}</li>
      </ul>
      <hr className="hrbot" />
      <p className="adress">{data.location_address}</p>
      <button type="button" className="booking">
        book ticket
      </button>
      <article className="locations">
        {data.location_coordinates.lat},{data.location_coordinates.lon}{" "}
      </article>
    </div>
  );
}

export default Description;
