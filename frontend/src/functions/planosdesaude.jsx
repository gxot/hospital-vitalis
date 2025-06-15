import { useEffect, useState } from "react";

export default function PlanoSaudeSelect() {
  const [planos, setPlanos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sempre limpe o estado ao iniciar a requisição
    setLoading(true);
    setError(null);

    fetch("http://localhost:8080/planosdesaude/listar_planos_de_saude")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar planos");
        }
        return response.json();
      })
      .then((data) => {
        // Garante que data seja um array
        setPlanos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
        setError(error.message || "Erro desconhecido");
        setLoading(false);
      });
  }, []);

  return (
    <div className="auth-form-group">
      <label className="form-label" htmlFor="planoSaude">
        Plano de Saúde *
      </label>
      {loading ? (
        <div>Carregando planos...</div>
      ) : error ? (
        <div>
          <select
            className="form-select"
            id="planoSaude"
            name="planoSaude"
            defaultValue=""
            required
          >
            <option disabled value="">
              Erro ao carregar planos
            </option>
            <option value="particular">Particular</option>
          </select>
          <div style={{ color: "red", fontSize: "14px" }}>
            Erro: {error}
          </div>
        </div>
      ) : (
        <select
          className="form-select"
          id="planoSaude"
          name="planoSaude"
          defaultValue=""
          required
        >
          <option disabled value="">
            Selecione o Plano de Saúde
          </option>
          {planos.length === 0 ? (
            <option disabled value="">
              Nenhum plano disponível
            </option>
          ) : (
            planos.map((plano, index) => (
              <option key={plano.id || index} value={plano.nome || plano}>
                {plano.nome || plano}
              </option>
            ))
          )}
        </select>
      )}
    </div>
  );
}