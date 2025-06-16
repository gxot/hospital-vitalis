package backendframework.backend.Mapper;

import backendframework.backend.Entity.Medico;
import backendframework.backend.DTO.MedicoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MedicoMapper {
    MedicoMapper INSTANCE = Mappers.getMapper(MedicoMapper.class);

    MedicoDTO medicoToMedicoDTO(Medico medico);

    Medico medicoDTOToMedico(MedicoDTO medicoDTO);
}
