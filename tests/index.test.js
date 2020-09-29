const distributeApplications = require("../index")
const Server = require("../index").Server

const applications = [
    {
        cores: 2,
        memory: 400,
        disk: 200
    },
    {
        cores: 3,
        memory: 500,
        disk: 200
    }
]

const serverSpec = {
    cores: 8,
    memory: 8000,
    disk: 8000
}
const oneServer = new Server({cores:20,memory:4000,disk:8000}, 0, {cores: 0, memory: 10, disk: 10})
const result = [oneServer]
result[0].freeCores = 3
result[0].freeMemory = 7100
result[0].freeDisk = 7600
result[0].runningApplications = [0,1]

test("test main functionality simple", ()=> {
    expect(distributeApplications(applications, serverSpec)).toEqual(result)
})

const applicationsComplex = [
    {
        cores: 2,
        memory: 400,
        disk: 200
    },
    {
        cores: 3,
        memory: 500,
        disk: 200
    },
    {
        cores: 7,
        memory: 500,
        disk: 200
    },
    {
        cores: 3,
        memory: 500,
        disk: 200
    }
]

test("test main functionality simple", ()=> {
    console.log(distributeApplications(applicationsComplex, serverSpec))
})
