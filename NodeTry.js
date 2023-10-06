class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
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
          // Si es menor se va al sub-árbol de la izquierda
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
  
    // Función para la búsqueda
    buscar(valor) {
      // Se inicia la búsqueda en la raíz
      let nodoActual = this.raiz;
  
      // Recorre el árbol hasta que se encuentre una coincidencia
      while (nodoActual !== null) {
        // Si encuentras el valor, retorna
        if (valor === nodoActual.valor) {
          return true;
        }
        // Si el valor es menor ve al sub-árbol izquierdo
        else if (valor < nodoActual.valor) {
          nodoActual = nodoActual.izquierda;
        }
        // Si el valor es mayor ve al sub-árbol derecho
        else {
          nodoActual = nodoActual.derecha;
        }
      }
      // Si no se encuentra el valor retorna falso
      return false;
    }
  
    // Método para encontrar todas las coincidencias
    encontrarCoincidencias(valor) {
      const coincidencias = [];
  
      // Función auxiliar para recorrer el árbol en orden
      function recorrerEnOrden(nodo) {
        if (nodo === null) {
          return;
        }
  
        // Recorre el subárbol izquierdo
        recorrerEnOrden(nodo.izquierda);
  
        // Compara el valor del nodo actual con el valor buscado
        if (nodo.valor === valor) {
          coincidencias.push(nodo.valor);
        }
  
        // Recorre el subárbol derecho
        recorrerEnOrden(nodo.derecha);
      }
  
      // Inicia el recorrido en orden desde la raíz
      recorrerEnOrden(this.raiz);
  
      return coincidencias;
    }
  }
  
  // Ejemplo de uso
  const binaryTree = new BinaryTree();
  binaryTree.insertar(5);
  binaryTree.insertar(2);
  binaryTree.insertar(3);
  binaryTree.insertar(8);
  
  const todasLasCoincidencias = binaryTree.encontrarCoincidencias(3);
  console.log(todasLasCoincidencias); // Output: [3]
  