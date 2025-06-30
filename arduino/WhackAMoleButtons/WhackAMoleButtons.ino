const int NUM_BUTTONS = 6;
const int buttonPins[NUM_BUTTONS] = {2, 3, 4, 5, 6, 7}; // Adjust pins as needed
int buttonStates[NUM_BUTTONS] = {0};
int lastButtonStates[NUM_BUTTONS] = {0};

void setup() {
  Serial.begin(9600);
  
  // Set all button pins as inputs with pull-up resistors
  for(int i = 0; i < NUM_BUTTONS; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
  }
}

void loop() {
  // Check each button
  for(int i = 0; i < NUM_BUTTONS; i++) {
    buttonStates[i] = digitalRead(buttonPins[i]);
    
    // If button is pressed (LOW with pull-up resistors)
    if(buttonStates[i] == LOW && lastButtonStates[i] == HIGH) {
      // Send button number (1-6) over serial
      Serial.println(i + 1);
      delay(50); // Simple debounce
    }
    
    lastButtonStates[i] = buttonStates[i];
  }
}