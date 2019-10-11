(function() {
    /**
     * Utility functions
     */
    var namesMap = {};
    function filterEntries(searchTerm) {
        var performaneEntries = performance.getEntries();
        return performaneEntries.filter(function(item) {
            return item.initiatorType === searchTerm;
        });
    }

    /**
     * Removed duplicates for array of objects
     * @param {Object[]} arr 
     */
    function removeDuplicates(arr) {
        return arr.filter(function(item) {
            if(!namesMap[item.name]) {
                namesMap[item.name] = true;
                return true;
            }

            else {
                return false;
            }
        });

    }
    /**
     *
     * @param {string} tag
     * @param {string} css
     * @param {string} innerText (optional)
     */
    function createElement(tag, css, innerText) {
        var element = document.createElement(tag);
        element.style.cssText = css;
        if (innerText) {
            element.innerText = innerText;
        }
        return element;
    }
    /*******************************************/
    var networkTable = {};

    networkTable.table = [];

    /**
     * Add performance entries info
     * @param {HTMLelement} scriptName
     * @param {HTMLelement} scriptDuration
     */
    networkTable.addScriptsInfo = function(scriptName, scriptDuration) {
        this.table = removeDuplicates(this.table);
        this.table.forEach(function(item) {
            nameDiv = createElement(
                'div',
                'overflow-x:auto;height:20px;padding:2px',
                item.name
            );
            nameDuration = createElement(
                'div',
                'overflow-x:auto;height:20px;padding:2px',
                item.duration.toFixed(2)
            );
            scriptName.appendChild(nameDiv);
            scriptDuration.appendChild(nameDuration);
        });
    };
    /**
     * Creating the network table on user screen
     * */
    networkTable.makePlate = function() {
        if (!document.getElementsByClassName('table-main')[0]) {
            var table = createElement(
                'div',
                'height:200px;width:300px;padding:2px 2px 2px 2px;color:lime;background-color:black;overflow-y:auto;border: 1px solid lime;border-radius:4px;'
            );
            table.classList.add('table-main');
            table.innerHTML +=
                '<div style="color:lime;width:100%;text-align:right;cursor:pointer" onclick="closeNetworkTable()">X</div><div style="display:flex;text-align:center;"> <div class="script-name" style="width:70%;height:auto;"><div>Script Name</div></div><div class="script-duration" style="width:30%;height:auto;"><div>Duration</div></div> <div>';
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(table);
        }

        var scriptName = document.getElementsByClassName('script-name')[0];
        var scriptDuration = document.getElementsByClassName(
            'script-duration'
        )[0];
        this.addScriptsInfo(scriptName, scriptDuration);
    };

    /**
     * Returns performance entries (via browser API). continously polls for new entries
     */
    networkTable.getPerformanceEntries = function() {
        var scriptEntries = filterEntries('script'),
            newEntry = {};
        scriptEntries.forEach(function(item) {
            newEntry.name = item.name;
            newEntry.duration = item.duration;
            networkTable.table.push(newEntry);
            newEntry = {};
        });

        //This would continously poll for performance entries
        window.networkIntervalId = setInterval(function() {
            var scriptEntries = filterEntries('script'),
                newEntry = {};
            
            scriptEntries.forEach(function(item) {
                newEntry.name = item.name;
                newEntry.duration = item.duration;
                networkTable.table.push(newEntry);
                newEntry = {};
            });
            networkTable.makePlate();
        }, 5000);

        networkTable.makePlate();
    };

    window.closeNetworkTable = function() {
        document.getElementsByClassName('table-main')[0].style.display = 'none';
        // clearing the interval attached earlier
        clearInterval(window.networkIntervalId);
    };

    networkTable.getPerformanceEntries();
})();
