module.exports.incomming = {
  ROOM: {
    CREATE: "CREATE_ROOM",
    JOIN: "JOIN_ROOM",
    REMOVE: "REMOVE_MEMBER",
    ACCEPT_JOIN_REQ: "ACCEPT_JOIN_ROOM_REQ",
    USER_DISCONNECTED: "USER_DISCONNECTED",
  },
};

module.exports.outgoing = {
  CONNECTION_SUCCESS: "CONNECTED",
  ROOM: {
    CREATE_ERROR: "ROOM_CREATE_ERROR",
    JOIN_ERROR: "ROOM_JOIN_ERROR",
    CREATED: "CREATED_ROOM",
    JOIN_REQ: "JOIN_ROOM_REQ",
    JOINED: "JOINED_ROOM",
    NEW_MEMBER: "NEW_MEMBER",
    MEMBER_LEFT: "MEMBER_LEFT",
    MEMBER_GOT_REMOVED: "OTHER_GOT_REMOVED",
    YOU_GOT_REMOVED: "SELF_GOT_REMOVED",
    DESTROYED: "DESTROYED_ROOM",
  },
};
