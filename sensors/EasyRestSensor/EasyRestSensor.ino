

#include <ESP8266WiFi.h>  

const char* tName = "Table1";                       //Тут вписувати імя столу

const int nos = 2;                                  //Тут вписувати кількість граней стола

const int sec = 10;                                  //Тут вписувати кількість секунд до зміни стану/2

void setup(void)
{
  Serial.begin(115200);               
  pinMode(5, INPUT);  
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.println();

  
WiFi.begin("HUAWEI-WC8BW9","33843951");
Serial.print("connecting ");
while(WiFi.status()!=WL_CONNECTED)
{
delay(500);
Serial.print(".");
}
Serial.println("connected");
Serial.println(WiFi.localIP()); //вывод на монитор порта динамического (выданного WiFi маршрутизатором) IP адреса esp8266
Serial.print(WiFi.RSSI()); //вывод на монитор уровня WiFi сигнала в децибеллах 


/*Serial.println();
IPAddress device_ip (172, 17, 18, 3);
IPAddress dns_ip ( 8, 8, 8, 8);
IPAddress gateway_ip (172, 17, 18, 1);
IPAddress subnet_mask(255, 255, 255, 240);
WiFi.config(device_ip, dns_ip, gateway_ip, subnet_mask);// прописывает статический IP-адрес, адрес DNS, шлюза и маску подсети
// 
WiFi.begin("HUAWEI-WC8BW9","33843951"); 
Serial.print("connecting "); 
while(WiFi.status()!=WL_CONNECTED) { 
delay(500); 
Serial.print("."); } 
Serial.println("connected"); */

Serial.println(WiFi.localIP()); //вывод на монитор порта динамического (выданного WiFi маршрутизатором) IP адреса esp8266 
Serial.print(WiFi.RSSI()); //вывод на монитор уровня WiFi сигнала в децибеллах   


}
boolean tableIsFree;
int tFree; 
void loop() {          
 boolean x = 0, y = 0, z = 0, q = 0 ;
                                    
  digitalWrite(D8, HIGH);
  digitalWrite(D8, LOW);
  switch (nos){
   case 4: 
   x = digitalRead(D0);
   y = digitalRead(D1);
   z = digitalRead(D2);
   q = digitalRead(D5);
  
   Serial.print("D0 датчик - ");
   Serial.print(x);
   Serial.print("  ||  D1 датчик - ");
   Serial.print(y);
   Serial.print("  ||  D2 датчик - ");
   Serial.print(z);
   Serial.print("  ||  D5 датчик - ");
   Serial.println(q);
   if (x or y or z or q){
     digitalWrite(LED_BUILTIN, LOW);
     
     if(tFree > -sec){
      tFree = tFree - 1;
     }
   }else{
     digitalWrite(LED_BUILTIN, HIGH);
     if(tFree < sec){
      tFree = tFree + 1;
     }
   }
   
   break;
   
   case 3:
   x = digitalRead(D0);
   y = digitalRead(D1);
   z = digitalRead(D2);
  
   Serial.print("D0 датчик - ");
   Serial.print(x);
   Serial.print("  ||  D1 датчик - ");
   Serial.print(y);
   Serial.print("  ||  D2 датчик - ");
   Serial.println(z);
   if (x or y or z){
     digitalWrite(LED_BUILTIN, LOW);
    
     if(tFree > -sec){
      tFree = tFree - 1;
     }
   }else{
     digitalWrite(LED_BUILTIN, HIGH);
     if(tFree < sec){
      tFree = tFree + 1;
     }
   }
   
   break;
   
   case 2:
   x = digitalRead(D0);
   y = digitalRead(D1);
  
   Serial.print("D0 датчик - ");
   Serial.print(x);
   Serial.print("  ||  D1 датчик - ");
   Serial.println(y);
   if (x or y){
     digitalWrite(LED_BUILTIN, LOW);

     if(tFree > -sec){
      tFree = tFree - 1;
     }
   }else{
     digitalWrite(LED_BUILTIN, HIGH);
     if(tFree < sec){
      tFree = tFree + 1;
     }
   }
   
   break;
   
   case 1:
   x = digitalRead(D0);
  
   Serial.print("D0 датчик - ");
   Serial.println(x);
   if (x){
     digitalWrite(LED_BUILTIN, LOW);
    
     if(tFree > -sec){
      tFree = tFree - 1;
     }
   }else{
     digitalWrite(LED_BUILTIN, HIGH);
     if(tFree < sec){
      tFree = tFree + 1;
     }
   }
   
   break;                 
  }
  Serial.print("                                                                                 Якість звязку -- ");
  Serial.println(WiFi.RSSI());
  Serial.print("counter = ");
  Serial.println(tFree);
  
  switch (tFree){
  case -10:
   tableIsFree = false;
   break;
  case 10:
   tableIsFree = true;
   break;
  default:
  break;
  }
  if(tableIsFree ){
  Serial.println(" ________________________________________ СТІЛ ВІЛЬНИЙ !!!! ________________________________________");
  }
  else{ 
  Serial.println(" __________________________________________ СТІЛ ЗАЙНЯТИЙ __________________________________________");
  }
  Serial.println();
  Serial.println();
  delay (1000);
}
