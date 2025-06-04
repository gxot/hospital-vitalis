package backendframework.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_paciente", nullable = false)
    private String nome;

    @Column(name = "cpf_paciente", nullable = false, unique = true)
    private String cpf;

    @Column(name = "email_paciente", nullable = false, unique = true)
    private String email;

    @Column(name = "plano_de_saude_id", nullable = false)
    private Integer planoDeSaudeId;

    @Column(nullable = false)
    private LocalDate dataNascimento;

}
