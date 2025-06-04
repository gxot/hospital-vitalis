-- Inserir tipos de consulta
INSERT INTO tipo_consulta (nome)
VALUES ('Raio-X'),
       ('Ultrassom'),
       ('Consulta Clínica')
    ON CONFLICT (nome) DO NOTHING;

-- Inserir planos de saúde
INSERT INTO plano_saude (nome)
VALUES ('Unimed'),
       ('Amil'),
       ('Bradesco Saúde')
    ON CONFLICT (nome) DO NOTHING;

-- Inserir locais de atendimento
INSERT INTO local_atendimento (nome)
VALUES ('Clínica Central'),
       ('Hospital São João'),
       ('Unidade Básica de Saúde')
    ON CONFLICT (nome) DO NOTHING;

-- Inserir médicos
INSERT INTO medico (nome, tipo_consulta_id, local_atendimento_id)
VALUES ('Dr. João Silva', 1, 1),
       ('Dra. Maria Souza', 2, 2),
       ('Dr. Carlos Pereira', 3, 3);