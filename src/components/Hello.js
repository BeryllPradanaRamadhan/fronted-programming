function Hello(props) {
  const {nama,jurusan} = props;
  return (
    <div>
      <h1>Saya {nama}</h1>
      <p>Saya {jurusan}</p>
    </div>
  );
}

export default Hello;
