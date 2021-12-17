CREATE KEYSPACE IF NOT EXISTS liveCode
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };