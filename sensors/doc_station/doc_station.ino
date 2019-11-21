void setup() {
  Serial.begin(2400);
  Serial.print("Hello");
  pinMode(2, INPUT);
}
void loop() {
  boolean sensor1 = digitalRead(2);
  Serial.print("Sensor1: ");Serial.println(sensor1);
 }
