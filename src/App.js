import logo from './assets/snowflake_logo_color.svg';

function App() {
  return (
    <div className="App" class="bg-teal-500 md:bg-red-500 lg:bg-teal-500">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UnderReact</h1>
        <p>Yes, I look ugly as fuck... for now</p>
        <p>My background color will be red at the md breakpoint, but teal at every other breakpoint</p>
      </header>
    </div>
  );
}

export default App;
