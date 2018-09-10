"target": {
    "connection":{
        ${1|ct-connection-qion,ct-connection-jdbc|}
    },
    ${2|ct-deletion-soft,ct-deletion-hard|},
    ct-savemode-cdc,
    "isCloudEntity":true,
    "primaryKeys":["id"]
}