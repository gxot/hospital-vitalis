package backendframework.backend.Mapper;

import backendframework.backend.DTO.ConsultaDTO;
import backendframework.backend.Entity.Consulta;
import org.mapstruct.factory.Mappers;

public interface ConsultaMapper {

    ConsultaMapper INSTANCE = Mappers.getMapper(ConsultaMapper.class);

    ConsultaDTO consultaToConsultaDTO(Consulta consulta);

    Consulta consultaDTOToConsulta(ConsultaDTO consultaDTO);
}
