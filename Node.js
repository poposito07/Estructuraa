// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Definimos el arbol
class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    // Función del árbol para agregar un valor
    insertar(valor) {
        // Crear nodo
        const nodoNuevo = new Nodo(valor);
        // Si el árbol está vacío
        if (this.raiz === null) {
            this.raiz = nodoNuevo;
            return true;
        } else {
            // Buscar la posición en el árbol si ya tiene datos
            let nodoActual = this.raiz;
            while (true) {
                // Si es menor se va al sub- árbol de la izquierda
                if (valor < nodoActual.valor) {
                    // Si el hijo de la izquierda está vacío se inserta un nodo
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    // Se mueve hacia el nodo de la izquierda
                    nodoActual = nodoActual.izquierda;
                }
                // Si es mayor o igual te vas a la derecha
                else {
                    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    // Te mueves al nodo de la derecha
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    buscar(valor) {
        // Función auxiliar recursiva para buscar en el árbol
        function buscarRecursivo(nodo, valor) {
            if (nodo === null) {
                return []; // Si el nodo es nulo, retornamos un arreglo vacío
            }

            if (valor === nodo.valor) {
                return [nodo.valor]; // Si encontramos una coincidencia, la agregamos al arreglo de coincidencias
            } else if (valor < nodo.valor) {
                return buscarRecursivo(nodo.izquierda, valor); // Buscamos en el subárbol izquierdo
            } else {
                return buscarRecursivo(nodo.derecha, valor); // Buscamos en el subárbol derecho
            }
        }

        // Llamamos a la función recursiva para iniciar la búsqueda desde la raíz
        return buscarRecursivo(this.raiz, valor);
    }
}

// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(5);
binaryTree.insertar(2);
binaryTree.insertar(3);
binaryTree.insertar(8);

//Método buscar y notificar si encuentra primera coincidencia
console.log(binaryTree.buscar(8)); // Output: [8]
console.log(binaryTree.buscar(3)); // Output: [3]
console.log(binaryTree.buscar(4)); // Output: []
