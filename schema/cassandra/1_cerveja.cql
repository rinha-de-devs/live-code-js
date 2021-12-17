CREATE TABLE IF NOT EXISTS liveCode.cerveja (
  id UUID PRIMARY KEY,
  nome text,
  tipo text,
  quantidade int
);

INSERT INTO liveCode.cerveja (id, nome, tipo, quantidade) VALUES (cd6f759f-4a5e-4883-9fa5-40d798446fab, 'Stella', 'Pilsen', 10);
INSERT INTO liveCode.cerveja (id, nome, tipo, quantidade) VALUES (9d77995e-e242-4268-bbc7-20a6d4e9012b, 'Heineken', 'Pilsen', 10);
INSERT INTO liveCode.cerveja (id, nome, tipo, quantidade) VALUES (f69db397-0a0c-4081-bf90-186a829314c6, 'Coruja', 'Larger', 10);
INSERT INTO liveCode.cerveja (id, nome, tipo, quantidade) VALUES (3659d368-874d-4e44-911c-89199e093c5b, 'Bud', 'Pilsen', 10);