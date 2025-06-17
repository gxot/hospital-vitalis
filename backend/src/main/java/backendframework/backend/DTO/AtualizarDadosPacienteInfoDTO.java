package backendframework.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AtualizarDadosPacienteInfoDTO {
    private String nome;
    private String cpf;
    private String email;
    private LocalDate dataNascimento;
    private String planoSaude;
}