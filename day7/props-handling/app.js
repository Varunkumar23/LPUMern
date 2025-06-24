const domRoot = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "varun",
    score: 99,
  },
  { name: "aditya", score: 90 },
  { name: "hari", score: 77 },
  { name: "vijay", score: 77 },
  { name: "lohith", score: 77 },
];

const styleObj={
    color:"purple",
    fontSize:"1.5rem",
    fontWeight:"600",
}

const Card = (props) => {
  const { title, score } =props;
  return (
    <div class="card">
      <h1 style={styleObj}>{title}</h1>
      <h1 style={styleObj}>{score}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div class="hello">
      {/* <h1>MG</h1> */}
      {/* <Card name={arr[0].name} score={arr[0].score}></Card> */}
      {
        arr.map((elem)=>{
            return(
                <Card title={elem.name} score={elem.score} />
            )
        })
      }
    </div>
  );
};

reactRoot.render(App());
// reactRoot.render(Card(arr));
