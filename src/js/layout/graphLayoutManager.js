class connection {
    constructor(node1, node2) {
        this.nodes = {node1:node1, node2:node2}
        this.direction = undefined
        this.weight = undefined
    }

    set weight(value) {
        this.weight = value
    }

    set direction()
}

class graphLayoutManager {
    constructor() {
        this.nodes = {}
        this.connections = {}
    }

    createNode(ID) {

    }

    deleteNode(ID) {

    }

    createConnection(ID, node1, node2) {

    }

    deleteConnection(ID) {

    }

    changeConnectionDirection(ID, direction) {

    }

    changeConnectionWeight(ID, direction) {

    }
}