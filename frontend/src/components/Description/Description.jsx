function Description(props) {
  const { data } = props;
  return (
    <>
      <img src={data.image} alt={data.title_fr} />
      <h1>{data.title_fr}</h1>
      <h2>{data.conditions_fr}</h2>
      <p>{data.longdescription_fr}</p>
    </>
  );
}

export default Description;
