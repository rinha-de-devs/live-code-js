CREATE TABLE IF NOT EXISTS liveCode.cerveja (
  sku text PRIMARY KEY,
  nome text,
  tipo text,
  quantidade int
);

INSERT INTO liveCode.cerveja (sku, nome, tipo, quantidade) VALUES ('001', 'Stella', 'Pilsen', 10);
INSERT INTO liveCode.cerveja (sku, nome, tipo, quantidade) VALUES ('002', 'Heineken', 'Pilsen', 10);
INSERT INTO liveCode.cerveja (sku, nome, tipo, quantidade) VALUES ('003', 'Coruja', 'Larger', 10);
INSERT INTO liveCode.cerveja (sku, nome, tipo, quantidade) VALUES ('004', 'Bud', 'Pilsen', 10);