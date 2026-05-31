const element= React.createElement('h1',{},"hello world");
const div1= React.createElement('div',{},[element]);
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(div1);
