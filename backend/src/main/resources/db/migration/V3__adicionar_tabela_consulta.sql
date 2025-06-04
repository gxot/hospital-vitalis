-- Criar tabela consulta (será criada pelo JPA, mas definindo constraints)
CREATE TABLE IF NOT EXISTS consulta (
    id BIGSERIAL PRIMARY KEY,
    tipo_consulta_id INTEGER NOT NULL,
    local_atendimento_id INTEGER NOT NULL,
    data_consulta DATE NOT NULL,

    CONSTRAINT fk_consulta_tipo_consulta
    FOREIGN KEY (tipo_consulta_id) REFERENCES tipo_consulta(id),

    CONSTRAINT fk_consulta_local_atendimento
    FOREIGN KEY (local_atendimento_id) REFERENCES local_atendimento(id)
);