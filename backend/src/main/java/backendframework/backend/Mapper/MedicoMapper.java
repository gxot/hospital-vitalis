package backendframework.backend.Mapper;

import backendframework.backend.Entity.Medico;
import backendframework.backend.DTO.MedicoDTO;
import org.mapstruct.factory.Mappers;

public interface MedicoMapper {
    MedicoMapper INSTANCE = Mappers.getMapper(MedicoMapper.class);

    MedicoDTO medicoToMedicoDTO(Medico medico);

    Medico medicoDTOToMedico(MedicoDTO medicoDTO);
}
