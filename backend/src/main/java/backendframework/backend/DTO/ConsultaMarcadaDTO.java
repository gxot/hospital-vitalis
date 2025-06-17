package backendframework.backend.DTO;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ConsultaMarcadaDTO {
    private Long id;
    private String tipoNome;
    private String localNome;
    private String medicoNome;
    private LocalDate dataConsulta;
}