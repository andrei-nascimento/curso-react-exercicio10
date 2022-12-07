import { useState } from 'react';

function App() {
  const [codigo, setCodigo] = useState('');

  return (
    <div className="App">
      <textarea
      placeholder="Digite e veja o resultado"
      rows={15}
      value={codigo}
      onChange={(e) => setCodigo(e.target.value)}>
      </textarea>
      
      <div className="mirror">
        <h1>Código Transformado</h1>
        {codigo.toUpperCase()}
      </div>
    </div >
  );
}

export default App;
