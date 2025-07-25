package backendframework.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicoGetDTO {
    private Long id;
    private String nome;
    private String tipoAtendimento;
    private String localAtendimento;
    private Long tipo_consulta_id;
    private Long local_atendimento_id;
}
