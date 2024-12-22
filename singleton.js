const Singleton = (function() {
    let instance;
  
    function createInstance() {
      return { message: "Hi I'm Ariel Joshua B" };
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();  // Immediately Invoked Function Expression (IIFE)
  