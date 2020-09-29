const Server = require("../index").Server

const serverSpec = {
    cores: 5,
    memory: 8000,
    disk: 500
}
const application = {
    cores: 2,
    memory: 800,
    disk: 200
}
const testServer = new Server(serverSpec, 1, application)

const result = {
    freeCores: 3,
    freeMemory: 7200,
    freeDisk: 300,
    runningApplications: [1]
}

test("test Server constructor", () => {
    expect(testServer).toMatchObject(result)
})
