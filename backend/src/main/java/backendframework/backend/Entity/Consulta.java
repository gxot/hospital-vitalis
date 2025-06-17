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
    private Long tipoId;

    @Column(name = "local_atendimento_id", nullable = false)
    private Long localId;

    @Column(name = "medico_id", nullable = false)
    private Long medicoId;

    @Column(name = "paciente_id", nullable = false)
    private Long pacienteId;

    @Column(name = "data_consulta", nullable = false)
    private LocalDate dataConsulta;
}
