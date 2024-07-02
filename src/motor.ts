import { Pacientes, NumeroPacientesPorEspecialidad, pacientes } from './modelo';

export const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
  (paciente: Pacientes): boolean => paciente.especialidad === 'Pediatra'
);

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] =
  obtenPacientesAsignadosAPediatria.filter((paciente: Pacientes): boolean => paciente.edad < 10);

export const activarProtocoloUrgencia: boolean = pacientes.some(
  (paciente: Pacientes): boolean => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);

export const reasignaPacientesAMedicoFamilia: Pacientes[] = JSON.parse(
  JSON.stringify(pacientes)
).map((paciente: Pacientes) => {
  let nuevaEspecialidad =
    paciente.especialidad === 'Pediatra'
      ? (paciente.especialidad = 'Medico de familia')
      : paciente.especialidad;
  return {
    ...paciente,
    especialidad: nuevaEspecialidad,
  };
});

export const hayPacientesDePedriatria: boolean = pacientes.some(
  (paciente: Pacientes) => paciente.especialidad === 'Pediatra'
);

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pacientesMedicoDeFamilia: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) =>
      paciente.especialidad === 'Medico de familia' ? (acc += 1) : acc,
    0
  );
  const pacientesPediatria: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) => (paciente.especialidad === 'Pediatra' ? (acc += 1) : acc),
    0
  );
  const pacientesCardiologia: number = pacientes.reduce(
    (acc: number, paciente: Pacientes) =>
      paciente.especialidad === 'Cardiólogo' ? (acc += 1) : acc,
    0
  );
  return {
    cardiologia: pacientesCardiologia,
    medicoDeFamilia: pacientesMedicoDeFamilia,
    pediatria: pacientesPediatria,
  };
};
