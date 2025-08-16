const { Kafka } = require('kafkajs');

async function run() {
  const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092'], // Broker address
  });

  const producer = kafka.producer();
  await producer.connect();

  for (let i = 0; i < 5; i++) {
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: `Hello Kafka ${i}` },
      ],
    });
    console.log(`✅ Sent message ${i}`);
  }

  await producer.disconnect();
}

run().catch(console.error);
