
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}


class Turma {
    constructor() {
        this.alunos = [];
    }

    
    adicionarAluno(nome, nota) {
        const aluno = new Aluno(nome, nota);
        this.alunos.push(aluno);
    }

    
    filtrarAprovados() {
        return this.alunos.filter(aluno => aluno.nota >= 6);
    }
}

const turma = new Turma();
turma.adicionarAluno('João', 7);
turma.adicionarAluno('Maria', 5);
turma.adicionarAluno('Pedro', 8);
turma.adicionarAluno('Ana', 4);
turma.adicionarAluno('Lucas', 6);


const aprovados = turma.filtrarAprovados();
console.log(aprovados);