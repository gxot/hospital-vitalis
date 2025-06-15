-- Criar tabela paciente
CREATE TABLE IF NOT EXISTS paciente (
    id BIGSERIAL PRIMARY KEY,
    nome_paciente VARCHAR(255) NOT NULL,
    cpf_paciente VARCHAR(14) NOT NULL UNIQUE,
    email_paciente VARCHAR(255) NOT NULL UNIQUE,
    plano_de_saude_id BIGINT NOT NULL,
    data_nascimento DATE NOT NULL,

    -- Foreign Key para plano_saude
    CONSTRAINT fk_paciente_plano_saude
    FOREIGN KEY (plano_de_saude_id) REFERENCES plano_saude(id),

    -- Constraints adicionais para garantir integridade
    CONSTRAINT uk_paciente_cpf UNIQUE (cpf_paciente),
    CONSTRAINT uk_paciente_email UNIQUE (email_paciente),

    -- Validações básicas
    CONSTRAINT chk_cpf_format CHECK (LENGTH(cpf_paciente) >= 11),
    CONSTRAINT chk_email_format CHECK (email_paciente LIKE '%@%.%')
);