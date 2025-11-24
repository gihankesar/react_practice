export default function Card(props) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      borderRadius: "8px",
      width: "180px"
    }}>
      <img 
        src={props.image} 
        alt="card img" 
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
