#include <iostream>
#include <string>

using namespace std;

class Car {
    protected:
        string model;
        string brand;
        bool isEngineOn;
        int currentSpeed;

    public:
        Car(string b, string m){
            this->brand = b;
            this->model = m;
            isEngineOn = false;
            currentSpeed = 0;
        }

        // Common methods for All cars.
        void startEngine(){
            isEngineOn = true;
            cout << brand << " " << model << "  : Engine start with a roar!" << endl;
        }
        void accelerate() {
            if(!isEngineOn){
                cout << brand << " " << model << "  : Engine is off! Cannot accelerate." << endl;
            }

            currentSpeed +=20;
            cout << brand << " " << model << "  : Accelerating to " << currentSpeed << "km/h" << endl;
        }

        void brake() {
            currentSpeed -= 20;
            if(currentSpeed < 0) {
                currentSpeed = 0;
            }
            cout << brand << " " << model << "  : Braking! Speed is now " << currentSpeed << "km/h" << endl;
        }

        void stopEngine() {
           isEngineOn = false;
           currentSpeed = 0;
           cout << brand << " " << model << "  : Engine turned off." << endl;
        }

        virtual ~Car(){}
};

class ManualCar : public Car { // Inherit from Car
    private:
        int currentGear; // specific to manual car.


    public:
        ManualCar(string b, string m) : Car (b,m) {
            currentGear = 0; // neutral.
        }


        void shiftGear(int gear) {
            if(!isEngineOn) {
                cout << brand << " " << model << " : Engine is off! Cannot shift gear." << endl;
                return;
            }

            currentGear = gear;
            cout << brand << " " << model << "  : Shifted to gear " << currentGear << endl;
        }
};


class ElectricCar : public Car {

    private:
        int batteryLevel;
    
    public:
        ElectricCar(string b, string m) : Car(b,m) {
            batteryLevel = 100;
        }

        void chargeBattery() {
            batteryLevel = 100;
            cout << brand << " " << model << "  : Battery fully charged!" << endl;
        }

};
int main() {

    ManualCar* manualCar =  new ManualCar("Hyundai", "Venue");
    manualCar->startEngine();
    manualCar->shiftGear(1);
    manualCar->accelerate();
    manualCar->shiftGear(2);
    manualCar->accelerate();
    manualCar->brake();
    manualCar->stopEngine();

    delete manualCar;
    
    cout << "--------------------------" << endl;
    
    
    ElectricCar* electricCar  = new ElectricCar("Mahindra", "XEV 9e");
    electricCar->chargeBattery();
    electricCar->startEngine();
    electricCar->accelerate();
    electricCar->brake();
    electricCar->stopEngine();
    
    delete electricCar;

    cout << "--------------------------" << endl;

    return 0;
};