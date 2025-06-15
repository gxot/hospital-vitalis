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
public class Medico {

    @Id
    @Column
    private Long id;

    @Column(name = "nome_medico", nullable = false)
    private String nome;

    @Column(name = "tipo_consulta_id", nullable = false)
    private Integer tipo_consulta_id;

    @Column(name = "local_atendimento_id", nullable = false)
    private Integer local_atendimento_id;

}
