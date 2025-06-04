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

    @NotBlank
    private int idPlanoDeSaude;

    @NotBlank
    private int idAgendamento;

    @NotBlank
    private int idLocal;

    @NotNull
    private LocalDate dataConsulta;
}
