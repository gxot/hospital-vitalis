package backendframework.backend.Mapper;

import backendframework.backend.DTO.PacienteDTO;
import backendframework.backend.Entity.Paciente;
import org.mapstruct.factory.Mappers;

public interface PacienteMapper {

    PacienteMapper INSTANCE = Mappers.getMapper(PacienteMapper.class);

    PacienteDTO PacienteToPacienteDTO(Paciente paciente);

    Paciente PacienteDTOToPaciente(PacienteDTO pacienteDTO);
}
