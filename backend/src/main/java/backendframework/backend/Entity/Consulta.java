package backendframework.backend.Entity;

import jakarta.annotation.Nullable;
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
@Table(name = "consulta")
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo_consulta_id", nullable = false)
    private Integer tipoConsultaId;

    @Column(name = "local_atendimento_id", nullable = false)
    private Integer localAtendimentoId;

    @Column(name = "data_consulta", nullable = false)
    private LocalDate dataConsulta;
}
