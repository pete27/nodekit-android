
function setTimeout(callback, ms) {
    
    return NodeKitTimer.setTimeoutSync(callback, ms)
}

function clearTimeout(indentifier) {
    
    NodeKitTimer.clearTimeoutSync(indentifier)
}

function setInterval(callback, ms) {
    
    return NodeKitTimer.setIntervalSync(callback, ms)
}