"target": {
    "plugin":${1|ct-target-plugin-|""},
    "connection":{
        ct-connection-
    },
    ${2|ct-deletion-soft,ct-deletion-hard|},
    ct-savemode-cdc,
    "isCloudEntity":${3|true,false|},
    "primaryKeys":[""]
}