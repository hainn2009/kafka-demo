Đây là ứng dụng demo chạy kafka
Bắt đầu bằng
docker-compose up -d
docker-compose down

- Test
docker exec -it kafka kafka-topics --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
test
