class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public sayHello() {
    console.log("Hello");
  }
}

const client = () => {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  singleton1 === singleton2
    ? console.log("Singleton works, both variables contain the same instance.")
    : console.log("Singleton failed, variables contain different instances.");

  singleton1.sayHello();
};

client();
