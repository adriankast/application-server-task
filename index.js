/**
 * Map existing applications to new Server requirements
 * @param {array} applications Array of type RessourceSpecification
 * @param {object} newServerSpecification Specification of type RessourceSpecification
 */
function distributeApplications(applications, newServerSpecification) {

    const newServerStack = []
    applications.forEach( (application, applicationIndex) => {

        const freeServerIndex = newServerStack.findIndex( server => (
            server.freeCores >= application.cores &&
            server.freeMemory >= application.memory &&
            server.freeDisk >= application.disk
        ))

        if (freeServerIndex !== -1) {
            newServerStack[freeServerIndex].addApplicationToServer(application, applicationIndex)
        }
        else {
            const serverToAdd = new Server(newServerSpecification, applicationIndex, application)
            newServerStack.push(serverToAdd)
        }
    })

    return newServerStack
}

/**
 * decrease the resources of a new Server by the application requirements
 * and add applicationIndex to the array
 */
function addApplicationToServer(application, applicationIndex) {
    this.freeCores -= application.cores
    this.freeMemory -= application.memory
    this.freeDisk -= application.disk
    this.runningApplications.push(applicationIndex)
}

/**
 * new Server with the first application
 */
function Server(serverSpecification, applicationIndex, application) {
    this.freeCores = serverSpecification.cores
    this.freeMemory = serverSpecification.memory
    this.freeDisk = serverSpecification.disk
    this.runningApplications = []
    this.addApplicationToServer = addApplicationToServer

    this.addApplicationToServer(application, applicationIndex)
}

module.exports = {distributeApplications, addApplicationToServer, Server}
