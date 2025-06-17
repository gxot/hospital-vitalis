import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio';
import Agendamento from './pages/agendamento';
import Login from './pages/login';
import Sobre from './pages/sobre';
import AlterarDadosMedico from './pages/alterardadosmedico';
import AlterarDadosPaciente from './pages/alterardadospaciente';
import AlterarSenha from './pages/alterarsenha';
import ConsultasMarcadas from './pages/meusagendamentos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/meusagendamentos" element={<ConsultasMarcadas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/alterardadosmedico" element={<AlterarDadosMedico />} />
        <Route path="/alterardadospaciente" element={<AlterarDadosPaciente />} />
        <Route path="/alterarsenha" element={<AlterarSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
