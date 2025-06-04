package backendframework.backend.Repository;

import backendframework.backend.Entity.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
}
