class Engine2_0 {
  simpleInterface() {
    console.log("Engine 2.0 - tr-tr-tr");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("Engine V8! - wroom wroom!");
  }
}

class EngineV8Adapter {
  engine: EngineV8;

  constructor(engine: EngineV8) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine: any) {
    engine.simpleInterface();
  }
}

// Engine 2.0
const toyotaCamry = new Auto();
const ecoEngine = new Engine2_0();

toyotaCamry.startEngine(ecoEngine);

// V8 with adapter
const mercedesC63 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

mercedesC63.startEngine(engineAdapter);

// Engine V8 without adapter
const car3 = new Auto();
const engine = new EngineV8();

car3.startEngine(engine); // ERROR
