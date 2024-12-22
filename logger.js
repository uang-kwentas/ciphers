// Singleton Configuration Manager
const ConfigurationManager = (function () {
    let instance;

    function createInstance() {
        let configStore = []; // Store multiple key-value pairs as an array of objects

        return {
            addConfig: function (key, value) {
                configStore.push({ key, value }); // Add new configuration to the list
            },
            getAllConfigs: function () {
                return configStore; // Return all configurations
            },
            removeConfig: function () {
                configStore = []; // Clear all configurations
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Add configuration with validation
function addConfiguration() {
    const key = prompt("Enter the key:").trim();
    const value = prompt("Enter the value:").trim();

    if (!key || !value) {
        alert("Both key and value must be provided.");
        return; // Stop if input is invalid
    }

    const singletonInstance = ConfigurationManager.getInstance();
    singletonInstance.addConfig(key, value);  // Add to configuration store
    alert(`Configuration added: ${key} = ${value}`);
    
    // Hide configurations after adding
    document.getElementById('configList').style.display = 'none'; 
}

// View all configurations
function displayAllConfigurations() {
    const singletonInstance = ConfigurationManager.getInstance();
    const configs = singletonInstance.getAllConfigs();
    const configContainer = document.getElementById('configList');

    if (configs.length === 0) {
        configContainer.innerHTML = `<div class="alert alert-info">No Configurations Set. Add one!</div>`;
    } else {
        let listItems = "";
        configs.forEach(config => {
            listItems += `<li class="list-group-item">${config.key}: ${config.value}</li>`;
        });
        configContainer.innerHTML = `<ul class="list-group">${listItems}</ul>`;
    }
    // Show the configuration list
    configContainer.style.display = 'block';
}

// Remove all configurations
function removeConfiguration() {
    const singletonInstance = ConfigurationManager.getInstance();
    singletonInstance.removeConfig();
    alert("All configurations removed.");
    
    // Clear and hide the displayed list
    const configContainer = document.getElementById('configList');
    configContainer.innerHTML = "";
    configContainer.style.display = 'none';
}

// Event listeners for buttons
window.onload = function () {
    document.getElementById('addConfigBtn').onclick = addConfiguration;
    document.getElementById('viewAllBtn').onclick = displayAllConfigurations;
    document.getElementById('removeConfigBtn').onclick = removeConfiguration;
};
