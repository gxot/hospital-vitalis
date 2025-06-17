package backendframework.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_medico", nullable = false)
    private String nome;

    @Column(name = "tipo_consulta_id", nullable = false)
    private Long tipo_consulta_id;

    @Column(name = "local_atendimento_id", nullable = false)
    private Long local_atendimento_id;

}
