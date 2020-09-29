const addApplicationToServer = require("../index").addApplicationToServer
const testObject = {
    freeCores: 5,
    freeMemory: 2000,
    freeDisk: 500,
    addApplicationToServer,
    runningApplications: [0]
}
const decreaseObject = {
    cores: 1,
    memory: 100,
    disk: 100
}
const resultObject = {
    freeCores: 4,
    freeMemory: 1900,
    freeDisk: 400,
    addApplicationToServer,
    runningApplications: [0,1]
}

test("test the decrease function", () => {
    testObject.addApplicationToServer(decreaseObject, 1)

    expect(testObject).toEqual(resultObject)
})
