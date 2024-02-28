import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var balance: Float = 100;
  stable var startTime = Time.now();

  //balance := 100;
  //startTime := Time.now();

  public func deposit (amount: Float) {
    balance += amount;
    Debug.print(debug_show(balance));
  };

  public func withdraw (amount: Float) {
    if ((balance - amount): Float >= 0) {
      balance -= amount;
      Debug.print(debug_show(balance));
    } else {
      Debug.print("Not sufficient balance");
    }
  };

  public query func checkBalance(): async Float {
    return balance;
  };

  public func compoundInterest() {
    var currentTime = Time.now();
    var timeElapsed = (currentTime - startTime) / 1000000000;
    balance := balance * (1.01 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  };
}