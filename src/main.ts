import './style.css';

import { pacientes } from './modelo';
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  hayPacientesDePedriatria,
  cuentaPacientesPorEspecialidad,
} from './motor';

// Mostrar por consola paciences pediatría
console.log({ pacientesAsignadosAPediatria: obtenPacientesAsignadosAPediatria });

// Mostrar por consola paciences pediatría y menor de 10 años
console.log({
  pacientesAsignadosAPediatriaMenos10Anios: obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
});

// Mostrar por consola activación protocolo de urgencia
console.log({ activoProtocoloDeUgencia: activarProtocoloUrgencia });

// Mostrar por consola paciences reasignados a médico de familia
console.log({
  pacientesReasignadosAMedicoFamilia: reasignaPacientesAMedicoFamilia,
});

// Mostrar por consola si hay o no pacientes asignados a pediatría
console.log({ hayPacientesAsignadosAPediatria: hayPacientesDePedriatria });

// Mostrar por consola el número de pacientes por especialidad
console.log({ numPacientesPorEspecialidad: cuentaPacientesPorEspecialidad(pacientes) });
