-- Inserir tipos de consulta
INSERT INTO tipo_consulta (nome)
VALUES
    ('Raio-X'),
    ('Ultrassom'),
    ('Consulta Clínica'),
    ('Exame de Sangue'),
    ('Tomografia'),
    ('Eletrocardiograma')
    ON CONFLICT (nome) DO NOTHING;

-- Inserir planos de saúde
INSERT INTO plano_saude (nome)
VALUES
    ('Unimed'),
    ('Amil'),
    ('Bradesco Saúde'),
    ('SulAmérica'),
    ('NotreDame Intermédica')
    ON CONFLICT (nome) DO NOTHING;

-- Inserir locais de atendimento
-- (Atenção: os IDs de tipo_consulta devem existir!)
INSERT INTO local_atendimento (nome, tipo_consulta_id)
VALUES
    ('Clínica Central', 1),         -- Raio-X
    ('Hospital São João', 2),       -- Ultrassom
    ('Unidade Básica de Saúde', 3), -- Consulta Clínica
    ('Laboratório Vida', 4),        -- Exame de Sangue
    ('Hospital Santa Luzia', 5),    -- Tomografia
    ('Clínica do Coração', 6)       -- Eletrocardiograma
    ON CONFLICT (nome) DO NOTHING;

-- Inserir médicos
-- (Atenção: os IDs de local_atendimento e tipo_consulta devem existir!)
INSERT INTO medico (nome_medico, tipo_consulta_id, local_atendimento_id)
VALUES
    -- Raio-X
    ('Dr. João Silva', 1, 1),
    ('Dra. Maria Oliveira', 1, 1),
    -- Ultrassom
    ('Dr. Carlos Souza', 2, 2),
    ('Dra. Ana Paula', 2, 2),
    -- Consulta Clínica
    ('Dr. Pedro Lima', 3, 3),
    ('Dra. Fernanda Costa', 3, 3),
    -- Exame de Sangue
    ('Dr. Rafael Mendes', 4, 4),
    ('Dra. Juliana Rocha', 4, 4),
    -- Tomografia
    ('Dr. Bruno Martins', 5, 5),
    ('Dra. Camila Torres', 5, 5),
    -- Eletrocardiograma
    ('Dr. Eduardo Ramos', 6, 6),
    ('Dra. Patrícia Alves', 6, 6)