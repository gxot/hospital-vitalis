-- Tabela: tipo_consulta
CREATE TABLE IF NOT EXISTS tipo_consulta
(
    id   BIGSERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela: plano_saude
CREATE TABLE IF NOT EXISTS plano_saude
(
    id   BIGSERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela: local_atendimento
CREATE TABLE IF NOT EXISTS local_atendimento
(
    id                BIGSERIAL    PRIMARY KEY,
    nome              VARCHAR(100) NOT NULL UNIQUE,
    tipo_consulta_id  BIGINT NOT NULL,

    CONSTRAINT fk_local_atendimento_tipo_consulta FOREIGN KEY (tipo_consulta_id) REFERENCES tipo_consulta (id)
);

-- Tabela: medico
CREATE TABLE IF NOT EXISTS medico
(
    id                   BIGSERIAL PRIMARY KEY,
    nome_medico          VARCHAR(100) NOT NULL,
    tipo_consulta_id     BIGINT     NOT NULL,
    local_atendimento_id BIGINT      NOT NULL,
    CONSTRAINT fk_medico_tipo_consulta FOREIGN KEY (tipo_consulta_id) REFERENCES tipo_consulta (id),
    CONSTRAINT fk_medico_local_atendimento FOREIGN KEY (local_atendimento_id) REFERENCES local_atendimento (id)
);
