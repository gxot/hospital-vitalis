package backendframework.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AtualizarMedicoDTO {
    private String nome;
    private Long tipoAtendimento;
    private Long localAtendimento;
}
