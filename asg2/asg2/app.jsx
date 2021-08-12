//Liu Kam Nam 1155109652

const {BrowserRouter, Link, Route, Switch, useParams} = ReactRouterDOM;
const Router = BrowserRouter;
let interval = null;

const data = [
  {filename: "cuhk-2013.jpg", year: 2013, remarks: "Sunset over CUHK"},
  {filename: "cuhk-2017.jpg", year: 2017, remarks: "Bird's-eye view of CUHK"},
  {filename: "sci-2013.jpg", year: 2013, remarks: "The CUHK Emblem"},
  {filename: "shb-2013.jpg", year: 2013, remarks: "The Engineering Buildings"},
  {filename: "stream-2009.jpg", year: 2009, remarks: "Nature hidden in the campus"},
];


class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/file">Images</Link>
        </li>
        <li>
        <Link to="/slideshow">Slideshow</Link>
        </li>
    	</ul>
      <hr/>

      <Switch>
      	<Route exact path="/" component={Home} />
        <Route path="/file" component={Images} />
        <Route path="/slideshow" component={Slideshow} />
        <Route path="/:id" component={NoMatch} />
      </Switch>
      </div>
    </Router>
    );
  }
}


class Home extends React.Component {
  render() {
    return (
      <>
      <h2>Home</h2>
      <div className="card d-inline-block m-2" style={{width:'100%'}}>
      <img src={"graph.jpg"} className="w-100"/>
      </div>
      </>
    );
  }
}


class Images extends React.Component {
  render() {
    return (
      <>
      <h2>Images</h2>
      <Header/>
      <Main />
      </>
    );
  }
}

class Header extends React.Component {
  render() {
      return (
        <header className="bg-warning">
        <h1 className="display-4 textcenter">CUHK Pictures</h1>
        </header>
      );
    }
}

class FileCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = { selected: -1 };
  }
  handleClick1(index) {
    if(this.state.selected!=index){
      this.setState({selected: index});
    }
  }
  handleClick2(index) {
    if(this.state.selected==index){
      this.setState({ selected: -1 });
    }
  }
  render(){
    return(
      <>
      <Router>
        <div>
        {data.map((file,index) =>
          <div key={index} onMouseOver={(e) => this.handleClick1(index,e)} onMouseOut={(e) => this.handleClick2(index,e)} className="card d-inline-block m-2" style={{width:this.state.selected==index ? 220 : 200}}>
          <img src={"images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title"><Link to={`/file/${index}`}>{file.filename}</Link></h6>
              <p className="card-text">Year: {file.year}</p>
            </div>
          </div>
        )
        }
        <Switch>
        	<Route path="/file/0" component={file0} />
          <Route path="/file/1" component={file1} />
          <Route path="/file/2" component={file2} />
          <Route path="/file/3" component={file3} />
          <Route path="/file/4" component={file4} />
        </Switch>
        </div>
      </Router>
      </>
    );
  }
}

class file0 extends React.Component {
  render(){
    var file=data[0];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"../images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
              <p className="cardtext">{file.remarks}</p>
            </div>
        </div>
      </>
    );
  }
}

class file1 extends React.Component {
  render(){
    var file=data[1];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"../images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
              <p className="cardtext">{file.remarks}</p>
            </div>
        </div>
      </>
    );
  }
}

class file2 extends React.Component {
  render(){
    var file=data[2];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"../images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
              <p className="cardtext">{file.remarks}</p>
            </div>
        </div>
      </>
    );
  }
}

class file3 extends React.Component {
  render(){
    var file=data[3];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"../images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
              <p className="cardtext">{file.remarks}</p>
            </div>
        </div>
      </>
    );
  }
}

class file4 extends React.Component {
  render(){
    var file=data[4];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"../images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
              <p className="cardtext">{file.remarks}</p>
            </div>
        </div>
      </>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main className="container">
      <FileCard/>
      </main>
    );
  }
}


class Slideshow extends React.Component {
  render() {
    return (
      <>
      <h2>Slideshow</h2>
      <Main2 />
      </>
    );
  }
}

class Slides extends React.Component{
  constructor(props) {
    super(props);
    this.state = { img: 0 , time: 0};
  }
  btn1() {
    clearInterval(interval);
    interval = setInterval(() => {
      if(this.state.img=='4'){
        this.setState({img:0, time:1000});
      }
      else{
        this.setState({img:this.state.img+1, time:1000});
      }
    }, 1000);
  }
  btn2() {
    clearInterval(interval);
    return () => clearInterval(interval);
    this.setState({img:this.state.img, time:0});
  }
  btn3() {
    clearInterval(interval);
    interval = setInterval(() => {
      if(this.state.img=='4'){
        this.setState({img:0, time:2000});
      }
      else{
        this.setState({img:this.state.img+1, time:2000});
      }
    }, 2000);
  }
  btn4() {
    clearInterval(interval);
    interval = setInterval(() => {
      if(this.state.img=='4'){
        this.setState({img:0, time:500});
      }
      else{
        this.setState({img:this.state.img+1, time:500});
      }
    }, 500);
  }
  render(){
    var file=data[this.state.img];
    return(
      <>
        <div className="card d-inline-block m-2" style={{width: '100%'}}>
          <img src={"images/"+file.filename} alt="{file.remarks}" className="w-100"/>
            <div className="card-body">
              <h6 className="card-title">{file.filename}</h6>
              <p className="card-text">Year: {file.year}</p>
            </div>
        </div>
          <button onClick={(e) => this.btn1()}>
            Start slideshow
          </button>
          <button onClick={(e) => this.btn2()}>
             Stop slideshow
          </button>
          <button onClick={(e) => this.btn3()}>
            Slower
          </button>
          <button onClick={(e) => this.btn4()}>
            Faster
          </button>
      </>
    );
  }
}

class Main2 extends React.Component {
  render() {
    return (
      <>
      <main className="container">
      <Slides/>
      </main>
      </>
    );
  }
}


function NoMatch() {
    const { id } = useParams();
    return (
      <h2>No Match for /{id}</h2>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));
