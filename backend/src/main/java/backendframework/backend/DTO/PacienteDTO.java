package backendframework.backend.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PacienteDTO {
    private Long id;

    @NotBlank
    @Size(min = 6, max = 150)
    private String nome;

    @NotBlank
    @Size(min = 11, max = 14)
    private String cpf;

    @NotBlank
    @Size(min = 7, max = 50)
    private String email;

    @NotNull
    private LocalDate dataNascimento;
}
