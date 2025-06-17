package backendframework.backend.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsultaDTO {

    private Long id;

    @NotNull
    private Long tipoId;

    @NotNull
    private Long localId;

    @NotNull
    private Long medicoId;

    private Long pacienteId;

    @NotNull
    private LocalDate dataConsulta;
}
