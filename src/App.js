import { useState } from 'react';

function App() {
  const [codigo, setCodigo] = useState('');

  return (
    <div className="App">
      <textarea
      placeholder="Digite aí"
      rows={15}
      value={codigo}
      onChange={(e) => setCodigo(e.target.value)}>
      </textarea>
      
      <div className="mirror">
        <h1>Código</h1>
        {codigo.toUpperCase()}
      </div>
    </div >
  );
}

export default App;
