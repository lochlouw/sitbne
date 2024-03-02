namespace lochlouw.sitbne.soap.sayhello;

service SayHello @(path : '/say-hello') {
    entity SayHello {
        firstName : String(128);
        greeting : String(128);
    }
}