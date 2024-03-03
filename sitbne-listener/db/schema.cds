namespace lochlouw.sitbne;

entity Events {
    key ID        : UUID;
        event     : String(128);
        createdAt : Timestamp @cds.on.insert: $now;
        text      : String;
}
