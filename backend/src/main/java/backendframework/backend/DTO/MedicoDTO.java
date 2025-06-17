package backendframework.backend.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicoDTO {
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String nome;

    @NotBlank
    private Long tipo_consulta_id;

    @NotBlank
    private Long local_atendimento_id;
}
