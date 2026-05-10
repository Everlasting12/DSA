#include <iostream>
#include <string>


using namespace std;

// Base Car class
class Car {
    protected:
        string brand;
        string model;
        bool isEngineOn;
        int currentSpeed;

    public:
        Car(string b, string m){
            this->brand = b;
            this->model = m;
            this->isEngineOn = false;
            this->currentSpeed = 0;
        }


        // Common methods for all cars.
        void startEngine(){
            isEngineOn = true;
            cout << brand << " " << model << " : Engine started." << endl;
        }

        void stopEngine() {
            isEngineOn = false;
            currentSpeed = 0;
            cout << brand << " " << model << " : Engine turned off." << endl;
        }

        virtual void accelerate() = 0; // Abstract method for Dynamic Polymorphism
        virtual void accelerate(int speed) = 0; // Abstract method for Static Polymorphism
        virtual void brake() = 0; // Abstract method for Dynamic Polymorphism
        virtual ~Car() {} // Virtual destructor
};

class ManualCar : public Car {
    private:
        int currentGear;

    public:
        ManualCar(string b, string m) : Car( b, m) {
            this->currentGear = 0; // neutral
        }

        void shiftGear(int gear) {
            currentGear = gear;
            cout << brand << " " << model << " : Shifted to gear " << currentGear << endl;
        }

        void accelerate(){
            if(!isEngineOn){
                cout <<  brand << " " << model << " : Cannot accelerate! Engine is off." << endl;
                return;
            }

            currentSpeed+=20;
            cout << brand << " " << model << " : Accelerating to " << currentSpeed <<  " mk/h" <<endl;
        }

        void accelerate(int speed) {
            if(!isEngineOn) {
                cout << brand << " " << model << " : Cannot accelerate! Engine is off." << endl;
                return;
            }

            currentSpeed +=speed;
            cout << brand << " " << model << " : Accelerating to " << currentSpeed << " km/h" << endl;
        }

        void brake(){
            currentSpeed-=20;
            if(currentSpeed < 0) currentSpeed = 0;
            cout << brand << " " << model << " : Braking! Speed is now " << currentSpeed << " km/h"  << endl;
        }
};

class ElectriCar : public Car {
    private:
        int currentBatteryLevel;

    public:
        ElectriCar(string b, string m) : Car(b, m){
            this->currentBatteryLevel = 100;
        }

        void chargeBatter() {
            currentBatteryLevel = 100;
            cout << brand <<  " " << model << " : Battery fully charged!" << endl;
        }


        void accelerate() {
            if(!isEngineOn)  {
                cout << brand << " " << model << " : Cannot accelerate! Engine is off." << endl;
                return;
            }

            currentBatteryLevel -= 10;
            currentSpeed += 15;
            cout << brand << " " << model << " : Accelerating to " << currentSpeed << "km/h. Battery at " << currentBatteryLevel << " %" << endl;
        }

        void accelerate(int speed){
            if(!isEngineOn) {
                cout << brand << "" << model << " : Cannot accelerate! Engine is off."<< endl;
                return;
            }

            currentSpeed+=speed;
            currentBatteryLevel -= 15;
            cout << brand << " " << model << " : Accelerating to " << currentSpeed << "km/h. Battery at " << currentBatteryLevel << " %" << endl;
        }

        void brake() {
            currentSpeed -= 10;
            if( currentSpeed < 0) currentSpeed = 0;
            cout << brand << " " << model << " : Regenerative braking! Speed is now at " << currentSpeed << " km/h. Battery is at " << currentBatteryLevel << " %." << endl;
        }
};  


int main() {

    Car* manualCar =  new ManualCar("Suzuki", "WagonR");
    manualCar->startEngine();
    manualCar->accelerate();
    manualCar->accelerate();
    manualCar->accelerate(50);
    manualCar->brake();
    manualCar->brake();
    manualCar->brake();
    manualCar->stopEngine();

    cout << "----------------------------------" << endl;

    Car* electriCar = new ElectriCar("Tesla", "Model S");
    electriCar->startEngine();
    electriCar->accelerate();
    electriCar->accelerate(40);
    electriCar->accelerate();
    electriCar->brake();
    electriCar->brake();
    electriCar->brake();
    electriCar->brake();
    electriCar->stopEngine();


    // Cleanup
    delete manualCar;
    delete electriCar;

    return 0;
}